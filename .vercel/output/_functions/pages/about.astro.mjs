import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BisCJTvH.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DfTXD5F0.mjs';
import { $ as $$SectionDivider } from '../chunks/SectionDivider_DZ21MfjQ.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "The Cartographer \u2014 The Cartographer's Study", "description": "Who I am, what I care about, and where I am going.", "variant": "interior", "pageTitle": "The Cartographer" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative min-h-screen"> <div class="fixed inset-0 pointer-events-none" style="background-image: url('/textures/parchment_texture1.jpg'); background-size: 420px 420px; mix-blend-mode: multiply; opacity: 0.2; filter: sepia(0.2); z-index: 0;" aria-hidden="true"></div> <div class="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-16"> <!-- ── Two-column layout ──────────────────────────────────────── --> <div class="grid md:grid-cols-[260px_1fr] gap-12 items-start"> <!-- Left: Portrait + annotation --> <aside class="md:sticky md:top-24 flex flex-col items-center gap-6"> <!-- Portrait frame --> <div class="portrait-frame w-full aspect-[3/4] flex items-center justify-center"> <!-- Replace with <img> when you have a photo --> <div class="flex flex-col items-center gap-2 opacity-60"> <span class="font-display text-5xl text-ink-muted" style="line-height: 1;">YN</span> <div style="width: 30px; height: 1px; background: var(--color-gold-pale);"></div> <span class="font-decorative text-xs tracking-widest text-gold-pale uppercase" style="font-size: 0.5rem;">Portrait</span> </div> </div> <!-- Small caption --> <div class="text-center space-y-1"> <p class="font-decorative text-xs text-gold uppercase tracking-widest" style="font-size: 0.55rem; letter-spacing: 0.2em;">
Cartographer ✦ Researcher ✦ Builder
</p> <p class="font-body italic text-xs text-ink-muted">
[City, Country]
</p> </div> <!-- Decorative ornament --> <span class="ornament text-lg" aria-hidden="true">❧</span> </aside> <!-- Right: Pinned notes --> <div class="space-y-8"> <!-- Note 1: Who I Am --> <section class="pinned-note scroll-reveal"> <h2 class="font-display text-lg text-ink mb-3">Who I Am</h2> <div class="text-ink-muted leading-relaxed space-y-3 font-body"> <p>
I am a builder, researcher, and chronic explorer of ideas that sit at the
                edges of disciplines — the places where the maps run out and the interesting
                work begins.
</p> <p>
My background spans [your actual background here]. I care most about building
                things that matter, understanding systems that are too complex to understand fully,
                and finding the right framing for hard problems.
</p> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2726" })} <!-- Note 2: What I Care About --> <section class="pinned-note scroll-reveal"> <h2 class="font-display text-lg text-ink mb-3">What I Care About</h2> <div class="space-y-3 font-body"> ${[
    { glyph: "\u2767", text: "How external tools and systems extend \u2014 or constrain \u2014 human thought." },
    { glyph: "\u2767", text: "The design of communities and institutions that make collective reasoning better." },
    { glyph: "\u2767", text: "Ensuring increasingly capable AI systems remain legible, steerable, and genuinely beneficial." },
    { glyph: "\u2767", text: "The aesthetics of the frontier \u2014 maps, diagrams, field notes, and the poetics of exploration." }
  ].map(({ glyph, text }) => renderTemplate`<div class="flex gap-3 items-baseline"> <span class="text-gold font-decorative text-xs shrink-0 mt-0.5">${glyph}</span> <p class="text-ink-muted leading-relaxed">${text}</p> </div>`)} </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2055" })} <!-- Note 3: How I Got Here --> <section class="pinned-note scroll-reveal"> <h2 class="font-display text-lg text-ink mb-3">How I Got Here</h2> <div class="text-ink-muted leading-relaxed space-y-3 font-body"> <p>
The route was not direct. [Describe your actual background — education, pivots,
                formative experiences.] Each leg of the journey left instruments I still carry.
</p> <p>
The thing I learned earliest and forget most often: the map is not the territory.
                The model is not the system. The plan is not the expedition.
</p> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2767" })} <!-- Note 4: Where I'm Going --> <section class="pinned-note scroll-reveal"> <h2 class="font-display text-lg text-ink mb-3">Where I'm Going</h2> <div class="text-ink-muted leading-relaxed space-y-3 font-body"> <p>
Right now: [brief description of current focus area or direction].
                The work is harder than I expected, which is a reliable sign it's worth pursuing.
</p> <p class="font-fell italic text-ink" style="font-size: 1rem;">
"Not all those who wander are lost — but most of them are making maps."
</p> </div> </section> </div> </div> </div> </div> ` })}`;
}, "C:/Users/maana/Desktop/person_web/src/pages/about.astro", void 0);

const $$file = "C:/Users/maana/Desktop/person_web/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
