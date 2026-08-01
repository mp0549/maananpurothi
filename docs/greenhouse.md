# The Greenhouse — writing garden notes

One markdown file per note in `src/data/greenhouse/`. **The filename is the URL**:
`reading.md` → `/garden/reading`. Renaming a file changes the link, so rename
deliberately.

## Writing

```bash
npm run note                     # asks title / date / tags, stamps out the file
npm run note -- "Trail Notes" --tags Outdoors,Reading   # or skip the questions

npm run dev                      # then open http://localhost:4321/greenhouse/edit
```

The editor is a split view: the raw file on the left, the live card and dispatch
page on the right. It renders through the site's own component and markdown
pipeline, so the preview can't drift from what ships. `⌘S` / `Ctrl+S` saves.
It only exists while `npm run dev` is running — the page and its API both 404 in
production.

## The shape of a file

```markdown
---
title: Reading                # card heading and page <h1>
date: July 2026               # free text, shown as written
order: 1                      # board position, low to high
tags: [Reading]               # specimen stamps; a tag on 2+ notes becomes a filter
excerpt: >-
  One or two lines for the card face.
summary: |
  What you see when the card expands.

  Blank lines start new paragraphs.
---

The full dispatch. Ordinary markdown — headings, lists, emphasis,
blockquotes, code, images.
```

Only `title`, `date`, and `excerpt` are required. A file with nothing under the
frontmatter still gets a card; its page shows the "in progress" placeholder.

## Inline markup

Works in `excerpt`, `summary`, and the body alike:

| You write | You get |
| --- | --- |
| `[text](url)` | a gold-underlined link (external ones open in a new tab) |
| `[text\|definition]` | dotted underline, tooltip on hover/focus/tap |
| `[text\|definition](url)` | both at once |

The body also takes full markdown on top of that. The frontmatter fields don't —
they're one-liners, so they only understand the three forms above (plus the
`word(url)` shorthand from `src/lib/prose.ts`).

## Parking a draft

Prefix the filename with an underscore — `_half-finished.md` — and the loader
skips it entirely. Rename it back when it's ready.

## Where things live

| | |
| --- | --- |
| Notes | `src/data/greenhouse/*.md` |
| Schema | `src/content.config.ts` |
| Board | `src/pages/garden.astro` → `src/components/garden/GardenNote.astro` |
| Note page | `src/pages/garden/[slug].astro` |
| Tooltip syntax in bodies | `src/lib/rehype-prose.mjs` (registered in `astro.config.mjs`) |
| Tooltip syntax in JSON/frontmatter | `src/lib/prose.ts` → `src/components/ProseText.astro` |
| Link + tooltip styling | `src/styles/prose.css` (global — both pipelines emit these classes) |
| Editor | `src/pages/greenhouse/edit.astro` + `src/pages/api/greenhouse.ts` |
