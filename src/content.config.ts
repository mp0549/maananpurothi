/**
 * content.config.ts — content collections.
 *
 * `greenhouse` is the Garden's writing folder: one markdown file per note in
 * src/data/greenhouse/. The filename is the URL slug (reading.md → /garden/reading),
 * frontmatter holds the card metadata, and the body is the full dispatch.
 *
 * Both the frontmatter prose (excerpt, summary) and the markdown body accept the
 * house inline markup — [text](url), [text|definition], [text|definition](url).
 * The body additionally accepts ordinary markdown: headings, lists, emphasis,
 * blockquotes, code.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const greenhouse = defineCollection({
  // `_name.md` is ignored — somewhere to park a scratch file or a note you
  // don't want on the board yet without it failing the schema.
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/data/greenhouse' }),
  schema: z.object({
    /** Card heading, and the <h1> on the dispatch page. */
    title: z.string(),
    /** Free text — displayed as written, e.g. "July 2026". */
    date: z.string(),
    /** Board order, low to high. Notes without one sort to the end. */
    order: z.number().default(999),
    /** Specimen stamps. A tag shared by 2+ notes also becomes a filter button. */
    tags: z.array(z.string()).default([]),
    /** One or two lines, shown on the card face and used as the meta description. */
    excerpt: z.string(),
    /** Shown when the card expands. Blank lines start new paragraphs. */
    summary: z.string().default(''),
  }),
});

export const collections = { greenhouse };
