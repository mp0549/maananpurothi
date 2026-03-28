import { e as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_rqQWen4l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B_0CfVOH.mjs';
import { $ as $$SectionDivider } from '../chunks/SectionDivider_CEcveQEW.mjs';
export { renderers } from '../renderers.mjs';

const $$Codex = createComponent(($$result, $$props, $$slots) => {
  const entries = [
    {
      title: "Expedition I \u2014 The Cognition Engine",
      dateRange: "2024 \u2013 Present",
      description: "An ongoing survey of uncharted terrain at the intersection of machine cognition and collaborative sense-making. The expedition produced three working prototypes and a published field report.",
      tags: ["AI/ML", "Research", "Python", "HCI"],
      href: "/garden",
      rotation: -0.6,
      categories: ["Research"]
    },
    {
      title: "Expedition II \u2014 Social Architecture",
      dateRange: "2023 \u2013 2024",
      description: "A cartographic project mapping the social architecture of nascent communities. Produced field guides, frameworks, and a small constellation of tools still in active use.",
      tags: ["Community", "Product", "TypeScript"],
      href: "/garden",
      rotation: 0.4,
      categories: ["Community", "Engineering"]
    },
    {
      title: "Expedition III \u2014 Sparse Signal",
      dateRange: "2022 \u2013 2023",
      description: "Deep reconnaissance into systems that learn from sparse signals. The resulting instruments have since been adopted by several downstream expeditions.",
      tags: ["Systems", "Data", "Rust", "ML"],
      href: "/garden",
      rotation: -0.3,
      categories: ["Research", "Engineering"]
    },
    {
      title: "Expedition IV \u2014 The Infrastructure Layer",
      dateRange: "2021 \u2013 2022",
      description: "A foundational survey establishing the underlying terrain for everything that followed. Not glamorous; essential. Built the roads that later expeditions walked.",
      tags: ["Infrastructure", "DevOps", "Go"],
      href: "/garden",
      rotation: 0.7,
      categories: ["Engineering"]
    },
    {
      title: "Research Fellowship \u2014 Institute Name",
      dateRange: "Summer 2023",
      description: "A concentrated season of deep work at a selective research fellowship. Produced two position papers and one working prototype. Relationships formed here continue to shape the work.",
      tags: ["Research", "Fellowship", "Writing"],
      href: "/garden",
      rotation: -0.5,
      categories: ["Research"]
    },
    {
      title: "Open Source \u2014 Toolkit Name",
      dateRange: "2022 \u2013 Present",
      description: "A small but useful library for a narrow problem that turned out to be more common than anticipated. Maintained by a loose coalition of contributors across four time zones.",
      tags: ["Open Source", "TypeScript"],
      href: "/garden",
      rotation: 0.3,
      categories: ["Engineering", "Community"]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Codex \u2014 The Cartographer's Study", "description": "Archive of expeditions, projects, and experiences \u2014 a record of territories explored.", "variant": "interior", "pageTitle": "The Codex" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="fixed inset-0 pointer-events-none" style="background-image: url('/textures/ricepaper2.webp'); background-size: 300px 300px; mix-blend-mode: multiply; opacity: 0.18; z-index: 0;" aria-hidden="true"></div> <div class="relative z-10 max-w-wide mx-auto px-6 md:px-12 py-14"> <!-- Intro inscription --> <div class="max-w-prose mb-10 scroll-reveal"> <p class="section-label text-xs mb-1">Archive of Expeditions</p> <p class="text-ink-muted font-body leading-relaxed">
A chronicle of territories explored, instruments built, and problems pursued.
        Each entry is a sustained engagement — recorded here for those who follow the same routes.
</p> </div> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2726" })} <!-- ── Filter tabs ──────────────────────────────────────────────── --> <div class="flex flex-wrap gap-0 border-b border-gold-pale mb-8 mt-8" role="tablist" aria-label="Filter expeditions"> ${["All", "Research", "Engineering", "Community"].map((tab) => renderTemplate`<button${addAttribute(["folder-tab", { active: tab === "All" }], "class:list")}${addAttribute(tab, "data-filter")} role="tab"${addAttribute(tab === "All" ? "true" : "false", "aria-selected")}> ${tab} </button>`)} </div> <!-- ── Expedition card grid ─────────────────────────────────────── --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="entries-grid"> ${entries.map((entry, i) => renderTemplate`<div class="expedition-card"${addAttribute(entry.categories.join(" "), "data-categories")}${addAttribute(`transition: opacity 0.25s ease; animation-delay: ${i * 0.06}s;`, "style")}> <article class="parchment-card p-6 h-full flex flex-col gap-3"${addAttribute(`transform: rotate(${entry.rotation}deg); transition: transform 0.25s ease, box-shadow 0.25s ease;`, "style")}> <!-- Date stamp --> <p class="section-label text-xs">${entry.dateRange}</p> <!-- Title --> <h2 class="font-display text-base text-ink leading-snug">${entry.title}</h2> <!-- Thin rule --> <div style="height: 1px; background: linear-gradient(to right, var(--color-gold-pale), transparent); opacity: 0.7;"></div> <!-- Description --> <p class="text-ink-muted text-sm leading-relaxed flex-1 font-body">${entry.description}</p> <!-- Tags --> <div class="flex flex-wrap gap-1.5"> ${entry.tags.map((tag) => renderTemplate`<span class="tag-pill">${tag}</span>`)} </div> <!-- Link --> <a${addAttribute(entry.href, "href")} class="self-start font-display text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors mt-1">
Read Dispatch &rarr;
</a> </article> </div>`)} </div> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2055" })} <!-- ── Stations Occupied (experience timeline) ─────────────────── --> <section class="mt-4 max-w-2xl"> <p class="section-label text-xs mb-2 scroll-reveal">Professional Record</p> <h2 class="font-display text-2xl text-ink mb-1 scroll-reveal">Stations Occupied</h2> <span class="heading-rule max-w-[10rem] scroll-reveal"></span> <div class="space-y-10 mt-6"> ${[
    { role: "Role Title", org: "Company or Organization", period: "2024 \u2013 Present", desc: "Brief description of your responsibilities and what you built or achieved in this role." },
    { role: "Previous Role", org: "Previous Company", period: "2022 \u2013 2024", desc: "What you did, what you shipped, and what you learned in the field." },
    { role: "Earlier Role", org: "Earlier Company", period: "2020 \u2013 2022", desc: "Foundational experience \u2014 the apprenticeship that taught the craft." }
  ].map(({ role, org, period, desc }) => renderTemplate`<div class="flex gap-6 items-start scroll-reveal"> <div class="w-px self-stretch bg-gold-pale flex-shrink-0 mt-1" aria-hidden="true"></div> <div class="space-y-1 pb-6"> <p class="section-label text-xs">${period}</p> <h3 class="font-display text-base text-ink">${role}</h3> <p class="text-gold font-display text-xs tracking-wide">${org}</p> <p class="text-ink-muted text-sm leading-relaxed mt-2 font-body">${desc}</p> </div> </div>`)} </div> </section> </div> ` })} ${renderScript($$result, "C:/Users/maana/Desktop/person_web/src/pages/codex.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/maana/Desktop/person_web/src/pages/codex.astro", void 0);

const $$file = "C:/Users/maana/Desktop/person_web/src/pages/codex.astro";
const $$url = "/codex";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Codex,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
