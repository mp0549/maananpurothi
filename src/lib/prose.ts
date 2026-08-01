/**
 * prose.ts — inline markup parser shared by the hero bio and the about page.
 *
 * Content in `src/data/*.json` is plain text with one composable token:
 * `[text|definition](url)`, where `|definition` and `(url)` are each OPTIONAL.
 *
 *   [text|definition]        → glossary term with a hover/focus/tap tooltip
 *   [text](url)              → plain hyperlink
 *   [text|definition](url)   → a hyperlink that ALSO shows a tooltip
 *
 * `text` may be multiple words. As a shorthand for single-word links, a bare
 * `word(url)` (no brackets) also becomes a hyperlink, e.g.
 * `Equistamp(https://equistamp.com)`. That only fires when the parens hold
 * something link-shaped (http(s)/mailto/`/`/`#`), so ordinary parentheticals
 * like "something (aside)" are left untouched.
 *
 * Any `url` starting with http(s) opens in a new tab; mailto:/relative links
 * open in place.
 */

export type ProsePart =
  | { type: 'text'; value: string }
  | { type: 'token'; text: string; def?: string; href?: string; external?: boolean };

const LINKISH = /^(?:https?:\/\/|mailto:|\/|#)/i;

/** Parse a single block of text into renderable parts. */
export function parseProse(para: string): ProsePart[] {
  // Bracket form: [text] , optional |def , optional (url)
  // Bare form:    word(url) where url is link-shaped
  const tokenRe =
    /\[([^\]|]+)(?:\|([^\]]+))?\](?:\(([^)]+)\))?|([^\s[\]()|]+)\(((?:https?:\/\/|mailto:|\/|#)[^)\s]+)\)/g;
  const parts: ProsePart[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = tokenRe.exec(para)) !== null) {
    const [full, bText, bDef, bHref, wText, wHref] = m;
    // Normalise the two alternatives into text / def / href.
    const isBracket = bText !== undefined;
    const text = (isBracket ? bText : wText).trim();
    const def = isBracket && bDef !== undefined ? bDef.trim() : undefined;
    const href = (isBracket ? bHref : wHref)?.trim();
    // `[text]` with neither a definition nor a url isn't markup — emit as-is.
    if (def === undefined && href === undefined) continue;

    if (m.index > last) {
      parts.push({ type: 'text', value: para.slice(last, m.index) });
    }
    parts.push({
      type: 'token',
      text,
      ...(def !== undefined ? { def } : {}),
      ...(href !== undefined
        ? { href, external: LINKISH.test(href) && /^https?:/i.test(href) }
        : {}),
    });
    last = m.index + full.length;
  }
  if (last < para.length) {
    parts.push({ type: 'text', value: para.slice(last) });
  }
  return parts;
}

/** Flatten a block to plain text — for <meta> tags and anywhere markup can't render. */
export function stripProse(raw: string): string {
  return parseProse(raw)
    .map((p) => (p.type === 'text' ? p.value : p.text))
    .join('')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Parse a multi-paragraph string (blank-line separated) into parts per paragraph. */
export function parseProseBlocks(raw: string): ProsePart[][] {
  return raw.split('\n\n').map(parseProse);
}
