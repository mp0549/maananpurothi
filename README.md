# [The Archives  — Personal Website](https://maananpurothi.vercel.app/)

A personal site built with Astro, Tailwind CSS, and Framer Motion.
Aesthetic: illuminated manuscripts, aged parchment, old-world explorer vibes — executed as a modern, polished web experience.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro](https://astro.build) | Site framework (SSR, pages, components) |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling + design tokens |
| [Framer Motion](https://www.framer.com/motion/) | Scroll animations (via React island) |
| [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) | React island support |
| [@astrojs/vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) | Vercel deployment adapter |

## Project Structure

```
person_web/
├── public/
│   ├── textures/          # Paper texture images (parchment, ricepaper, etc.)
│   ├── maps/              # Vintage map images for hero/section backgrounds
│   ├── accents/           # Decorative stamps and ornaments
│   └── favicon.svg        # Replace with your own
├── src/
│   ├── layouts/
│   │   └── Layout.astro   # Shared wrapper: <head>, Nav, Footer
│   ├── components/
│   │   ├── Nav.astro              # Fixed nav, mobile hamburger overlay
│   │   ├── Footer.astro           # Connect section + footer links
│   │   ├── SectionDivider.astro   # Ornamental ruled dividers
│   │   ├── ProjectCard.astro      # Parchment-slip project cards
│   │   ├── NotePreview.astro      # Garden note preview cards
│   │   └── ScrollReveal.tsx       # Framer Motion scroll animation components
│   ├── pages/
│   │   ├── index.astro    # Homepage (Hero → Now → Interests → Work → Community → Garden)
│   │   ├── codex.astro    # Projects & experience archive
│   │   ├── garden.astro   # Notes & writing space
│   │   └── now.astro      # Extended "what I'm up to" page
│   └── styles/
│       └── global.css     # Tailwind directives + global CSS classes
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Asset Placement Guide

Place your assets in the following folders so the site references them correctly:

### `/public/textures/`
Paper and surface texture images. Used as `background-image` overlays with `mix-blend-mode: multiply` and low opacity.

| File | Used In |
|------|---------|
| `parchment_texture1.jpg` | Hero section overlay, `.texture-overlay` CSS class |
| `parchment_texture2.jpg` | Footer background |
| `ricepaper2.webp` | Interests section overlay |
| `so-white.png` | Available for additional sections |
| `textured_paper.png` | Garden page header |

### `/public/maps/`
Vintage map images. Applied as low-opacity, sepia-filtered decorative backgrounds.

| File | Used In |
|------|---------|
| `old_cool_map.jpg` | Hero background layer |
| `fantasymap.jpg` | Codex page header |
| `vintagemapelements.jpg` | Now page header |
| `fantasymap2.jpg`, `vintagemapelements2.jpg`, `vintagemapelements4.jpg` | Available for sections |

### `/public/accents/`
Decorative stamp and ornament images. Used very sparingly.

| File | Used In |
|------|---------|
| `postalstamps.avif` | Footer accent image |
| `vintageornamentaldividevector.jpg` | Available for section dividers |

## Customization

### Personal Info
Search for `<!-- Replace -->` comments and `placeholder` strings. Key spots:
- `src/components/Nav.astro` — your name in the logo
- `src/components/Footer.astro` — your GitHub, LinkedIn, email, resume links
- `src/pages/index.astro` — your name in the hero `<h1>`
- All page placeholder content (projects, notes, community work)

### Colors & Typography
Edit `tailwind.config.mjs` — all design tokens are in `theme.extend`.
Font imports are at the top of `src/styles/global.css`.

### Switching to Static Export
If you don't need SSR, change `astro.config.mjs`:
```js
// Remove adapter and change output:
output: 'static',
// Delete the adapter line
```
Then `npm run build` produces a static `dist/` folder.

## Deployment (Vercel)

1. Push to a GitHub/GitLab repo
2. Import the repo in Vercel
3. Vercel auto-detects Astro — no config needed
4. Set `output: 'server'` (default) for SSR, or `'static'` for a CDN-only deploy

## Development Notes

- **Scroll reveal** uses two systems: a lightweight vanilla IntersectionObserver in `Layout.astro` (for `.scroll-reveal` elements) and Framer Motion via `ScrollReveal.tsx` (for richer animations). Use whichever feels appropriate per section.
- **Framer Motion components** use `client:visible` so they hydrate lazily when scrolled into view.
- **Mobile nav** is pure vanilla JS — no framework overhead.
- All placeholder text is written in the "map annotation" voice; replace with your real content.


## Updating the website:
- ### default message
-- .\scripts\task.ps1 ship

- # custom message
-- .\scripts\task.ps1 ship "Redesigned simple view"
- # or named
-- .\scripts\task.ps1 ship -Message "Redesigned simple view"
