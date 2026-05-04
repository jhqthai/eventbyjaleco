---
name: ui-ux-pro-max
description: Expert UI/UX design advisor providing style recommendations, color palettes, typography pairings, chart types, landing page patterns, responsive layout rules, and Core Web Vitals / WCAG 2.2 AA targets for any product type. Use when designing interfaces, selecting design systems, choosing color schemes, picking fonts, building dashboards, planning landing pages, or auditing dated/2010s-era visuals. Includes a 2026 Editorial / Quiet Luxury reference for luxury, wedding/events, boutique hotel, fashion, and editorial briefs. Covers 161 product categories, 67 UI styles, 73 font pairings, 161 color palettes, 25 chart types, and 20+ landing patterns.
---

# UI/UX Pro Max Design Skill

## When to Apply This Skill

Apply automatically when the user asks about:
- UI style, visual design, or aesthetic direction
- Color palette, theme, or color scheme selection
- Typography / font pairing choices
- Dashboard design or data visualization
- Landing page layout or conversion optimization
- "What design style should I use for X?"
- "What colors work for X app/product?"

---

## Design Workflow

Follow this order for any design request:

1. **Identify product type** → look up in `references/products.md`
2. **Check if luxury / editorial** → if yes, use `references/quiet-luxury-2026.md` instead of the generic recipes (it overrides Wedding/Events, Luxury Brand, Hotel, E-commerce Luxury, Beauty/Spa, Boutique Hospitality)
3. **Get primary style** → from product type recommendation
4. **Get color palette** → from `references/colors.md` (matched by product number)
5. **Get typography** → from `references/typography.md` (matched by mood keywords)
6. **Get landing pattern** → from `references/landing.md` (matched by goal)
7. **Get chart types** → from `references/charts.md` (if dashboard)
8. **Validate** → apply the pre-delivery checklist AND the dated-pattern guard below

---

## Dated patterns to NEVER ship in 2026

These visual cues immediately make a site feel like a 2000s/2010s small-business template. Refuse them on luxury/editorial briefs, and reach for them sparingly anywhere else:

| ❌ Avoid | ✅ Use instead |
|---|---|
| Drop shadows on cards (any soft-UI / glow / lift) | `box-shadow: none` + 1 px hairline border only when separation is essential |
| Neumorphism / soft-UI / heavy glassmorphism on luxury, editorial, fashion | Flat surfaces, full-bleed photography |
| Stock script fonts (Great Vibes, Allura, Pacifico, Lobster, Sacramento) | Italic editorial serif (Cormorant Italic, Editorial New Italic, Playfair Italic) |
| Rounded blob radii (`rounded-[100px+]`) on photos | `border-radius: 0` on photography |
| Pure `#FFFFFF` background with pure `#000000` text on premium brands | Warm cream (`#FAF7F2`) + warm ink (`#1A1814`) |
| `letter-spacing` ≥ `0.30em` (the old "tracking-widest2" trick) | `0.18em`–`0.20em` max on uppercase eyebrows |
| Gradient backgrounds (purple→pink, mesh, aurora) on luxury | Single muted earth-tone accent. Photography supplies all chroma. |
| Multiple competing CTAs / shouting hero buttons on luxury | One quiet verb ("Inquire") and never above the fold |
| Carousel testimonials with star ratings | Single italic-serif pull quote |
| Color brand-logo press carousels | Greyscale logo wall at ~30 % opacity |
| Chatbots, exit-intent popups, "10% off" overlays on luxury | None |
| `display-script` fonts in the navbar | Display serif wordmark only |

When in doubt on a luxury/editorial/wedding/hotel/fashion brief, follow `references/quiet-luxury-2026.md`.

---

## The 10 Design System Variables (Always Define These)

Every design must define these CSS/design tokens:

```
--color-primary          // Main brand color
--color-secondary        // Supporting color
--color-accent           // CTA / highlight color
--color-background       // Page background
--color-foreground       // Main text
--color-card             // Card/panel background
--color-muted            // Subtle backgrounds
--color-muted-foreground // Secondary text
--color-border           // Dividers / outlines
--color-destructive      // Error / delete states
```

---

## Style Selection Rules

| Situation | Recommended Style |
|-----------|------------------|
| Trust-critical (finance, legal, govt) | Minimalism + Accessible & Ethical |
| High engagement / consumer (social, gaming) | Vibrant & Block-based + Motion-Driven |
| Premium / luxury / fashion / heritage | **Editorial / Quiet Luxury + Minimalism** (see `references/quiet-luxury-2026.md`) |
| Wedding / events / boutique planner | **Editorial / Quiet Luxury** (see `references/quiet-luxury-2026.md`) |
| Boutique hotel / hospitality | **Editorial / Quiet Luxury + Minimalism** (see `references/quiet-luxury-2026.md`) |
| Healthcare / wellness | Neumorphism + Soft UI Evolution |
| AI / Tech | AI-Native UI + Dark Mode (OLED) |
| Dashboard / analytics | Data-Dense + Dark Mode (OLED) |
| Creative agency / portfolio | Brutalism + Motion-Driven (or Editorial for "quiet" agencies) |
| SaaS / productivity | Glassmorphism + Flat Design |
| Kids / education | Claymorphism + Vibrant |
| Crypto / Web3 | Cyberpunk UI + Dark Mode |

> **Note (2026):** "Liquid Glass + Glassmorphism" is no longer the default for luxury — current top-tier wedding planners, fashion houses, and boutique hotels (Yifat Oren, Easton Events, Kinfolk, Aman, The NoMad) ship flat editorial layouts with full-bleed photography and italic serif accents. Reserve glassmorphism for SaaS / productivity / spatial-computing surfaces.

---

## Typography Quick Guide

| Mood | Heading | Body |
|------|---------|------|
| Editorial Luxury / Wedding / Hotel / Fashion | **Cormorant Garamond** (with italic accent) | **Inter** |
| Elegant/Luxury (alt) | Playfair Display | Inter |
| Modern SaaS | Poppins | Open Sans |
| Tech/Startup | Space Grotesk | DM Sans |
| Wellness/Calm | Lora | Inter |
| Developer | JetBrains Mono | IBM Plex Sans |
| Playful/Kids | Fredoka | Nunito |
| Bold/Impact | Bebas Neue | Source Sans 3 |
| Finance/Trust | IBM Plex Sans | IBM Plex Sans |
| Gaming | Russo One | Chakra Petch |
| Vietnamese | Be Vietnam Pro | Noto Sans |
| Japanese | Noto Serif JP | Noto Sans JP |
| Korean | Noto Sans KR | Noto Sans KR |
| Arabic (RTL) | Noto Naskh Arabic | Noto Sans Arabic |

> **Dated for 2026 — do not pair on luxury briefs:**
> - Script fonts as headings: **Great Vibes, Allura, Pacifico, Lobster, Sacramento, Dancing Script** — read as 2010s Etsy/wedding-template. Replace with *Cormorant Garamond Italic* or *Editorial New Italic* at the same size.
> - **Raleway** as the body sans on premium brands — its 2014 web-default association reads dated. Replace with *Inter*, *Söhne*, or *GT America*.
> - **Comic-rounded** sans (Quicksand, Comfortaa, Nunito) on anything serious. Reserve for kids / education only.

**Loading guidance.** Self-host via `next/font/google` (or equivalent). Use `display: swap` on the display face (with preload), `display: optional` on the body sans — eliminates layout shift while still letting the brand serif paint quickly. Subset to `latin` unless multilingual.

```ts
// Next.js example
import { Cormorant_Garamond, Inter } from "next/font/google";
const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["300","400","500","600"], style: ["normal","italic"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-body", display: "optional" });
```

Plain CSS fallback:
```css
@import url('https://fonts.googleapis.com/css2?family=HEADING_FONT:wght@400;600;700&family=BODY_FONT:wght@400;500&display=swap');
```

---

## Color Palette Shorthand (Top 20 Product Types)

| # | Product | Primary | Accent | Background |
|---|---------|---------|--------|------------|
| ★ | **Editorial Luxury / Wedding / Boutique Hotel (2026 default)** | **#1A1814** | **#7A3C2E** *(oxblood)* | **#FAF7F2** *(warm cream)* |
| 1 | SaaS | #2563EB | #EA580C | #F8FAFC |
| 2 | Micro SaaS | #6366F1 | #059669 | #F5F3FF |
| 3 | E-commerce | #059669 | #EA580C | #ECFDF5 |
| 4 | E-commerce Luxury *(legacy)* | #1C1917 | #A16207 | #FAFAF9 |
| 5 | B2B Service | #0F172A | #0369A1 | #F8FAFC |
| 6 | Financial Dashboard | #0F172A | #22C55E | #020617 |
| 7 | Analytics Dashboard | #1E40AF | #D97706 | #F8FAFC |
| 8 | Healthcare | #0891B2 | #059669 | #ECFEFF |
| 9 | Educational | #4F46E5 | #EA580C | #EEF2FF |
| 10 | Creative Agency | #EC4899 | #0891B2 | #FDF2F8 |
| 12 | Gaming | #7C3AED | #F43F5E | #0F0F23 |
| 14 | Fintech/Crypto | #F59E0B | #8B5CF6 | #0F172A |
| 15 | Social Media | #E11D48 | #2563EB | #FFF1F2 |
| 18 | AI/Chatbot | #7C3AED | #0891B2 | #FAF5FF |
| 33 | Luxury Brand *(legacy)* | #1C1917 | #A16207 | #FAFAF9 |
| 35 | Fitness | #F97316 | #22C55E | #1F2937 |
| 36 | Real Estate | #0F766E | #0369A1 | #F0FDFA |
| 45 | Music Streaming | #1E1B4B | #22C55E | #0F0F23 |
| 46 | Video Streaming | #0F0F23 | #E11D48 | #000000 |
| 91 | Personal Finance | #2563EB | #059669 | #F8FAFC |

For the full list of 161 product palettes → see `references/colors.md`

---

## Chart Type Quick Reference

| Data goal | Recommended Chart |
|-----------|------------------|
| Trend over time | Line / Area Chart |
| Category comparison | Bar / Column Chart |
| Part of whole | Donut / Pie (max 5 slices) |
| Correlation | Scatter Plot |
| Distribution | Box Plot / Histogram |
| Geographic | Choropleth Map |
| Hierarchy | Treemap / Sunburst |
| Comparison matrix | Heat Map |
| KPI vs target | Bullet Chart |
| Flow | Sankey Diagram |
| Real-time | Streaming Area Chart |
| Multi-attribute | Radar / Spider Chart |
| Financial | Candlestick |

Full chart specs → `references/charts.md`

---

## Landing Page Quick Reference

| Goal | Pattern |
|------|---------|
| Product launch | Hero + Features + CTA |
| Trust-first | Hero + Testimonials + CTA |
| Show product | Product Demo + Features |
| Quick conversion | Minimal Single Column |
| Complex product | Funnel (3-Step) |
| Justify switching | Comparison Table |
| Email capture | Lead Magnet + Form |
| Pricing decision | Pricing Page + CTA |
| App download | App Store Style |
| Waitlist/launch | Waitlist / Coming Soon |

Full landing patterns → `references/landing.md`

---

## Responsive & Fluid Typography (2026 default)

Use Tailwind v4 / industry-standard breakpoints — **media queries** for page-level layout, **container queries** (`@container (min-width: …)`) for components used in multiple widths.

| Name | Min width |
|---|---|
| (base) | 0 |
| `sm` | 640 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

Always use **fluid type** (`clamp()`) so designs hold from 360 px to 1920 px without breakpoint switching. Every value combines `rem` + `vw` — never `vw` alone (breaks user font-size preferences).

```css
--text-xs:      clamp(0.75rem,  0.72rem + 0.15vw, 0.8125rem);
--text-sm:      clamp(0.875rem, 0.85rem  + 0.15vw, 0.9375rem);
--text-base:    clamp(1rem,     0.95rem  + 0.25vw, 1.125rem);
--text-lg:      clamp(1.125rem, 1rem     + 0.5vw,  1.375rem);
--text-xl:      clamp(1.5rem,   1.2rem   + 1.2vw,  2rem);
--text-2xl:     clamp(2rem,     1.5rem   + 2vw,    3rem);
--text-3xl:     clamp(2.75rem,  2rem     + 3vw,    4.5rem);
--text-display: clamp(3.5rem,   2.5rem   + 5vw,    7.5rem);

--space-section:    clamp(96px, 12vw, 200px);
--space-section-sm: clamp(64px, 8vw, 120px);
--container-max:    1280px;
--container-gutter: clamp(24px, 4vw, 64px);
```

---

## Performance & Accessibility Targets (2026)

### Core Web Vitals — ship to Google's "good" thresholds, beat them on premium brands

| Metric | Good | Premium target |
|---|---|---|
| LCP — Largest Contentful Paint | ≤ 2.5 s | **≤ 2.0 s** |
| INP — Interaction to Next Paint | ≤ 200 ms | **≤ 100 ms** |
| CLS — Cumulative Layout Shift | ≤ 0.1 | **≤ 0.05** |

How to hit them:
- `next/image` (or `<picture>` + `srcset`) for **every** image. Hero image: `priority` + `fetchpriority="high"` + AVIF first, WebP fallback. Hero AVIF ≤ 180 KB at 1920 w.
- Always declare `width`/`height` or `aspect-ratio` to reserve layout box.
- Self-host fonts. Subset to `latin` unless multilingual. `display: swap` on display face (preloaded), `display: optional` on body sans.
- Inline critical CSS, defer non-critical, lazy-load below-fold scripts.
- Avoid carousels with auto-advance — they hammer INP.

### WCAG 2.2 AA baseline (the legal floor in EU + AU + US public sector)

| Element | Requirement |
|---|---|
| Body text contrast | ≥ 4.5:1 against background |
| Large text (≥18 pt or ≥14 pt bold) | ≥ 3:1 |
| Non-text UI + focus indicator | ≥ 3:1 |
| Focus indicator | 2 px solid accent ring at 3 px offset, on `:focus-visible` only — never on mouse `:focus` |
| Headings | Exactly one `<h1>` per page, no skipped levels (`h1` → `h3` is a fail) |
| Tap targets (mobile) | ≥ 44 × 44 px |
| Skip link | First focusable element of every page, links to `#main` |
| Motion | Wrap every animation in `@media (prefers-reduced-motion: no-preference)` |
| Form inputs | Visible label OR `aria-label`. Placeholder is never a label. |
| Images | Meaningful `alt`; decorative `alt=""` |

### Cream-text contrast trap

Light grey body text on warm white frequently fails AA. Always check against a calculator. The recipe in `quiet-luxury-2026.md` uses `#6B6356` on `#FAF7F2` (5.7:1, AA pass) for secondary text, never `#A0A0A0` (2.6:1, fails).

---

## Pre-Delivery Checklist

**Tokens & system**
- [ ] All 10 design tokens defined as CSS custom properties
- [ ] Fluid type scale (`clamp()`) defined — no fixed `px` headings
- [ ] Section spacing uses `clamp()` — no fixed `pt-32` on landing pages
- [ ] Single shadow strategy (luxury: `none` + hairline only)
- [ ] Border-radius scale set; no blob radii on photography

**Typography**
- [ ] Self-hosted fonts (`next/font/google` or `@font-face`) — not blocking `<link>`
- [ ] No script fonts on luxury/editorial briefs
- [ ] One display + one body family. No third family.
- [ ] Body weight ≥ 300 (avoid weight 100/200 — illegible on most screens)

**Color**
- [ ] WCAG 2.2 AA contrast verified for all body text and UI components
- [ ] AAA (7:1) on long-form reading copy
- [ ] No color-only indicators (add icons/labels)
- [ ] Single accent color on luxury briefs

**Responsive**
- [ ] Mobile-first build, verified at 360 / 414 / 768 / 1024 / 1440 / 1920
- [ ] Container queries for components used in multiple widths
- [ ] No horizontal scroll at any breakpoint

**Performance**
- [ ] Every image via `next/image` / `<picture>` with AVIF + WebP
- [ ] Hero image: `priority` + `fetchpriority="high"`
- [ ] `width`/`height` or `aspect-ratio` on every image (CLS guard)
- [ ] LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (premium: tighter — see above)

**Accessibility**
- [ ] Skip-to-content link first in tab order
- [ ] Focus states visible on `:focus-visible` (2 px ring, 3:1 contrast)
- [ ] Single `<h1>` per page; heading levels not skipped
- [ ] `prefers-reduced-motion` respected for every animation
- [ ] All form inputs have a visible label or `aria-label`
- [ ] Tap targets ≥ 44 × 44 px on mobile

**State coverage**
- [ ] Loading states defined
- [ ] Empty states defined
- [ ] Error / destructive states defined
- [ ] Dark mode tokens defined if product uses dark theme

**Anti-pattern guard**
- [ ] No drop shadows on luxury / editorial briefs
- [ ] No script fonts on luxury / editorial / wedding briefs
- [ ] No published pricing on luxury briefs
- [ ] No carousel with bullet pagination
- [ ] No multiple competing CTAs above the fold

---

## Additional Reference Files

- `references/quiet-luxury-2026.md` — **Editorial / Quiet Luxury master reference** (luxury, wedding/events, boutique hotel, fashion). Overrides generic recipes.
- `references/styles.md` — All 67 UI styles with CSS keywords, checklist, and AI prompts
- `references/colors.md` — Full color palettes for 161 product types
- `references/typography.md` — 73 Google Fonts pairings with CSS import and Tailwind config
- `references/products.md` — Product type → style + landing + dashboard recommendations
- `references/charts.md` — 25 chart types with accessibility rating and library recommendations
- `references/landing.md` — 20+ landing page patterns with color strategy and conversion tips
