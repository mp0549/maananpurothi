# The Archives — Magical Map Homepage (Design Spec)

Marauder's-Map-*inspired* interactive homepage. Not a replica: fully personalized copy,
original line-art world. Feeling: magical, hand-drawn, old parchment, subtle whimsy,
polished enough for a professional portfolio.

## Aesthetic direction (IMPORTANT — this is a shift)

The old MapView aesthetic (sepia photo-collage, JPG map layers, PNG creatures) is
**retired**. The new map is **monochrome ink line-art on parchment**:

- All drawing is **stroked SVG paths** in ink color (`--color-ink` #1C1208, sometimes
  at reduced opacity for lighter strokes). No image-based art inside the map SVG.
- Parchment background comes from existing CSS vars + textures behind the SVG
  (`--color-parchment` #F5ECD7, texture overlays are fine as HTML layers).
- Lines should feel hand-drawn: slight wobble/irregularity in paths, varying stroke
  widths (1–2.5), imperfect corners. Never geometric-perfect.
- Accents: `--color-gold` #8B6914 used *very* sparingly (compass tip, hover states).
- Fonts: Cinzel (labels/small-caps), IM Fell English (annotations, italic flavor text),
  Cinzel Decorative (the big title). Already loaded via global.css.

## Copy (personalized — no verbatim WB text except "Mischief Managed.")

- Intro sequence lines (quill-written, Phase 2):
  1. `Maanan Purothi`
  2. `Purveyor of Aids to the Insatiably Curious`
  3. `is proud to present`
  4. `THE ARCHIVES`
- Gate CTA (button): `I solemnly swear that I am up to something good.`
- Gate secondary link: `prefer the quiet route? — the plain archives`
- Close ribbon (bottom of map, small): `Mischief Managed.`

## Locations (7) — data in `src/data/map.json`

Old site naming ("Biographical Notes", "The Codex", "The Garden", "Credentials") is
**retired on the homepage** in favor of these place names. Interior pages keep their
routes; renaming their headings can come later.

| id      | Name            | Destination            | Desc (hover, IM Fell italic voice)                                  |
|---------|-----------------|------------------------|---------------------------------------------------------------------|
| about   | The Common Room | `/about/`              | Where the resident may be found. Background, character, ambitions.  |
| codex   | The Library     | `/codex/`              | Records of past expeditions — projects, research, and employment.   |
| garden  | The Greenhouses | `/garden/`             | Where ideas are grown. Notes and half-finished thoughts, tended daily. |
| now     | The Workshop    | `/now/`                | Current experiments. Mind the sparks.                               |
| owlery  | The Owlery      | LinkedIn (external)    | Send an owl — or connect on LinkedIn, which is marginally faster.   |
| lab     | The Folly       | mp0549.github.io/lab/ (external) | Odd little inventions, built for the joy of it. Hexagonal tower on the E edge (art at 1478,655), off the Workshop's road. |
| portfolio | The Portfolio | mp0549.github.io/my-portfolio/ (external) | Beyond these grounds — a curated record of finished work. Signpost off the Library's east front (art at 1420,296), road runs off the map's edge. |

## Homepage state machine (index.astro) — SIMPLE-FIRST (pivot 2026-07-19)

**Shipping pivot**: the site now ALWAYS opens on the simple view — a conventional,
professional hero landing. The map is an opt-in experience behind the swear phrase.
The gate landing page is **retired** (MapGate.astro stays on disk, unrendered, like
the other retired views). `localStorage['archives-mode']` is no longer consulted on
load; `archives-visited` still picks the full vs. short ceremony.

States: `simple` (default, every load) → `intro` (ceremony) → `map` ⇄ back to `simple`

- **simple**: PlainArchives, upgraded to a hero landing (see "Simple-view hero" below).
  Contains the map invitation (swear CTA). Body scroll unlocked from first paint.
- **intro**: the ceremony, now GATELESS — triggered from the simple view. The overlay's
  dark backdrop fades in OVER the simple page first; only once covered does the state
  flip to `intro` (avoids a flash of the undrawn map). Overlay visibility is driven by
  a JS-toggled class on #ceremony (`cer-active`), not by state selectors.
- **map**: unchanged. "Mischief Managed." ribbon → fade → `simple`.
- The swear CTA runs the ceremony every time (short variant on repeat). Reduced
  motion: no ceremony — straight to the drawn map.

## Simple-view hero (PlainArchives.astro)

- Header becomes a real hero: eyebrow `THE ARCHIVES` · name `Maanan Purothi` ·
  gold rule · roles line `Engineer · Researcher · Data Scientist` (Cinzel small,
  letterspaced) · short bio paragraph (Crimson Text, centered, max-width ~34rem):
  > I build things and take them apart to see how they work. I'm studying Computer
  > Science and Statistics, and my work runs from full-stack ML pipelines to
  > AI-safety research — the quick joy of shipping something usable, and the slower
  > craft of understanding systems too complex to understand fully. Most days I'm
  > somewhere in between.
- **Map invitation** (replaces the old fixed bottom-right swear button, keeps id
  `simple-swear-btn`): a pinned parchment note — slight rotate(-1deg), soft shadow,
  a small red wax dot (#8b1a1a) accent, IM Fell italic:
  `I solemnly swear that I am up to something good.` with a Cinzel small-caps
  sub-line `— unfold the map —`. Placed inline between the hero and the destination
  list; on wide viewports (≥1280px) it repositions (CSS only, same element) to a
  fixed note on the right side, vertically centered, ~230px wide, rotate(2deg).
  Hover: straightens, lifts. It should be *noticeable* — it's the doorway.
- Destination list + connect footer unchanged. Old tagline/eyebrow copy
  ("the quiet route") retired — this IS the front page now.

`prefers-reduced-motion`: all transitions become fast crossfades; no cursor footprints.

Old views (MapView, ParchmentView, the 3-way toggle) are retired: **leave the component
files on disk untouched**, they just aren't rendered by the new index.astro.

## MarauderMap.astro contract

- Location: `src/components/marauder/MarauderMap.astro`. No required props (reads
  `src/data/map.json` itself for hrefs/descs; art positions are hand-authored).
- One `<svg>` with `viewBox="0 0 1600 1000"`, styles scoped in the component.
- Layer groups (ids matter — Phase 2 animation hooks): `#layer-paths` (walkways/roads,
  dashed connector trails), `#layer-buildings`, `#layer-labels`, `#layer-flourishes`
  (compass rose, corner ornaments, title ribbon, decorative footprint trails,
  flavor annotations like "here dwell unfinished ideas"), `#layer-footprints`
  (EMPTY group — runtime container for Phase 3 walking footprints).
- **Every drawn path gets `pathLength="1"`** so Phase 2 can animate draw-on with
  uniform `stroke-dasharray: 1; stroke-dashoffset: 1`. Group elements with
  `data-draw` attributes (small integers = choreography order buckets).
- Each location: `<a>` (real link, keyboard-focusable, aria-label) wrapping a
  `<g class="loc" data-loc="…">` containing line-art building + ribbon/banner name
  label. Hover/focus: banner lifts slightly, desc line unfurls beneath in IM Fell
  italic, building strokes warm toward gold. Subtle — no bouncing.
- Include a visually-hidden `<nav>` list of the 5 links (screen-reader fallback).
- Layout sketch (1600×1000): Owlery on a hill NW (~350,220) · Library NE (~1150,300) ·
  Common Room W-center (~280,520) · central courtyard/compass (~800,500) ·
  Greenhouses SW (~420,780) · Workshop E (~1250,650). Walkway paths connect all
  locations through the courtyard. Title ribbon top-center: THE ARCHIVES.

## Pan behavior (mobile / narrow viewports)

- Desktop (viewport aspect ≥ map aspect-ish): map fits fully, no pan.
- Narrow viewports: map height fills viewport, width overflows → pointer/touch pan
  (grab + drag, light inertia optional). **Edge indicators**: soft parchment-edge
  gradient + small animated ink chevrons on the side(s) with off-screen content,
  fading out once the user has panned. Users must never wonder whether there's more map.

## Phases

1. **Now**: gate + static map art + state machine with placeholder transitions +
   pan + hover states + navigation via existing ink-bleed transition (Layout.astro).
2. Intro choreography: parchment unfold, quill-written text, ink draw-on reveal.
3. Travel: footprints walking paths on click, camera zoom (viewBox animation) into
   destination, skippable (any key / second click). Cursor-trailing footprints (desktop).
4. Mischief Managed fold-close choreography, easter eggs, polish.

## Phase 2 — "the ceremony" (spec, designed 2026-07-19)

The gate→map transition becomes a choreographed sequence: the oath answers, the letter
unfolds into a full-viewport parchment, a quill writes the intro, the map inks itself.
**Skippable at any moment** (click/tap/Esc/Enter/Space → jump to finished map).
`prefers-reduced-motion` = no ceremony at all: keep the existing 150ms crossfade,
map appears fully drawn.

### Architecture

- **NEW `src/components/marauder/MapCeremony.astro`** — rendered in index.astro as a
  sibling after `<MapGate />`. Contains: `#ceremony` fixed overlay (z-index 60,
  `display:none` default — shown via fully-`:global()` state selectors, same trap as
  #gate), dark backdrop `.cer-dark` (#1c1208, matches gate), unfold rig, intro-text
  block, skip hint, and a hidden SVG carrying the ink-bleed filter def.
  All ceremony CSS + the controller script live here.
- **Event contract** (keeps index.astro owning state):
  index.astro `enterIntro()` → `setState('intro')` + dispatch
  `archives:ceremony` CustomEvent on document with `detail: { firstVisit }`.
  MapCeremony runs the timeline, then dispatches `archives:ceremony-done`;
  index.astro listens and sets state 'map' **without** the `.map-entering` fade
  (map is already visible/drawn under the overlay). Reduced-motion branch in
  index.astro never dispatches — old fast path.
- **MarauderMap.astro gets additive scoped CSS only** for undrawn/drawing states,
  driven by classes on the `.marauder` wrapper (see draw-on below).
- index.astro small fix: `.mischief-ribbon` visible only in `map` state (it's
  position:fixed and would float over the ceremony during `intro`).
- `returnToMap()` (simple→map) must never apply undrawn classes — straight to
  the finished map, unchanged.

### Unfold rig (adapted Olivia Ng technique — see research notes)

Full-viewport wrapper with `perspective: 1400px`. Parchment sheet = 2×2 quadrant
panels; sheet starts folded down to the bottom-left quadrant, centered on screen at
~`min(50vw, 50vh)` footprint (roughly where the gate letter sat — the crossfade under
motion hides the size mismatch; do NOT chase a pixel-perfect morph).

- Step 1: right flap `rotateY(180deg → 0)` (transform-origin left), `skewY(2deg)`
  mid-motion for paper warp.
- Step 2: top flap `rotateX(180deg → 0)` (transform-origin bottom), slight skewX warp.
- Rig scales ~0.55 → 1 across the unfold so the finished sheet fills the viewport.
- Panel faces: blank parchment (existing `--color-parchment` + texture overlay as
  CSS background — HTML-layer textures are allowed). Back faces slightly darker for
  depth; a soft shadow-gradient pseudo-element animates opacity during each fold for
  weight. Easing ~`cubic-bezier(0.33, 0, 0.15, 1)` — paper, not rubber.

### Quill intro (first visit only)

The four copy lines (see Copy section; line 4 "THE ARCHIVES" in Cinzel Decorative,
larger) appear centered on the blank sheet, staggered. Each line reveals via
**ink-bleed**: `filter: blur(8px→0)` + opacity 0→1 over ~450ms, wrapped by the SVG
`feComponentTransfer` discrete-alpha filter (research notes) so edges threshold
organically; plus a subtle letter-spacing settle (0.06em→normal).
**Scoped exception to the no-filters-on-animated-elements rule**: these are small,
short-lived text lines. Implementer must test; if janky, drop the SVG filter and
keep plain blur+fade.

### Draw-on (the map inks itself)

At ceremony start, JS synchronously adds `is-undrawn` to `.marauder`:

- Dash-drawables — every `path`/`line` with `pathLength` **except** those inside
  `.trail`, `.smoke`, `.swing`, `.rug` (they have intentional static dasharrays that
  dash-draw would destroy) — get `stroke-dasharray: 1; stroke-dashoffset: 1`.
- Everything else (circles, ellipses, text, fills, and the exempted dashed elements)
  gets opacity 0 (JS tags them with a class, e.g. `cer-fade`).

One JS pass assigns each element `style.setProperty('--dd', delay)` =
bucketBase (from its `data-draw` ancestor) + index-within-bucket × stagger,
stagger capped so no bucket spans > ~450ms. `.red` elements get an extra late
offset — **the red second pen always draws last** (it's a different pen).
Then `is-drawing` triggers:

```css
.marauder.is-drawing [pathLength] { animation: map-draw var(--ddur, 650ms) ease-out var(--dd, 0ms) forwards; }
@keyframes map-draw { to { stroke-dashoffset: 0; } }
/* .cer-fade elements: opacity fade-in ~400ms at their --dd */
```

Bucket bases (first visit, relative to draw t0): paths 0 · buildings +350ms ·
labels +1000ms · flourishes +1350ms · red extras +1900ms. End state = **all ceremony
classes removed** (default SVG is fully visible; nothing lingers).

### Timeline — first visit, GATELESS (t=0 at swear click on the simple view; skippable)

| t (ms) | Beat |
|--------|------|
| 0 | Overlay activates (`cer-active`); dark backdrop fades in over the simple page (~500ms). prepareDraw runs NOW (map still display:none — only computed opacity is read, which is safe) |
| 500 | Screen fully dark → `setState('intro')` (simple hides, undrawn map ready beneath); folded rig fades in at center |
| 900–1550 | Unfold step 1 (right flap) |
| 1450–2100 | Unfold step 2 (top flap); rig scale → 1; dark backdrop fades out 1750–2350 |
| 1200 | Skip hint appears: `— tap anywhere to skip —` (IM Fell italic, 0.6rem, opacity ~0.45, bottom-center) |
| 2350 / 2850 / 3350 / 3900 | Quill lines 1–4 bleed in (line 4 slower, 550ms) |
| 4950–5450 | Text soaks away (blur 0→4px + fade) |
| 5250–5750 | Rig parchment fades out — undrawn map beneath has the same parchment bg, so the reveal is seamless |
| 5350 | Draw t0 — buckets as above; finish computed (maxDelay + ddur + 200ms) |
| done | `archives:ceremony-done` → state 'map' + lockScroll (footprints/ribbon/edge-hints live) |

All gate beats (seal pop, letter shiver/scale-out, gate-UI fade) are REMOVED along
with the gate itself. The v1 gate-era bug — the opaque dark gate stayed displayed
under the overlay through all of `intro`, hiding the entire draw-on and causing a
"fades to dark, then the map pops" seam — is structurally impossible now: the only
thing under the overlay during `intro` is the map.

### Timeline — repeat visit, GATELESS (≈ 3s)

Dark-in over the simple page 0–400 · setState('intro') + rig in at 400 · fold-1 at
550, fold-2 at 800 (staggered even when compressed — simultaneous folds read as a
blob; compressed --fold-dur 450ms) · **dark-out at 900** · no quill text · rig
parchment fade at 1450 · draw t0 = 1500 with buckets 0/150/450/600 (+red 800),
element duration 450ms · done dynamically (below).
`localStorage['archives-visited']` (set on first swear) picks the variant.

### Sequencing invariants (learned from v1 review)

- **The dark backdrop must never outlive the rig.** Dark-out completes before (or
  with) rig-out starting, so the parchment always crossfades into the map's own
  parchment — never into darkness (v1 repeat had a dark flash between unfold and map).
- **The draw must happen on stage.** Draw t0 waits until the dark layer has cleared;
  the rig may still be mid-fade (parchment-over-parchment is seamless) but the map
  may not ink itself behind an opaque cover.
- **Finish is computed, not hardcoded**: prepareDraw tracks the max per-element
  delay; done fires at drawT0 + maxDelay + ddur + ~200ms buffer. v1's fixed 7900/2100
  truncated the red pen mid-draw and snapped it to final state.

### Skip & robustness

Controller keeps every timeout id in an array; `finishCeremony()` is idempotent:
clear all timeouts, remove all ceremony/undrawn classes, hide overlay, dispatch
done. Wired to click/tap on the overlay + keydown (Esc/Enter/Space) during the
ceremony only. Interrupting mid-fold must never strand a half-visible overlay or
a half-drawn map.

## Research notes (scouted 2026-07 — techniques for Phases 2–4)

- **No GSAP.** All plugins are free now (post-Webflow, GSAP 3.13+), but vanilla is
  sufficient everywhere we checked: cursor footprints = event-driven spawning;
  walking-the-paths = `getPointAtLength` sampling; ink reveal = stroke-dashoffset
  (every map path already carries pathLength="1"). Revisit only if choreography
  outgrows CSS/WAAPI.
- **Unfold choreography** (from Olivia Ng's folding-map pen, see codepen_folding.txt):
  pure CSS 3D — horizontal flaps `rotateX(180deg)` (transform-origin top/bottom),
  vertical panels `rotateY(180deg)` + `skewY(±2deg)` for paper warp, staggered
  0.5–0.8s transitions, class-toggle trigger, symmetric reverse for the close.
  Built for a small card: adapt with viewport-relative panel sizes + deeper
  `perspective` (≥1200px). Footprint shape trick from the same pen:
  `border-radius: 80% 80% 70% 70%/130% 130% 25% 25%` makes a foot in pure CSS.
- **Ink bleed** (Andy Jakubowski): NOT feTurbulence — just CSS `blur(~12px)` +
  SVG `feComponentTransfer` with `<feFuncA type="discrete" tableValues="0 1 1 1"/>`
  to threshold the alpha. Cheap, organic edges. Use on the quill-written intro text;
  test perf before applying to large areas.
- **Cursor footprints** (implemented): distance-threshold spawn (55px, 40ms throttle),
  `atan2(dy,dx)+90°` rotation, spawn at previous point (trail lags cursor), alternate
  L/R with ±5px perpendicular stagger, opacity 0→0.5→0 keyframe (~1.5s total), cap 16
  live, map-state + hover-capable + no-reduced-motion gates. Red ink rgba(139,26,26).
  License note: Rorothejedi POC is unlicensed, crypticsy is GPL-3 — our implementation
  is original; techniques only, no copied code.

## Hard rules

- Don't modify: global.css, tailwind config, Layout.astro, SimpleView/MapView/
  ParchmentView and their children, interior pages.
- Component-scoped styles only.
- No new dependencies. Vanilla JS + CSS (+ WAAPI fine). No React on the homepage.
- Performant: no filters on animated elements, no layout thrash, rAF for pointer work.
