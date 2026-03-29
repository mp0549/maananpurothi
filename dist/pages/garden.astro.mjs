import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CJ-luqlO.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BlPna2fb.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Garden = createComponent(($$result, $$props, $$slots) => {
  function slugify(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function tagColor(tag) {
    if (tag === "Thinking") return "#6B1515";
    if (tag === "Writing") return "#8B6914";
    if (tag === "AI") return "#2C4A2C";
    if (tag === "Craft") return "#3C2A1A";
    if (["Theory", "Systems"].includes(tag)) return "#5a4a38";
    return "#3C2A1A";
  }
  const clipPaths = [
    `polygon(0% 0%, 100% 0%, 100% 94%, 97% 97%, 94% 95%, 91% 98%, 88% 95%, 85% 98%, 82% 95%, 79% 97%, 76% 94%, 73% 97%, 70% 95%, 67% 98%, 64% 95%, 61% 97%, 58% 94%, 55% 97%, 52% 95%, 49% 98%, 46% 95%, 43% 97%, 40% 94%, 37% 97%, 34% 95%, 31% 98%, 28% 95%, 25% 97%, 22% 94%, 19% 97%, 16% 95%, 13% 98%, 10% 95%, 7% 97%, 4% 94%, 0% 97%)`,
    `polygon(0% 0%, 100% 0%, 100% 95%, 97% 98%, 94% 96%, 91% 99%, 88% 96%, 85% 99%, 82% 96%, 79% 98%, 76% 95%, 73% 98%, 70% 96%, 67% 99%, 64% 96%, 61% 98%, 58% 95%, 55% 98%, 52% 96%, 49% 99%, 46% 96%, 43% 98%, 40% 95%, 37% 98%, 34% 96%, 31% 99%, 28% 96%, 25% 98%, 22% 95%, 19% 98%, 16% 96%, 13% 99%, 10% 96%, 7% 98%, 4% 95%, 0% 98%)`,
    `polygon(0% 0%, 100% 0%, 100% 93%, 97% 96%, 94% 94%, 91% 97%, 88% 94%, 85% 97%, 82% 94%, 79% 96%, 76% 93%, 73% 96%, 70% 94%, 67% 97%, 64% 94%, 61% 96%, 58% 93%, 55% 96%, 52% 94%, 49% 97%, 46% 94%, 43% 96%, 40% 93%, 37% 96%, 34% 94%, 31% 97%, 28% 94%, 25% 96%, 22% 93%, 19% 96%, 16% 94%, 13% 97%, 10% 94%, 7% 96%, 4% 93%, 0% 96%)`,
    `polygon(0% 0%, 100% 0%, 100% 94%, 98% 97%, 95% 95%, 92% 98%, 89% 96%, 86% 99%, 83% 96%, 80% 98%, 77% 95%, 74% 97%, 71% 95%, 68% 98%, 65% 95%, 62% 97%, 59% 94%, 56% 97%, 53% 95%, 50% 98%, 47% 95%, 44% 97%, 41% 94%, 38% 97%, 35% 95%, 32% 98%, 29% 95%, 26% 97%, 23% 94%, 20% 97%, 17% 95%, 14% 98%, 11% 95%, 8% 97%, 5% 94%, 0% 97%)`,
    `polygon(0% 0%, 100% 0%, 100% 95%, 97% 99%, 94% 96%, 91% 99%, 88% 96%, 85% 99%, 82% 96%, 79% 98%, 76% 95%, 73% 98%, 70% 96%, 67% 99%, 64% 96%, 61% 98%, 58% 95%, 55% 99%, 52% 96%, 49% 98%, 46% 95%, 43% 98%, 40% 95%, 37% 99%, 34% 96%, 31% 98%, 28% 95%, 25% 98%, 22% 96%, 19% 99%, 16% 96%, 13% 98%, 10% 95%, 7% 98%, 4% 96%, 0% 99%)`,
    `polygon(0% 0%, 100% 0%, 100% 93%, 97% 96%, 94% 94%, 91% 97%, 88% 95%, 85% 98%, 82% 95%, 79% 97%, 76% 94%, 73% 97%, 70% 95%, 67% 97%, 64% 94%, 61% 97%, 58% 95%, 55% 98%, 52% 94%, 49% 97%, 46% 95%, 43% 98%, 40% 95%, 37% 97%, 34% 95%, 31% 98%, 28% 94%, 25% 97%, 22% 95%, 19% 97%, 16% 95%, 13% 98%, 10% 95%, 7% 97%, 4% 94%, 0% 97%)`
  ];
  const botanicalSVGs = [
    // Leaf sprig
    `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 40 C22 40 22 24 22 10 M22 24 C22 24 13 19 9 12 M22 30 C22 30 31 26 34 18" stroke="#1C1208" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    // Berry cluster
    `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="24" r="4.5" stroke="#1C1208" stroke-width="1"/><circle cx="27" cy="22" r="3.8" stroke="#1C1208" stroke-width="1"/><circle cx="21" cy="32" r="4.2" stroke="#1C1208" stroke-width="1"/><path d="M16 19.5 C16 19.5 18 13 22 10 M27 18.2 C27 18.2 29 12 26 8" stroke="#1C1208" stroke-width="0.9" fill="none" stroke-linecap="round"/></svg>`,
    // Fern frond
    `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M24 40 C24 40 26 28 30 19 C34 10 31 4 26 7 C21 10 22 22 24 40Z" stroke="#1C1208" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M24 33 C24 33 17 30 13 25 C9 20 10 14 15 17 C20 20 24 33 24 33Z" stroke="#1C1208" stroke-width="1" fill="none" stroke-linecap="round"/></svg>`
  ];
  const notes = [
    {
      title: "Field Notes, Vol. I \u2014 On the Topology of Attention",
      date: "March 2025",
      excerpt: "A loose collection of observations gathered at the edge of focus and distraction \u2014 what the landscape looks like when the mind finally stops moving.",
      summary: "A field observation cross-referencing Simone Weil's writings on attention with modern cognitive science. The territory between focus and distraction turns out to be inhabited. Conclusions provisional but pointing somewhere interesting.",
      href: "#",
      tags: ["Thinking", "Writing"],
      slug: ""
    },
    {
      title: "A Working Theory of Adjacent Possible",
      date: "February 2025",
      excerpt: "Stuart Kauffman's phrase keeps appearing on different maps. I suspect it describes something important about how interesting problems self-select their solvers.",
      summary: "An attempt to map how Kauffman's adjacent possible functions as a predictive tool for intellectual adjacency. The model wants refinement. Still being cross-referenced against the primary literature.",
      href: "#",
      tags: ["Thinking", "Theory"],
      slug: ""
    },
    {
      title: "Marginalia: Tools That Think With You",
      date: "January 2025",
      excerpt: "Notes toward a typology of tools that extend cognition rather than merely automate it. The distinction matters more than most product teams admit.",
      summary: "Toward a typology of cognitive-extension tools versus automation tools. The distinction carries real design implications \u2014 implications most teams have not yet reckoned with. More specimen examples needed before the taxonomy holds.",
      href: "#",
      tags: ["AI", "Craft"],
      slug: ""
    },
    {
      title: "On Reading Maps That Lie",
      date: "December 2024",
      excerpt: "Every map is an argument. Some arguments are honest about their limitations; most are not. A meditation on epistemics, cartography, and institutional knowledge.",
      summary: "Every map is an argument \u2014 this dispatch traces what it means when the argument is dishonest by design. Draws from cartographic history and the politics of institutional knowledge-making. Still unresolved at its core.",
      href: "#",
      tags: ["Thinking", "Writing"],
      slug: ""
    },
    {
      title: "The Shape of a Good Question",
      date: "November 2024",
      excerpt: "Most questions are really conclusions in disguise. The ones worth holding open for years have a particular shape \u2014 pointed enough to aim at something, loose enough to surprise you.",
      summary: "A taxonomy of question-shapes and what makes certain questions worth holding open for years. Still resolving the line between productive ambiguity and productive specificity. The shape is becoming clearer.",
      href: "#",
      tags: ["Thinking", "Craft"],
      slug: ""
    },
    {
      title: "Notes on Legibility and Scale",
      date: "October 2024",
      excerpt: "What it means for a system to remain understandable as it grows \u2014 and why most systems fail at this not through malice but through accumulation.",
      summary: "What it means for a system to remain understandable under growth pressure. Most legibility failures are failures of accumulation, not design intent. Patterns are emerging but not yet codified into a usable model.",
      href: "#",
      tags: ["AI", "Systems"],
      slug: ""
    }
  ];
  notes.forEach((n) => {
    n.slug = slugify(n.title);
  });
  const tagCounts = notes.flatMap((n) => n.tags).reduce((acc, t) => {
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});
  const filterTags = ["Thinking", "Writing", "AI", "Craft"].filter((t) => tagCounts[t] >= 2);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Herbarium \u2014 The Cartographer's Study", "description": "A working herbarium of notes, essays, and field observations \u2014 ideas in various stages of growth.", "variant": "interior", "pageTitle": "The Herbarium" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="garden-room" style="background-color: #E8EDD8;"> <!-- Existing rice-paper texture --> <div class="fixed inset-0 pointer-events-none" style="background-image: url('/textures/ricepaper2.webp'); background-size: 300px 300px; mix-blend-mode: multiply; opacity: 0.25; filter: sepia(0.1) hue-rotate(15deg); z-index: 0;" aria-hidden="true"></div> <!-- Botanical tile pattern (nearly invisible, 3% opacity) --> <div class="fixed inset-0 pointer-events-none" style="background-image: url(\" data:image svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" %3E%3Cpath d="M40 72 C40 72 42 55 40 40 C38 25 36 12 38 5 M40 42 C40 42 27 36 22 28 M40 48 C40 48 54 44 57 36" stroke="%231C1208" stroke-width="1.2" fill="none" stroke-linecap="round" %3E%3C%2Fsvg%3E\"); background-size: 80px 80px; opacity: 0.035; z-index: 0;" aria-hidden="true"></div> <div class="relative z-10 max-w-wide mx-auto px-6 md:px-12 py-14"> <!-- ── Header ──────────────────────────────────────────────────────── --> <div class="max-w-prose mb-6 scroll-reveal"> <p class="section-label text-xs mb-2">The Herbarium</p> <p class="font-fell italic text-ink" style="font-size: 1.1rem; line-height: 1.6;">
This is where I think out loud. Nothing here is finished.
          Some ideas are nearly ripe; others are seeds planted to see what grows.
          All are honest.
</p> </div> <!-- Botanical stem divider (replaces SectionDivider glyph) --> <div class="botanical-header-divider scroll-reveal" aria-hidden="true"> <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 16 Q50 14 100 16 Q150 18 192 16" stroke="#8B6914" stroke-width="1.3" fill="none" stroke-linecap="round"></path> <path d="M45 16 Q43 11 39 8 M45 16 Q48 10 51 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M72 15 Q70 10 66 7 M72 15 Q75 9 78 6" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M100 16 Q98 10 94 7 M100 16 Q103 10 106 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M128 17 Q126 12 122 9 M128 17 Q131 11 134 8" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M155 16 Q153 11 149 8 M155 16 Q158 10 161 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> </svg> </div> <!-- ── Tag filter bar ─────────────────────────────────────────────── --> <div class="garden-filter-bar scroll-reveal" role="group" aria-label="Filter dispatches by category"> ${filterTags.map((tag) => renderTemplate`<button class="specimen-stamp filter-stamp"${addAttribute(tag, "data-tag")} type="button" aria-pressed="false"${addAttribute(`--stamp-color: ${tagColor(tag)}; color: ${tagColor(tag)}; border-color: ${tagColor(tag)};`, "style")}>${tag}</button>`)} </div> <!-- ── Notes board ─────────────────────────────────────────────────── --> <div class="garden-grid"> ${notes.map((note, i) => renderTemplate`<div class="garden-note-wrapper"${addAttribute(i, "data-idx")}${addAttribute(note.tags.join(","), "data-tags")}> <!-- Physical pushpin --> <div class="garden-pin" aria-hidden="true"></div> <!-- Torn journal page card --> <div class="garden-note"${addAttribute(`clip-path: ${clipPaths[i % 6]};`, "style")}> <!-- Date line with leaf glyph --> <p class="garden-note-date">❧ ${note.date}</p> <!-- Title --> <h2 class="garden-note-title">${note.title}</h2> <!-- Gold rule --> <div class="garden-note-rule" aria-hidden="true"></div> <!-- Excerpt --> <p class="garden-note-excerpt">${note.excerpt}</p> <!-- Specimen stamp tags --> <div class="flex flex-wrap gap-1.5 mt-4"> ${note.tags.map((tag) => renderTemplate`<span class="specimen-stamp"${addAttribute(`color: ${tagColor(tag)}; border-color: ${tagColor(tag)};`, "style")}>${tag}</span>`)} </div> <!-- READ DISPATCH button (stage 1 — expands inline) --> <button class="dispatch-btn" type="button" aria-expanded="false">
READ DISPATCH &rarr;
</button> <!-- ── Expanded content (hidden by default) ───────────────── --> <div class="garden-expanded" aria-hidden="true"> <!-- Small botanical divider --> <div class="garden-expanded-divider" aria-hidden="true"> <svg width="120" height="22" viewBox="0 0 120 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 11 Q30 9 60 11 Q90 13 115 11" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M32 11 Q30 7 27 5 M32 11 Q34 6 37 4" stroke="#8B6914" stroke-width="0.8" fill="none" stroke-linecap="round"></path> <path d="M60 11 Q58 7 55 5 M60 11 Q62 6 65 4" stroke="#8B6914" stroke-width="0.8" fill="none" stroke-linecap="round"></path> <path d="M88 11 Q86 7 83 5 M88 11 Q90 6 93 4" stroke="#8B6914" stroke-width="0.8" fill="none" stroke-linecap="round"></path> </svg> </div> <!-- Summary label --> <p class="garden-summary-label">SUMMARY</p> <!-- Placeholder summary text --> <p class="garden-summary-text">${note.summary}</p> <!-- Actions row --> <div class="garden-expand-actions"> <a${addAttribute(`/garden/${note.slug}`, "href")} class="see-full-dispatch">SEE FULL DISPATCH &rarr;</a> <button class="close-dispatch-btn" type="button">CLOSE &uarr;</button> </div> </div> <!-- Botanical marginalia on every other card --> ${i % 2 === 1 && renderTemplate`<div class="botanical-marginalia" aria-hidden="true">${unescapeHTML(botanicalSVGs[Math.floor(i / 2) % 3])}</div>`} </div> </div>`)} </div> <!-- ── Closing note ───────────────────────────────────────────────── --> <div class="mt-20 max-w-prose mx-auto text-center scroll-reveal"> <div aria-hidden="true" style="display:flex;justify-content:center;margin-bottom:1rem;"> <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 16 Q50 14 100 16 Q150 18 192 16" stroke="#8B6914" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.5"></path> <path d="M45 16 Q43 11 39 8 M45 16 Q48 10 51 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"></path> <path d="M100 16 Q98 10 94 7 M100 16 Q103 10 106 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"></path> <path d="M155 16 Q153 11 149 8 M155 16 Q158 10 161 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.5"></path> </svg> </div> <p class="font-fell italic text-ink-muted mt-2" style="font-size: 1rem; line-height: 1.7;">
"The garden is not a collection of finished thoughts.
          It is the terrain where thinking happens — messy, seasonal, and alive."
</p> <p class="section-label text-xs mt-3">— The Cartographer's Preface</p> </div> </div> </div> ` })}  ${renderScript($$result, "C:/Users/maana/Desktop/person_web/src/pages/garden.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/maana/Desktop/person_web/src/pages/garden.astro", void 0);

const $$file = "C:/Users/maana/Desktop/person_web/src/pages/garden.astro";
const $$url = "/maananpurothi/garden";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Garden,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
