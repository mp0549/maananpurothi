import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, s as spreadAttributes, b as renderScript, r as renderComponent, f as renderSlot, g as renderHead } from './astro/server_CJ-luqlO.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://mp0549.github.io");
const $$InteriorNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InteriorNav;
  const { pageTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="interior-nav fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-6 md:px-10"> <!-- Back link --> <a${addAttribute("/maananpurothi/", "href")} class="font-display text-xs uppercase tracking-widest text-ink-muted hover:text-gold transition-colors duration-200 flex items-center gap-2 shrink-0"> <span aria-hidden="true" class="text-gold-pale">←</span> <span class="hidden sm:inline">Back to the Map</span> <span class="sm:hidden">Map</span> </a> <!-- Page title, centered absolutely so it doesn't depend on siblings --> ${pageTitle && renderTemplate`<h1 class="font-decorative text-xs uppercase tracking-[0.2em] text-gold
             absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap"> ${pageTitle} </h1>`} </header>`;
}, "C:/Users/maana/Desktop/person_web/src/components/InteriorNav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "https://github.com/mp0549", label: "GitHub", external: true },
    { href: "https://linkedin.com/in/maananpurothi", label: "LinkedIn", external: true },
    { href: "mailto:contactmaanan@gmail.com", label: "Email", external: false },
    { href: "/resume.pdf", label: "R\xE9sum\xE9", external: true },
    {
      /*{href: 'https://mp0549.github.io/my-portfolio', label: 'Portfolio', external: true}*/
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative overflow-hidden border-t border-gold-pale/40 bg-parchment-aged/60"> <!-- Subtle texture --> <div class="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none" style="background-image: url('/textures/parchment_texture2.jpg'); background-size: 400px 400px;" aria-hidden="true"></div> <div class="relative z-10 max-w-wide mx-auto px-6 md:px-12 py-10 flex flex-col items-center gap-5 text-center"> <!-- Stamp accent --> <img src="/accents/postalstamps.avif" alt="" aria-hidden="true" class="w-16 opacity-30 mix-blend-multiply" style="filter: sepia(0.4);" loading="lazy"> <!-- Name + tagline --> <div> <p class="font-display text-sm uppercase tracking-[0.2em] text-ink">Your Name</p> <p class="font-body italic text-xs text-ink-muted mt-1">Mapping the intellectual frontier</p> </div> <!-- Links --> <nav aria-label="Connect links" class="flex flex-wrap justify-center gap-6"> ${links.map(({ href, label, external }) => renderTemplate`<a${addAttribute(href, "href")} class="nav-link text-xs"${spreadAttributes(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}> ${label} </a>`)} </nav> <!-- Ornament + copyright --> <span class="ornament text-sm" aria-hidden="true">⁕ &nbsp; ⁕ &nbsp; ⁕</span> <p class="text-ink-muted text-xs tracking-wider font-display">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} The Cartographer's Study
</p> </div> </footer>`;
}, "C:/Users/maana/Desktop/person_web/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mp0549.github.io");
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
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><link rel="canonical"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><title>', "</title><!-- Ink-entry: applied before first paint so new page starts already covered --><script>\n      try {\n        if (sessionStorage.getItem('ink-pending') === '1') {\n          document.documentElement.classList.add('ink-entry');\n        }\n      } catch (_) {}\n    <\/script>", "</head> <body", "", "> ", " <main", "> ", " </main> ", " <!-- Scroll-reveal observer (no-op on pages without .scroll-reveal elements) --> ", ` <!-- \u2500\u2500 Ink bleed transition overlay \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <div id="ink-overlay" aria-hidden="true"> <div id="ink-blob"></div> </div> <!-- Ink transition logic --> <script>
    (function () {
      var overlay = document.getElementById('ink-overlay');
      var blob    = document.getElementById('ink-blob');
      if (!overlay || !blob) return;

      /* \u2500\u2500 On new-page entry: start covered, then recede \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      if (document.documentElement.classList.contains('ink-entry')) {
        try { sessionStorage.removeItem('ink-pending'); } catch (_) {}
        overlay.classList.add('ink-covered');
        document.documentElement.classList.remove('ink-entry');

        // Two rAF frames ensure the covered state is painted before we
        // start the recede animation.
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            overlay.classList.remove('ink-covered');
            overlay.classList.add('ink-receding');
            setTimeout(function () {
              overlay.classList.remove('ink-receding');
            }, 340);
          });
        });
      }

      /* \u2500\u2500 Spread: cover the screen, then navigate \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      function spread(originX, originY, href) {
        blob.style.left = originX + 'px';
        blob.style.top  = originY + 'px';
        overlay.classList.add('ink-spreading');

        setTimeout(function () {
          try { sessionStorage.setItem('ink-pending', '1'); } catch (_) {}
          window.location.href = href;
        }, 295);
      }

      /* \u2500\u2500 Click interception \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      document.addEventListener('click', function (e) {
        if (!(e.target instanceof Element)) return;
        var link = e.target.closest('a[href]');
        if (!link) return;

        var href = link.getAttribute('href');
        if (!href) return;
        if (/^(#|https?:|\\/\\/|mailto:|tel:)/.test(href)) return;
        if (link.target === '_blank') return;

        var variant   = document.body.dataset.variant;
        var goesToMap = (href === '/');

        // Only intercept: map \u2192 interior  OR  interior \u2192 map
        if (!(variant === 'map' && !goesToMap) && !(variant === 'interior' && goesToMap)) return;

        e.preventDefault();

        var x = (typeof e.clientX === 'number') ? e.clientX : window.innerWidth  / 2;
        var y = (typeof e.clientY === 'number') ? e.clientY : window.innerHeight / 2;

        spread(x, y, href);
      });
    })();
    <\/script> </body> </html>`], ['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><link rel="canonical"', '><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><title>', "</title><!-- Ink-entry: applied before first paint so new page starts already covered --><script>\n      try {\n        if (sessionStorage.getItem('ink-pending') === '1') {\n          document.documentElement.classList.add('ink-entry');\n        }\n      } catch (_) {}\n    <\/script>", "</head> <body", "", "> ", " <main", "> ", " </main> ", " <!-- Scroll-reveal observer (no-op on pages without .scroll-reveal elements) --> ", ` <!-- \u2500\u2500 Ink bleed transition overlay \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 --> <div id="ink-overlay" aria-hidden="true"> <div id="ink-blob"></div> </div> <!-- Ink transition logic --> <script>
    (function () {
      var overlay = document.getElementById('ink-overlay');
      var blob    = document.getElementById('ink-blob');
      if (!overlay || !blob) return;

      /* \u2500\u2500 On new-page entry: start covered, then recede \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      if (document.documentElement.classList.contains('ink-entry')) {
        try { sessionStorage.removeItem('ink-pending'); } catch (_) {}
        overlay.classList.add('ink-covered');
        document.documentElement.classList.remove('ink-entry');

        // Two rAF frames ensure the covered state is painted before we
        // start the recede animation.
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            overlay.classList.remove('ink-covered');
            overlay.classList.add('ink-receding');
            setTimeout(function () {
              overlay.classList.remove('ink-receding');
            }, 340);
          });
        });
      }

      /* \u2500\u2500 Spread: cover the screen, then navigate \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      function spread(originX, originY, href) {
        blob.style.left = originX + 'px';
        blob.style.top  = originY + 'px';
        overlay.classList.add('ink-spreading');

        setTimeout(function () {
          try { sessionStorage.setItem('ink-pending', '1'); } catch (_) {}
          window.location.href = href;
        }, 295);
      }

      /* \u2500\u2500 Click interception \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
      document.addEventListener('click', function (e) {
        if (!(e.target instanceof Element)) return;
        var link = e.target.closest('a[href]');
        if (!link) return;

        var href = link.getAttribute('href');
        if (!href) return;
        if (/^(#|https?:|\\\\/\\\\/|mailto:|tel:)/.test(href)) return;
        if (link.target === '_blank') return;

        var variant   = document.body.dataset.variant;
        var goesToMap = (href === '/');

        // Only intercept: map \u2192 interior  OR  interior \u2192 map
        if (!(variant === 'map' && !goesToMap) && !(variant === 'interior' && goesToMap)) return;

        e.preventDefault();

        var x = (typeof e.clientX === 'number') ? e.clientX : window.innerWidth  / 2;
        var y = (typeof e.clientY === 'number') ? e.clientY : window.innerHeight / 2;

        spread(x, y, href);
      });
    })();
    <\/script> </body> </html>`])), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), title, renderHead(), addAttribute(isMap ? "h-screen overflow-hidden" : "min-h-screen flex flex-col", "class"), addAttribute(variant, "data-variant"), !isMap && renderTemplate`${renderComponent($$result, "InteriorNav", $$InteriorNav, { "pageTitle": pageTitle ?? "" })}`, addAttribute(isMap ? "" : "flex-1 pt-14", "class"), renderSlot($$result, $$slots["default"]), !isMap && renderTemplate`${renderComponent($$result, "Footer", $$Footer, {})}`, renderScript($$result, "C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/maana/Desktop/person_web/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
