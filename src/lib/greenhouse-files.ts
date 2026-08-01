/**
 * greenhouse-files.ts — read/write helpers for src/data/greenhouse/*.md.
 *
 * Used only by the dev-only editor (src/pages/api/greenhouse.ts) and the
 * `npm run note` scaffolder. The site itself never touches these — it reads the
 * `greenhouse` content collection, which Astro loads from the same folder.
 */
import { readdir, readFile, writeFile, access } from 'node:fs/promises';
import { join, resolve } from 'node:path';

export const GREENHOUSE_DIR = resolve(process.cwd(), 'src/data/greenhouse');

/** Filenames are slugs and slugs are URLs — keep them boring, and un-traversable. */
export const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Throws on anything that isn't a plain slug, so a path can never escape the folder. */
export function notePath(slug: string): string {
  if (!SLUG_RE.test(slug)) throw new Error(`Invalid slug: ${slug}`);
  return join(GREENHOUSE_DIR, `${slug}.md`);
}

export async function listNotes(): Promise<string[]> {
  const files = await readdir(GREENHOUSE_DIR);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.slice(0, -3))
    .sort();
}

export async function readNote(slug: string): Promise<string> {
  return readFile(notePath(slug), 'utf8');
}

export async function writeNote(slug: string, raw: string): Promise<void> {
  await writeFile(notePath(slug), raw.endsWith('\n') ? raw : `${raw}\n`, 'utf8');
}

export async function noteExists(slug: string): Promise<boolean> {
  try {
    await access(notePath(slug));
    return true;
  } catch {
    return false;
  }
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/;

/** Split a note file into its raw YAML block and its markdown body. */
export function splitNote(raw: string): { yaml: string; body: string } | null {
  const m = FRONTMATTER_RE.exec(raw.replace(/^﻿/, ''));
  return m ? { yaml: m[1], body: m[2] } : null;
}

/** The starting point for a new note — mirrors the shape the schema expects. */
export function noteTemplate(opts: {
  title: string;
  date: string;
  order: number;
  tags: string[];
}): string {
  const tags = opts.tags.length ? `[${opts.tags.join(', ')}]` : '[]';
  return `---
title: ${opts.title}
date: ${opts.date}
order: ${opts.order}
tags: ${tags}
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
}
