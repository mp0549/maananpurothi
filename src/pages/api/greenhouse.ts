/**
 * api/greenhouse.ts — backing API for the dev-only greenhouse editor.
 *
 * DEV ONLY. Every handler 404s unless `astro dev` is running, so the route is
 * inert in the deployed build (it also writes to disk, which Vercel wouldn't
 * allow anyway).
 *
 *   GET  ?action=list          → { notes: [{ slug, title }] }
 *   GET  ?slug=reading         → { raw }
 *   POST { action: 'save',    slug, raw }   → { ok }
 *   POST { action: 'create',  title, ... }  → { slug }
 *   POST { action: 'preview', raw, slug }   → { card, body, errors }
 *
 * The preview renders the REAL <GardenNote> through Astro's container API and
 * the REAL markdown pipeline, so what the editor shows is what the site ships —
 * not a lookalike that can drift.
 */
import type { APIRoute } from 'astro';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { parse as parseYaml } from 'yaml';
import GardenNote from '@/components/garden/GardenNote.astro';
import rehypeProse from '@/lib/rehype-prose.mjs';
import {
  listNotes,
  noteExists,
  noteTemplate,
  readNote,
  slugify,
  splitNote,
  writeNote,
  SLUG_RE,
} from '@/lib/greenhouse-files';

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const notFound = () => new Response('Not found', { status: 404 });

/** Built once per server process — the processor is not cheap to construct. */
let processorPromise: ReturnType<typeof createMarkdownProcessor> | null = null;
function markdown() {
  processorPromise ??= createMarkdownProcessor({ rehypePlugins: [rehypeProse] });
  return processorPromise;
}

/**
 * Parse a draft the way the collection schema would, but forgivingly: collect
 * complaints instead of throwing, so a half-typed file still previews and the
 * writer sees what's missing rather than a blank pane.
 */
function parseDraft(raw: string) {
  const errors: string[] = [];
  const split = splitNote(raw);

  if (!split) {
    return {
      errors: ['No frontmatter found — the file must open with a --- block.'],
      data: null,
      body: raw,
    };
  }

  let data: Record<string, unknown> = {};
  try {
    data = (parseYaml(split.yaml) ?? {}) as Record<string, unknown>;
  } catch (e) {
    errors.push(`Frontmatter isn't valid YAML: ${(e as Error).message.split('\n')[0]}`);
    return { errors, data: null, body: split.body };
  }

  if (typeof data.title !== 'string' || !data.title.trim()) errors.push('`title` is required.');
  if (typeof data.date !== 'string' || !data.date.trim()) errors.push('`date` is required.');
  if (typeof data.excerpt !== 'string' || !data.excerpt.trim()) errors.push('`excerpt` is required.');
  if (data.order !== undefined && typeof data.order !== 'number') errors.push('`order` must be a number.');
  if (data.tags !== undefined && !Array.isArray(data.tags)) errors.push('`tags` must be a list, e.g. [Reading, Craft].');

  return { errors, data, body: split.body };
}

export const GET: APIRoute = async ({ url }) => {
  if (!import.meta.env.DEV) return notFound();

  if (url.searchParams.get('action') === 'list') {
    const slugs = await listNotes();
    const notes = await Promise.all(
      slugs.map(async (slug) => {
        const parsed = parseDraft(await readNote(slug));
        return { slug, title: (parsed.data?.title as string) ?? slug };
      }),
    );
    return json({ notes });
  }

  const slug = url.searchParams.get('slug');
  if (!slug || !SLUG_RE.test(slug)) return json({ error: 'Bad slug' }, 400);
  if (!(await noteExists(slug))) return json({ error: 'No such note' }, 404);

  return json({ raw: await readNote(slug) });
};

export const POST: APIRoute = async ({ request }) => {
  if (!import.meta.env.DEV) return notFound();

  const payload = (await request.json()) as Record<string, any>;

  switch (payload.action) {
    case 'save': {
      if (!SLUG_RE.test(payload.slug ?? '')) return json({ error: 'Bad slug' }, 400);
      await writeNote(payload.slug, String(payload.raw ?? ''));
      return json({ ok: true });
    }

    case 'create': {
      const title = String(payload.title ?? '').trim();
      if (!title) return json({ error: 'A title is required' }, 400);

      const slug = slugify(title);
      if (!SLUG_RE.test(slug)) return json({ error: 'That title has no usable slug' }, 400);
      if (await noteExists(slug)) return json({ error: `${slug}.md already exists` }, 409);

      const existing = await listNotes();
      await writeNote(
        slug,
        noteTemplate({
          title,
          date: String(payload.date ?? ''),
          order: existing.length + 1,
          tags: Array.isArray(payload.tags) ? payload.tags : [],
        }),
      );
      return json({ slug });
    }

    case 'preview': {
      const { errors, data, body } = parseDraft(String(payload.raw ?? ''));
      const slug = SLUG_RE.test(payload.slug ?? '') ? payload.slug : 'preview';

      if (!data) return json({ errors, card: '', body: '' });

      const note = {
        title: String(data.title ?? 'Untitled'),
        date: String(data.date ?? ''),
        excerpt: String(data.excerpt ?? ''),
        summary: String(data.summary ?? ''),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        slug,
      };

      // The actual card component, rendered by the actual renderer.
      const container = await AstroContainer.create();
      const card = await container.renderToString(GardenNote, {
        props: { note, index: Number(data.order ?? 1) - 1 || 0 },
      });

      const stripped = body.replace(/<!--[\s\S]*?-->/g, '').trim();
      const rendered = stripped ? (await (await markdown()).render(stripped)).code : '';

      return json({ errors, card, body: rendered });
    }

    default:
      return json({ error: 'Unknown action' }, 400);
  }
};
