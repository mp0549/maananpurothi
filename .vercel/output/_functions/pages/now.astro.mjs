import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_rqQWen4l.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B_0CfVOH.mjs';
import { $ as $$SectionDivider } from '../chunks/SectionDivider_CEcveQEW.mjs';
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  const lastUpdated = "March 2025";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Now \u2014 The Cartographer's Study", "description": "What I am currently building, reading, and thinking about \u2014 updated periodically.", "variant": "interior", "pageTitle": "The Observatory" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-prose mx-auto px-6 py-14 space-y-14"> <!-- Last updated --> <div class="scroll-reveal"> <p class="text-ink-muted text-sm font-body italic">
Last updated: <span class="text-gold font-display not-italic">${lastUpdated}</span> </p> <span class="heading-rule max-w-[6rem] mt-3"></span> </div> <!-- Building --> <section class="scroll-reveal"> <p class="section-label text-xs mb-2">Active Expedition</p> <h2 class="font-display text-2xl text-ink mb-1">Building</h2> <span class="heading-rule max-w-[7rem]"></span> <div class="text-ink-muted leading-relaxed space-y-4 font-body mt-2"> <p>
I'm currently deep in a project exploring [describe your main project here].
          The problem is harder than I expected, which is a reliable sign that it's worth pursuing.
</p> <p>
On the side: a small utility tool I built for myself that turns out to be useful for others.
          I'm deciding whether to invest in making it properly public or let it stay a personal instrument.
</p> </div> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2767" })} <!-- Reading --> <section class="scroll-reveal"> <p class="section-label text-xs mb-2">Field Library</p> <h2 class="font-display text-2xl text-ink mb-1">Reading</h2> <span class="heading-rule max-w-[7rem]"></span> <ul class="space-y-6 text-ink-muted mt-4"> ${[
    {
      title: "Book Title One",
      author: "Author Name",
      note: "Dense but rewarding. The central argument reframes something I thought I understood. Taking it slowly."
    },
    {
      title: "Book Title Two",
      author: "Author Name",
      note: "Rereading this after a few years. Different book than I remember \u2014 either it changed or I did."
    },
    {
      title: "Paper / Essay Title",
      author: "Author",
      note: "Recommended by a collaborator. The framing is unusual; I keep thinking about the fourth section."
    }
  ].map(({ title, author, note }) => renderTemplate`<li class="border-l border-gold-pale pl-4 space-y-1"> <p class="font-display text-sm text-ink"> ${title} <span class="text-ink-muted font-body font-normal"> — ${author}</span> </p> <p class="text-sm italic font-body">${note}</p> </li>`)} </ul> </section> ${renderComponent($$result2, "SectionDivider", $$SectionDivider, { "glyph": "\u2055" })} <!-- Thinking About --> <section class="scroll-reveal"> <p class="section-label text-xs mb-2">Open Questions</p> <h2 class="font-display text-2xl text-ink mb-1">Thinking About</h2> <span class="heading-rule max-w-[7rem]"></span> <div class="text-ink-muted leading-relaxed space-y-4 font-body mt-2"> <p>
How to build systems that remain legible as they scale — and whether legibility
          is even the right frame, or whether we need a different concept entirely.
</p> <p>
The gap between what's measurable and what matters. Metrics are maps; maps are not the territory.
          Most institutions mistake the map for the territory and are surprised when it fails.
</p> <p>
What distinguishes a tool from a medium. A hammer is a tool; language is a medium.
          Most software sits somewhere uncomfortable between the two, and I think that discomfort
          is actually important.
</p> </div> </section> <!-- Closing ornament --> <div class="text-center py-4 scroll-reveal"> <span class="ornament text-2xl" aria-hidden="true">✦</span> <p class="text-ink-muted text-xs font-display tracking-widest mt-4">
Last Updated: ${lastUpdated} </p> </div> </div> ` })}`;
}, "C:/Users/maana/Desktop/person_web/src/pages/now.astro", void 0);

const $$file = "C:/Users/maana/Desktop/person_web/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Now,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
