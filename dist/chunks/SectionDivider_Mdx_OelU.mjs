import { e as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CJ-luqlO.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://mp0549.github.io");
const $$SectionDivider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionDivider;
  const { glyph = "\u2767", class: extraClass = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["flex items-center gap-4 my-12 px-6 md:px-12", extraClass], "class:list")} aria-hidden="true"> <!-- Left rule --> <div class="flex-1 h-px" style="background: linear-gradient(to right, transparent, var(--color-gold-pale) 80%, var(--color-gold));"></div> <!-- Glyph --> <span class="font-decorative text-gold text-lg flex-shrink-0">${glyph}</span> <!-- Right rule --> <div class="flex-1 h-px" style="background: linear-gradient(to left, transparent, var(--color-gold-pale) 80%, var(--color-gold));"></div> </div>`;
}, "C:/Users/maana/Desktop/person_web/src/components/SectionDivider.astro", void 0);

export { $$SectionDivider as $ };
