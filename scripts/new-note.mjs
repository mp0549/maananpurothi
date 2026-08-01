#!/usr/bin/env node
/**
 * new-note.mjs — `npm run note`
 *
 * Asks for a title, date, and tags, then stamps out src/data/greenhouse/<slug>.md
 * ready to write in. Nothing clever: it exists so starting a note is one command
 * instead of copy-paste-a-file-and-fix-the-frontmatter.
 *
 * Non-interactive too:  npm run note -- "Trail Notes" --tags Outdoors,Reading
 */
import { createInterface } from 'node:readline/promises';
import { stdin, stdout, argv, exit } from 'node:process';
import { readdir, writeFile, access } from 'node:fs/promises';
import { join, resolve, relative } from 'node:path';

const DIR = resolve(process.cwd(), 'src/data/greenhouse');

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

const slugify = (t) =>
  t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const exists = async (p) => access(p).then(() => true, () => false);

// ── Arguments: a bare title, plus optional --tags / --date ──────────────────
const args = argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? null : args[i + 1] ?? null;
};
const positional = args.filter((a, i) =>
  !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));

const rl = createInterface({ input: stdin, output: stdout });
const ask = async (q, fallback = '') => {
  const answer = (await rl.question(fallback ? `${q} [${fallback}] ` : `${q} `)).trim();
  return answer || fallback;
};

try {
  const now = new Date();
  const defaultDate = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

  const title = positional[0] ?? (await ask('Title?'));
  if (!title) {
    console.error('A title is required.');
    exit(1);
  }

  const slug = slugify(title);
  if (!slug) {
    console.error(`"${title}" has no usable slug — try something with letters in it.`);
    exit(1);
  }

  const file = join(DIR, `${slug}.md`);
  if (await exists(file)) {
    console.error(`${relative(process.cwd(), file)} already exists.`);
    exit(1);
  }

  const date = flag('date') ?? (positional[0] ? defaultDate : await ask('Date?', defaultDate));
  const tagsRaw = flag('tags') ?? (positional[0] ? '' : await ask('Tags? (comma-separated)'));
  const tags = tagsRaw.split(',').map((t) => t.trim()).filter(Boolean);

  // Sort to the end of the board by default.
  const count = (await readdir(DIR)).filter((f) => f.endsWith('.md')).length;

  const body = `---
title: ${title}
date: ${date}
order: ${count + 1}
tags: [${tags.join(', ')}]
excerpt: >-
  One or two lines for the card face.
summary: |
  What you see when the card expands.

  Blank lines start new paragraphs. Links look like
  [this](https://example.com), and [a term|the tooltip that explains it]
  gets a dotted underline.
---

<!-- The full dispatch goes here — plain markdown, write as much as you like.
     Until there's something below this line, the dispatch page shows its
     "not written yet" placeholder. -->
`;

  await writeFile(file, body, 'utf8');

  console.log(`\n  ✦ ${relative(process.cwd(), file)}`);
  console.log(`    page:   /garden/${slug}`);
  console.log(`    write:  npm run dev  →  http://localhost:4321/greenhouse/edit\n`);
} finally {
  rl.close();
}
