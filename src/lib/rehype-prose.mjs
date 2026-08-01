/**
 * rehype-prose.mjs — teaches the markdown body of a greenhouse note the same
 * inline vocabulary the JSON copy uses (see src/lib/prose.ts):
 *
 *   [text|definition]        → glossary term with a hover/focus/tap tooltip
 *   [text|definition](url)   → a link that ALSO shows a tooltip
 *
 * Ordinary markdown links keep working — they just pick up the gold `prose-link`
 * treatment so body copy matches the About page, and external ones open in a new
 * tab. Styling for all three classes lives in src/styles/prose.css (global, so it
 * reaches HTML the markdown pipeline generates).
 *
 * Deliberately dependency-free: this runs inside the production build, so it
 * walks the tree by hand rather than resting on a transitive unist dependency.
 *
 * The `word(url)` shorthand from prose.ts is NOT supported here — in a markdown
 * file just write a normal [link](url).
 */

/** `[text|definition]` that markdown left alone (no following parenthesis). */
const TERM_RE = /\[([^\]|]+)\|([^\]]+)\]/g;
const EXTERNAL = /^https?:/i;
/** Never rewrite anything inside these. */
const OPAQUE = new Set(['code', 'pre', 'script', 'style']);

const textNode = (value) => ({ type: 'text', value });

const tipNode = (def) => ({
  type: 'element',
  tagName: 'span',
  properties: { className: ['prose-tip'], role: 'tooltip' },
  children: [textNode(def)],
});

const termNode = (text, def) => ({
  type: 'element',
  tagName: 'span',
  properties: { className: ['prose-term'], tabindex: '0' },
  children: [textNode(text), tipNode(def)],
});

/** Flatten a node's rendered text, so we can read a link's label. */
function textOf(node) {
  if (node.type === 'text') return node.value;
  if (Array.isArray(node.children)) return node.children.map(textOf).join('');
  return '';
}

/** Split one text node on the `[text|definition]` pattern. */
function expandTerms(value) {
  const out = [];
  let last = 0;
  let m;
  TERM_RE.lastIndex = 0;
  while ((m = TERM_RE.exec(value)) !== null) {
    if (m.index > last) out.push(textNode(value.slice(last, m.index)));
    out.push(termNode(m[1].trim(), m[2].trim()));
    last = m.index + m[0].length;
  }
  if (!out.length) return null; // nothing matched — leave the node untouched
  if (last < value.length) out.push(textNode(value.slice(last)));
  return out;
}

/**
 * Give an <a> the house treatment. A label written as `[text|definition](url)`
 * reaches us as a link whose label still contains the `|`, so split it here.
 */
function decorateLink(node) {
  const classes = ['prose-link'];
  const label = textOf(node);
  const bar = label.indexOf('|');

  if (bar !== -1) {
    const text = label.slice(0, bar).trim();
    const def = label.slice(bar + 1).trim();
    if (text && def) {
      node.children = [textNode(text), tipNode(def)];
      classes.push('prose-term');
    }
  }

  const href = node.properties?.href ?? '';
  if (EXTERNAL.test(href)) {
    node.properties.target = '_blank';
    node.properties.rel = 'noopener';
  }

  const existing = node.properties.className;
  node.properties.className = Array.isArray(existing)
    ? [...existing, ...classes]
    : classes;
}

function walk(node) {
  if (!Array.isArray(node.children)) return;
  if (node.type === 'element' && OPAQUE.has(node.tagName)) return;

  const out = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      const expanded = expandTerms(child.value);
      out.push(...(expanded ?? [child]));
      continue;
    }
    if (child.type === 'element' && child.tagName === 'a') {
      decorateLink(child); // owns its own label; don't re-walk it
    } else {
      walk(child);
    }
    out.push(child);
  }
  node.children = out;
}

export default function rehypeProse() {
  return (tree) => walk(tree);
}
