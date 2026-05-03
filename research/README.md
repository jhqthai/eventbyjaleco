# Research — Event by Jaleco v2 Redesign

Research compiled on **2026-05-04** in response to feedback that the current site's heavy shadows and soft-UI treatment make it feel "2000s style" and "less high-end."

## Context

The current build uses a neumorphism-lite aesthetic with thick outer shadows and extreme border-radius panels. Feedback flagged this as dated. The goal of this research was to answer three questions:

1. Why does that aesthetic read as dated in 2026, and what replaced it?
2. How do the top boutique-luxury wedding and event studios in the world present themselves today?
3. What concrete responsive, accessibility, and performance guidelines should inform the redesign?

## Documents

| # | File | What's inside |
|---|---|---|
| 01 | [`01-luxury-wedding-sites-audit.md`](./01-luxury-wedding-sites-audit.md) | Site-by-site audit of 14 reference sites (Mindy Weiss, Rafanelli, Marcy Blum, Yifat Oren, David Beahm, Calder Clark, Easton Events, Tara Guérard, Lela Rose, Magnolia Rouge, Once Wed, Junebug, Vogue Weddings, Kinfolk) across 10 design dimensions, plus the common patterns, anti-patterns, and a 2026 cheat sheet. |
| 02 | [`02-responsive-luxury-ux-guidelines.md`](./02-responsive-luxury-ux-guidelines.md) | 2025–2026 responsive design and luxury web UX/UI guidelines: why neumorphism is dated, typography and color trends, responsive breakpoints, container queries, fluid typography with `clamp()`, WCAG 2.2 AA, and Core Web Vitals targets. |

## Key takeaways

**Visual direction for the redesign.** Move from neumorphism-lite to an editorial / quiet-luxury system: full-bleed photography with no card chrome, warm off-white background (`#FAF7F2`), warm near-black ink (`#1A1814`), a single restrained accent (sage, oxblood, champagne, or dusty blue), a high-contrast editorial serif paired with one neutral sans, and generous vertical rhythm.

**What to remove.** Drop shadows on cards, rounded container panels, neumorphism, script fonts like Great Vibes/Allura, pure `#FFFFFF` and pure `#000000`, multiple competing CTAs, testimonial cards with star ratings, and any gradient or glossy 3D treatment.

**What to add.** Full-bleed hero imagery (AVIF/WebP), one quiet accent color, hairline dividers instead of shadows, italic-serif eyebrow labels, a greyscale press row, slow image cross-fades, `IntersectionObserver`-driven fade-in motion, `prefers-reduced-motion` support, and a single "Inquire" CTA.

**Technical guardrails.** Mobile-first with Tailwind's default breakpoints, container queries for components, fluid type via `clamp(rem + vw)`, WCAG 2.2 AA contrast (4.5:1 body, 3:1 UI), `:focus-visible` rings, LCP < 2.5s / INP < 200ms / CLS < 0.1, and `next/image` for all imagery.

## Next steps

The natural follow-up is to translate these findings into a concrete design-token spec (Tailwind config, font stack, spacing scale, motion tokens) and then a component-level mockup for the home page.
