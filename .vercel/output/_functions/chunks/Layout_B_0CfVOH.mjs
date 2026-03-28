import { e as createComponent, m as maybeRenderHead, r as renderTemplate, h as createAstro, g as addAttribute, s as spreadAttributes, n as renderHead, k as renderComponent, o as renderSlot, l as renderScript } from './astro/server_rqQWen4l.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$InteriorNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InteriorNav;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="interior-nav fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 md:px-10"> <!-- Back link --> <a href="/" class="font-display text-xs uppercase tracking-widest text-ink-muted hover:text-gold transition-colors duration-200 flex items-center gap-2 shrink-0"> <span aria-hidden="true" class="text-gold-pale">←</span> <span class="hidden sm:inline">Back to the Map</span> <span class="sm:hidden">Map</span> </a> <!-- Page title, centered absolutely so it doesn't depend on siblings --> ${pageTitle && renderTemplate`<h1 class="font-decorative text-xs uppercase tracking-[0.2em] text-gold
             absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"> ${pageTitle} </h1>`} </header>`;
}, "C:/Users/maana/Desktop/person_web/src/components/InteriorNav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "https://github.com/yourusername", label: "GitHub", external: true },
    { href: "https://linkedin.com/in/yourprofile", label: "LinkedIn", external: true },
    { href: "mailto:you@example.com", label: "Email", external: false },
    { href: "/resume.pdf", label: "R\xE9sum\xE9", external: true }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden border-t border-gold-pale/40 bg-parchment-aged/60"> <!-- Subtle texture --> <div class="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style="background-image: url('/textures/parchment_texture2.jpg'); background-size: 400px 400px;" aria-hidden="true"></div> <div class="relative z-10 max-w-wide mx-auto px-6 md:px-12 py-10 flex flex-col items-center gap-5 text-center"> <!-- Stamp accent --> <img src="/accents/postalstamps.avif" alt="" aria-hidden="true" class="w-16 opacity-30 mix-blend-multiply" style="filter: sepia(0.4);" loading="lazy"> <!-- Name + tagline --> <div> <p class="font-display text-sm uppercase tracking-[0.2em] text-ink">Your Name</p> <p class="font-body italic text-xs text-ink-muted mt-1">Mapping the intellectual frontier</p> </div> <!-- Links --> <nav aria-label="Connect links" class="flex flex-wrap justify-center gap-6"> ${links.map(({ href, label, external }) => renderTemplate`<a${addAttribute(href, "href")} class="nav-link text-xs"${spreadAttributes(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}> ${label} </a>`)} </nav> <!-- Ornament + copyright --> <span class="ornament text-sm" aria-hidden="true">⁕ &nbsp; ⁕ &nbsp; ⁕</span> <p class="text-ink-muted text-xs tracking-wider font-display">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} The Cartographer's Study
</p> </div> </footer>`;
}, "C:/Users/maana/Desktop/person_web/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "The Cartographer's Study",
    description = "Personal site of a cartographer mapping the intellectual frontier \u2014 projects, writing, and dispatches from the edge of the known.",
    variant = "interior",
    pageTitle
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site ?? "https://example.com");
  const isMap = variant === "map";
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><title>${title}</title>${renderHead()}</head> <body${addAttribute(isMap ? "h-screen overflow-hidden" : "min-h-screen flex flex-col", "class")}> ${!isMap && renderTemplate`${renderComponent($$result, "InteriorNav", $$InteriorNav, { "pageTitle": pageTitle ?? "" })}`} <main${addAttribute(isMap ? "" : "flex-1 pt-14", "class")}> ${renderSlot($$result, $$slots["default"])} </main> ${!isMap && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`} <!-- Scroll-reveal observer (no-op on pages without .scroll-reveal elements) --> ${renderScript($$result, "C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
