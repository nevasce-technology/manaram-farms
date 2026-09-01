---
name: Manaram Farms
description: Living Cold Line — precision Himalayan dairy witnessed through glass, specimens in the foreground, story on canvas.
colors:
  canvas: "#f4f7fa"
  ink: "#0c1829"
  ink-soft: "#4a5d73"
  steel: "#0071bc"
  steel-deep: "#005a96"
  steel-soft: "#3d94cc"
  mist: "#dce8f2"
  hero-night: "#081424"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Figtree Variable, Figtree, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  pill: "9999px"
  panel: "1.5rem"
spacing:
  section-y: "5rem"
  section-y-md: "7rem"
---

## Visual world

**Living Cold Line** — Manaram is a precision cold-chain facility with a living herd behind the glass. The hero inverts the naive full-bleed farm photo: cattle are witnessed through an asymmetric aperture; products float as specimens in front.

## Home landing structure

| Section | Layout family |
|---------|---------------|
| Hero | Split copy + observation chamber (single viewport) |
| Facility proof rail | Mono metadata strip |
| WelcomeFarm | Editorial photo + story split |
| FeaturedProducts | Steel specimen bento (6 categories) |
| ShopDestinations | Partner panels |
| HomeFooter | Steel panel |

## Hero chamber layers

1. Cattle witness (cool-graded Ken Burns inside asymmetric aperture)
2. Frosted glass with animated light sweep
3. Product cutout orbit (elliptical, pointer parallax)
4. Grain overlay on chamber only

## Motion grammar

- One authored load entrance on hero
- Ambient motion: cattle drift, orbit rotation, glass sweep
- Scroll reveals on lower sections (single stagger each)
- `prefers-reduced-motion` disables transforms and blur

## Do not

- Scroll-hijack hero (no 210vh sticky)
- CloudBand exit transition
- Gradient text or serif display clichés
- Invented testimonials, prices, or awards
