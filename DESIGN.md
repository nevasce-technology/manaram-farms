---
name: Manaram Farms
description: Cold-chain editorial atelier for a precision Himalayan dairy house — specimens on steel, story on canvas.
colors:
  canvas: "#faf8f5"
  ink: "#0a1628"
  ink-soft: "#3d4f63"
  steel: "#0071bc"
  steel-deep: "#005a96"
  steel-soft: "#3d94cc"
  mist: "#e8eef4"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 7vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.14em"
rounded:
  pill: "9999px"
  panel: "1.25rem"
  chip: "0.5rem"
  dropdown: "1rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section-y: "5rem"
  section-y-md: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.steel}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.steel-deep}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-secondary:
    backgroundColor: "rgb(255 255 255 / 0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-ghost-steel:
    backgroundColor: "rgb(255 255 255 / 0.1)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-ghost-steel-hover:
    backgroundColor: "rgb(255 255 255 / 0.18)"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
---

# Design System: Manaram Farms

## Overview

**Creative North Star: "The Cold-Chain Editorial Atelier"**

Manaram Farms reads as a precision Himalayan dairy house, not a pastoral scroll. The landing page treats products as specimens under cold-chain scrutiny — catalogued on steel-blue lab surfaces with mono IDs, displayed as saturated PNG cutouts that float above a milk-white canvas. Editorial serif headlines carry the brand voice; Figtree body copy stays readable and direct. Depth comes from tonal layering (canvas → white sections → steel gradient panels), hairline measurement grids, film grain, and cutout drop-shadows — not decorative shadow boxes.

The world refuses generic farm clichés: no barn-wood textures, no scroll-jacking theatre, no multi-accent rainbow. One steel signal color marks every interactive moment. Photography splits into two roles — atmospheric background washes and hero cutout objects — never boxed product thumbnails on light sections.

**Key Characteristics:**
- Milk-white canvas (`#faf8f5`) with deep midnight ink (`#0a1628`) type hierarchy
- Steel blue (`#0071bc`) as the sole chromatic accent for CTAs, links, nav active state, and lab panels
- Instrument Serif display + Figtree Variable body; mono uppercase labels for specimen metadata
- 48px hairline grid overlays on hero and steel surfaces
- Global film grain at ~4.5% opacity (6% on steel panels)
- Rounded-full pill buttons and navigation; 1.25rem panel radius for cards and framed photography
- Product PNG cutouts with layered drop-shadows and subtle float animation

## Colors

The palette is intentionally narrow: warm paper neutrals, deep ink text, and one steel-blue signal channel borrowed from cold-chain packaging and lab equipment.

### Primary
- **Cold-Chain Steel** (`#0071bc`): Primary CTAs, text links, country labels, nav active pill, and the featured-products section background gradient. This is the only hue that reads as "brand color."
- **Steel Deep** (`#005a96`): Hover and pressed states on steel surfaces; bottom stop of the steel panel gradient.

### Secondary
- **Steel Soft** (`#3d94cc`): Defined in tokens; available for lighter steel accents though the landing page primarily uses full steel on interactive elements.

### Neutral
- **Milk Canvas** (`#faf8f5`): Page background, metadata chip fills, and the default resting surface between sections.
- **Midnight Ink** (`#0a1628`): Primary headings, button text on light surfaces, footer inverted logo treatment reference.
- **Ink Soft** (`#3d4f63`): Body copy, definition-list labels, and secondary descriptive text.
- **Cool Mist** (`#e8eef4`): Token reserved for cool neutral fills; not heavily used on the landing page.
- **White** (`#ffffff`): Section breaks (WelcomeFarm), shop destination cards, nav dropdown surfaces, and all type on steel panels.

### Named Rules
**The Steel Signal Rule.** Steel blue appears only where the user can act or where products are catalogued under scrutiny. It never decorates passive copy blocks on canvas sections. If a surface is not interactive and not a lab panel, it stays ink or ink-soft on canvas/white.

**The Two-Surface Rule.** Light sections alternate canvas and white (`bg-canvas` / `bg-white`); the specimen catalog and footer use the steel gradient panel. Do not introduce a third background family without reason.

## Typography

**Display Font:** Instrument Serif (with ui-serif, Georgia fallback)
**Body Font:** Figtree Variable (with Figtree, system-ui fallback)
**Label Font:** System monospace stack (ui-monospace, SFMono-Regular, Menlo)

**Character:** Instrument Serif delivers editorial weight in large sizes — tight leading, negative tracking, one accent line in steel. Figtree keeps paragraphs approachable at ~1.05rem. Mono labels at 11px uppercase with wide tracking (`0.14–0.16em`) mark specimen IDs and facility metadata.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 7vw, 5.25rem)`, line-height 0.95): Hero h1 only. One line may switch to `text-steel` for emphasis ("bottled.").
- **Headline** (400, `clamp(2rem, 4.5vw, 3.25rem)`, line-height 1.05): Section h2s ("Welcome to Manaram Farm", "What we make", "Where to buy").
- **Title** (600, 1.125–1.25rem): Product names in specimen grid, shop partner names in display serif at 1.875–2.25rem.
- **Body** (400, 1.05rem, leading relaxed): Paragraphs capped around `max-w-lg` / `max-w-xl` (~65ch). Hero subcopy scales to `text-lg` at md+.
- **Label** (500, 11px mono, uppercase, tracking 0.12–0.16em): Specimen IDs (`MK-01`), facility metadata (`Facility`, `Since`), footer column headers (`Explore`, `Contact`).

### Named Rules
**The One Display Voice Rule.** Instrument Serif is reserved for h1–h2 and card-level partner names. Body, buttons, nav, and footer links use Figtree. Never set long paragraphs in the display face.

**The Specimen Label Rule.** Mono uppercase labels appear only on lab-adjacent metadata — product IDs, facility facts, footer section headers. They are not used as decorative section kickers above headlines on canvas sections.

## Layout

The page uses a single centered column capped at **1400px** with responsive horizontal padding: `px-5` (20px) → `md:px-10` (40px) → `xl:px-14` (56px).

**Section rhythm:** Vertical padding is `py-20` (80px) on mobile, `md:py-28` (112px) on desktop — consistent across Hero (with top offset for fixed nav), WelcomeFarm, FeaturedProducts, ShopDestinations, and Footer.

**Hero:** Full viewport height (`min-h-[100dvh]`), top padding `pt-28`/`md:pt-32` to clear fixed nav. Two-column grid at lg: `lg:grid-cols-[1.05fr_0.95fr]` — copy left, floating product cluster right.

**WelcomeFarm:** Two-column at lg with image first (`lg:order-1`), copy second (`lg:order-2`). Metadata chips sit in a 2-column grid below the framed farm photo.

**FeaturedProducts:** 12-column CSS grid with asymmetric spans — hero product spans 7 cols × 2 rows on md+, companions at 5/4/4 cols. Gap `gap-3 md:gap-4`.

**ShopDestinations:** 2-column grid at md, equal-width partner cards with `md:min-h-[16rem]`.

**Footer:** 3-column grid at md (`1.2fr / 0.8fr / 0.8fr`).

**Nav:** Fixed full-width header with inner max-width 1400px; desktop nav is a centered pill bar hidden below lg; mobile uses logo + hamburger with dropdown panel.

## Elevation & Depth

This system is predominantly flat with **tonal layering** and **atmospheric overlays** rather than card shadows. Depth cues stack as: base color → optional white section lift → steel gradient panel → grain overlay → chain grid → content.

Product cutouts carry the primary shadow vocabulary via CSS `filter: drop-shadow()` — a diffuse 28px/48px shadow plus a tighter 8px/16px layer in ink-tinted rgba. Shop destination cards are flat at rest; a single soft shadow appears on hover only.

The fixed nav uses a subtle ambient shadow (`0 8px 32px -20px` ink at 18% opacity) plus a hairline border at ink 10%.

### Shadow Vocabulary
- **Cutout depth** (`drop-shadow(0 28px 48px rgb(10 22 40 / 0.16)) drop-shadow(0 8px 16px rgb(10 22 40 / 0.08))`): All product PNG cutouts in hero and specimen grid.
- **Nav ambient** (`box-shadow: 0 8px 32px -20px rgb(10 22 40 / 0.18)`): Floating nav pill and mobile menu surfaces.
- **Card hover lift** (`box-shadow: 0 24px 48px -28px rgb(10 22 40 / 0.35)`): Shop destination panels on hover only.
- **Dropdown** (`box-shadow: 0 16px 40px -20px rgb(10 22 40 / 0.25)`): Products submenu.

### Named Rules
**The Flat Specimen Rule.** Product cards on the steel panel have no corner radius and no box-shadow at rest. Depth belongs to the cutout images inside, not the card frame.

**The Hover-Only Lift Rule.** Shadows on marketing cards appear exclusively as a hover response. Resting surfaces stay flat.

## Shapes

Form language mixes **full pills** for interactive controls with **generous panel rounding** for editorial frames.

- **Pills (`rounded-full`):** Primary/secondary CTAs, nav bar container, nav items, ghost buttons on steel, social icon circles, sliding active-state pill.
- **Panels (`1.25rem` / `--radius-panel`):** Farm origin photo frame, shop destination cards.
- **Chips (`0.5rem` / `rounded-lg`):** Facility metadata boxes below origin photo.
- **Square frames:** Specimen product cards — no border-radius, hairline `border-white/14` on `bg-white/6`.

Borders use ink at low opacity on light surfaces (`border-ink/8`, `/10`, `/12`) and white at low opacity on steel (`border-white/14`, `/25`). Focus rings are a 2px solid steel outline with 3px offset.

## Components

### Buttons
- **Character:** Confident pills — semibold 15px, never uppercase.
- **Primary:** Steel fill, white text, `rounded-full`, `px-6 py-3.5`. Hover → `steel-deep`. Optional trailing arrow icon with slight translate on hover.
- **Secondary:** `border border-ink/12`, `bg-white/60`, ink text. Hover → `border-ink/20`, `bg-white`.
- **Ghost on steel:** `border border-white/25`, `bg-white/10`, white text, slightly smaller (`px-5 py-2.5`, 14px). Hover → `bg-white/18`.
- **Text link:** No pill — semibold steel text, hover steel-deep, with diagonal arrow icon nudge.

### Cards / Containers
- **Specimen card:** Square, `border-white/14`, `bg-white/6`, hover `bg-white/12`. Internal padding `p-5 md:p-6`. Mono ID top-left; product cutout bottom-right with hover scale 1.05.
- **Shop destination card:** Panel radius, white fill, `border-ink/10`, generous padding `p-8 md:p-10`. Country in steel; partner name in display serif.
- **Metadata chip:** `rounded-lg`, `border-ink/8`, `bg-canvas`, `px-4 py-3`. Mono label + medium weight value.
- **Steel panel section:** Full-width `linear-gradient(145deg, steel → steel-deep)` with chain-grid overlay and elevated grain opacity.

### Navigation
- **Desktop:** Frosted pill bar (`nav-surface` — canvas 96% + white mix, hairline border, ambient shadow). Sliding steel pill tracks active route. Items: 14px, medium weight, inactive `text-ink/70`, active white on steel pill. Products dropdown: separate nav-surface panel, rounded-2xl, full-width pill links inside.
- **Mobile:** Logo left, circular nav-surface hamburger right. Expanded menu: rounded-2xl panel, stacked pill links, product sub-links with section label.
- **Focus:** 2px steel outline, 3px offset (global).

### Footer
- **Surface:** Steel panel with grain overlay.
- **Logo:** Inverted (`brightness-0 invert`) for white-on-steel.
- **Columns:** Explore links, contact address, social icon row.
- **Social buttons:** 40×40px circles, `border-white/20`, hover border/background brighten.

### Signature: Product Cutout Cluster
- Hero right column: absolutely positioned PNG cutouts at varied sizes with `product-float` animation (5.5s ease-in-out, staggered delays). Pointer parallax on the cluster container (±20px x, ±14px y). Cutouts use `product-cutout` drop-shadow filter.

## Do's and Don'ts

### Do:
- **Do** keep the palette to canvas, white, ink family, and steel — one accent only.
- **Do** use Instrument Serif for hero and section headlines with tight negative tracking.
- **Do** overlay `grain-overlay` and `chain-grid` / `chain-grid-light` on major sections for atmospheric depth.
- **Do** present products as PNG cutouts with drop-shadow depth, not rectangular product photos on light backgrounds.
- **Do** use mono uppercase 11px labels for specimen IDs and facility metadata only.
- **Do** respect `prefers-reduced-motion` — disable float animation and GSAP entrance motion when requested.
- **Do** cap content width at 1400px with the established px-5 / md:px-10 / xl:px-14 padding rhythm.

### Don't:
- **Don't** add box-shadows to specimen cards at rest — depth lives in the cutouts.
- **Don't** use rounded corners on the steel-panel product grid cells.
- **Don't** introduce secondary accent colors (green, gold, red) — steel carries all chromatic signal.
- **Don't** set body copy in Instrument Serif or use display serif below headline scale.
- **Don't** fabricate testimonials, prices, awards, or customer claims in any visual treatment.
