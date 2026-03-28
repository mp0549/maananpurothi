import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_rqQWen4l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B_0CfVOH.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  function slugify(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function tagColor(tag) {
    if (["AI", "Theory", "Complexity", "Systems"].includes(tag)) return "#6B1515";
    if (["Tools", "Process", "Product"].includes(tag)) return "#2C4A2C";
    if (["Essays", "Writing"].includes(tag)) return "#8B6914";
    return "#3C2A1A";
  }
  const notes = [
    {
      title: "Field Notes, Vol. I \u2014 On the Topology of Attention",
      date: "March 2025",
      excerpt: "A loose collection of observations gathered at the edge of focus and distraction \u2014 what the landscape looks like when the mind finally stops moving.",
      tags: ["Cognition", "Essays"]
    },
    {
      title: "A Working Theory of Adjacent Possible",
      date: "February 2025",
      excerpt: "Stuart Kauffman's phrase keeps appearing on different maps. I suspect it describes something important about how interesting problems self-select their solvers.",
      tags: ["Complexity", "Theory"]
    },
    {
      title: "Marginalia: Tools That Think With You",
      date: "January 2025",
      excerpt: "Notes toward a typology of tools that extend cognition rather than merely automate it. The distinction matters more than most product teams admit.",
      tags: ["Tools", "AI", "Product"]
    },
    {
      title: "On Reading Maps That Lie",
      date: "December 2024",
      excerpt: "Every map is an argument. Some arguments are honest about their limitations; most are not. A meditation on epistemics, cartography, and institutional knowledge.",
      tags: ["Epistemics", "Writing"]
    },
    {
      title: "The Shape of a Good Question",
      date: "November 2024",
      excerpt: "Most questions are really conclusions in disguise. The ones worth holding open for years have a particular shape \u2014 pointed enough to aim at something, loose enough to surprise you.",
      tags: ["Epistemics", "Process"]
    },
    {
      title: "Notes on Legibility and Scale",
      date: "October 2024",
      excerpt: "What it means for a system to remain understandable as it grows \u2014 and why most systems fail at this not through malice but through accumulation.",
      tags: ["Systems", "AI"]
    }
  ];
  const { slug } = Astro2.params;
  const note = notes.find((n) => slugify(n.title) === slug);
  if (!note) {
    return Astro2.redirect("/garden");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${note.title} \u2014 The Herbarium`, "description": note.excerpt, "variant": "interior", "pageTitle": note.title }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="dispatch-room" style="background-color: #E8EDD8; min-height: 100vh;"> <!-- Rice-paper texture overlay --> <div class="fixed inset-0 pointer-events-none" style="background-image: url('/textures/ricepaper2.webp'); background-size: 300px 300px; mix-blend-mode: multiply; opacity: 0.25; filter: sepia(0.1) hue-rotate(15deg); z-index: 0;" aria-hidden="true"></div> <!-- Botanical tile pattern --> <div class="fixed inset-0 pointer-events-none" style="background-image: url(\" data:image svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" %3E%3Cpath d="M40 72 C40 72 42 55 40 40 C38 25 36 12 38 5 M40 42 C40 42 27 36 22 28 M40 48 C40 48 54 44 57 36" stroke="%231C1208" stroke-width="1.2" fill="none" stroke-linecap="round" %3E%3C%2Fsvg%3E\"); background-size: 80px 80px; opacity: 0.035; z-index: 0;" aria-hidden="true"></div> <div class="relative z-10 mx-auto px-6 md:px-12 py-14" style="max-width: 680px;"> <!-- Back link --> <a href="/garden" class="dispatch-back">
&larr; Back to the Herbarium
</a> <!-- Journal page card --> <article class="dispatch-page"> <!-- Date + status --> <div class="dispatch-meta"> <span class="dispatch-date">❧ ${note.date}</span> <span class="dispatch-status">IN PROGRESS</span> </div> <!-- Title --> <h1 class="dispatch-title">${note.title}</h1> <!-- Specimen stamp tags --> <div class="flex flex-wrap gap-1.5 mt-4 mb-6"> ${note.tags.map((tag) => renderTemplate`<span class="specimen-stamp"${addAttribute(`color: ${tagColor(tag)}; border-color: ${tagColor(tag)};`, "style")}>${tag}</span>`)} </div> <!-- Botanical divider --> <div class="dispatch-divider" aria-hidden="true"> <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8 16 Q50 14 100 16 Q150 18 192 16" stroke="#8B6914" stroke-width="1.3" fill="none" stroke-linecap="round"></path> <path d="M45 16 Q43 11 39 8 M45 16 Q48 10 51 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M72 15 Q70 10 66 7 M72 15 Q75 9 78 6" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M100 16 Q98 10 94 7 M100 16 Q103 10 106 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M128 17 Q126 12 122 9 M128 17 Q131 11 134 8" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> <path d="M155 16 Q153 11 149 8 M155 16 Q158 10 161 7" stroke="#8B6914" stroke-width="1" fill="none" stroke-linecap="round"></path> </svg> </div> <!-- Excerpt (enlarged) --> <p class="dispatch-excerpt">${note.excerpt}</p> <!-- Second botanical divider --> <div class="dispatch-divider" aria-hidden="true"> <svg width="160" height="26" viewBox="0 0 160 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 13 Q40 11 80 13 Q120 15 154 13" stroke="#8B6914" stroke-width="1.1" fill="none" stroke-linecap="round" opacity="0.6"></path> <path d="M40 13 Q38 9 35 6 M40 13 Q42 8 45 5" stroke="#8B6914" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.6"></path> <path d="M80 13 Q78 9 75 6 M80 13 Q82 8 85 5" stroke="#8B6914" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.6"></path> <path d="M120 13 Q118 9 115 6 M120 13 Q122 8 125 5" stroke="#8B6914" stroke-width="0.9" fill="none" stroke-linecap="round" opacity="0.6"></path> </svg> </div> <!-- Placeholder content block — torn paper style --> <div class="dispatch-placeholder"> <!-- Wax stamp corner --> <div class="dispatch-wax-stamp" aria-hidden="true"> <span>IN<br>PROGRESS</span> </div> <p class="dispatch-placeholder-text">
The full dispatch has not yet been transcribed.
            The cartographer's notes are still being assembled —
            cross-referenced against the field record and set
            in order before committing to ink.
</p> </div> <!-- Word count placeholder --> <p class="dispatch-wordcount">~ 800 words &middot; est. 4 min read</p> </article> </div> </div> ` })} `;
}, "C:/Users/maana/Desktop/person_web/src/pages/garden/[slug].astro", void 0);

const $$file = "C:/Users/maana/Desktop/person_web/src/pages/garden/[slug].astro";
const $$url = "/garden/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
