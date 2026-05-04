# Quiet Luxury / Editorial 2026 — Reference

The 2026 consensus aesthetic for **luxury**, **wedding/events**, **boutique hospitality**, **fashion**, and **premium lifestyle** brands. Use this in place of the legacy "Liquid Glass + Glassmorphism" or "Soft UI + Aurora" recipes that appear elsewhere in this skill — those produce 2010s-era results.

Audit informed by: Mindy Weiss, Rafanelli Events, Marcy Blum, Yifat Oren, David Beahm, Calder Clark, Easton Events, Tara Guérard Soirée, Lela Rose, Magnolia Rouge, Once Wed, Junebug, Vogue Weddings, Kinfolk; cross-referenced with Awwwards 2026, Nielsen Norman Group "Luxury Principles", web.dev Core Web Vitals, WCAG 2.2.

---

## When to apply this style

Apply automatically when the brief is any of:

- Luxury wedding planner / event studio
- Boutique hotel, resort, retreat
- Editorial publication / magazine site
- High-fashion brand or fashion house
- Premium hospitality or fine dining
- Art gallery / museum / cultural institution
- "Quiet luxury" lifestyle / heritage craft
- Anything described with words like *editorial*, *quietly luxurious*, *bespoke*, *atelier*, *boutique*, *considered*, *heritage*, *one-of-one*

**Do NOT apply** to: SaaS dashboards, fintech, gaming, kids/education, productivity tools, e-commerce mass market — those have their own recipes.

---

## What luxury sites in 2026 ALL do

1. **Full-bleed photography.** Images touch the viewport edges. No padding, no card frame, no rounded corners, no shadow.
2. **Editorial serif as the brand voice.** Didone / modern / transitional serif (Editorial New, Sangbleu, Trémont, Cormorant Garamond, Playfair) at 64–120 px display sizes.
3. **One quiet sans companion only.** Inter, Söhne, Neue Haas, Karla, GT America. Two type families total. Never three.
4. **Cream / warm-white background — never `#FFFFFF`.** `#FAF7F2`, `#F7F3EE`, `#FBF8F4`. Pure white reads as Big Tech / e-commerce default.
5. **Warm near-black text — never `#000000`.** `#1A1814`, `#2B2620`, `#0A0A0A`. Softens contrast, matches print.
6. **Single restrained accent color.** Sage, oxblood, terracotta, brass / champagne, dusty blue, warm taupe. One only.
7. **Generous vertical rhythm.** Section padding 120–200 px on desktop. Whitespace is the design.
8. **Slim header with centred wordmark** *or* hamburger-only nav. 5 nav links max (Work / About / Press / Journal / Contact).
9. **Italic editorial serif accents** — never script fonts. "*as featured in*" is set in italic Cormorant, not Allura.
10. **Press wall in greyscale.** Vogue / Harper's Bazaar / Brides logos at ~30% opacity. Never in brand colors.
11. **Slow image cross-fades or Ken-Burns hero**, not video with audio.
12. **Pull quotes set in italic display serif** with no card chrome.
13. **Mobile = same vibe, just stacked.** No separate mobile design language.
14. **Lighthouse-grade performance.** AVIF/WebP, self-hosted fonts, LCP < 2.0 s. Slow sites destroy the spell.

---

## What luxury sites in 2026 NEVER do

These are the dead-giveaways of a 2000s/2010s small-business website. Every item is forbidden in this aesthetic:

| ❌ Never | ✅ Replace with |
|---|---|
| Drop shadows on cards (any soft / glow / lift style) | `box-shadow: none`. Hairline 1 px border if separation truly needed. |
| Neumorphism / soft UI / glassmorphism | Flat surfaces. No depth simulation. |
| Rounded card containers wrapping content | Image + caption sitting flush on cream — no card. |
| Blob radii (`rounded-[100px+]`) on photos | `border-radius: 0` on photography. |
| Gradients (purple-to-pink, aurora, mesh) | Flat single colors. Photography supplies all the chroma. |
| 3D / puffy / glossy / chrome / Web 2.0 | Flat editorial. |
| Stock script fonts (Great Vibes, Allura, Pacifico, Lobster) | Italic editorial serif (Cormorant Italic, Editorial New Italic). |
| Comic-Sans-adjacent rounded sans (Quicksand, Nunito, Comfortaa) | Geometric or grotesk sans (Inter, Söhne, GT America). |
| Pure `#FFFFFF` background with pure `#000000` text | `#FAF7F2` cream + `#1A1814` warm ink. |
| High-saturation primary colors | Muted earth tones. |
| Hero CTAs that shout ("Book Now! Get Started!") | No CTA above the fold, or one tiny "Inquire" link. |
| Multiple competing CTAs | One verb on the homepage: "Inquire". |
| Carousels with bullet pagination dots | Full-bleed scroll-snap or a static editorial grid. |
| Stock photography or illustration | Bespoke photography, photographer credited. |
| Star-rating testimonial cards ("★★★★★") | One italic-serif pull quote, attribution in italic Cormorant. |
| Color brand-logo press carousels | Greyscale logo row at ~30% opacity. |
| Chatbot bubbles, exit-intent popups, "10% off!" overlays | None. They obliterate the brand. |
| Sticky "Get a Quote!" bottom bar on desktop | None on luxury — breaks the magazine illusion. |
| Heavy parallax / scroll-jacking / kinetic scrolling | Subtle fade-in on scroll, max. |
| Pricing pages | Pricing is never published — gating creates exclusivity. |
| Live chat / WhatsApp widgets | Email contact form on a dedicated page. |
| Cookie banners that dominate the screen | Single thin bottom strip. |
| Service icons (briefcase, ring, calendar) | Replaced by text + photography. |
| `display-script` fonts as an accent | Italic Cormorant / Editorial New at the same size. |

---

## Token recipe (drop-in)

### Color

```css
--color-background:        250 247 242;   /* #FAF7F2 warm cream */
--color-foreground:         26 24 20;     /* #1A1814 warm ink */
--color-muted:             243 239 232;   /* #F3EFE8 quiet section bg */
--color-muted-foreground:  107 99 86;     /* #6B6356 readable secondary text */
--color-border:            230 222 210;   /* #E6DED2 hairline */
--color-card:              250 247 242;   /* same as bg — no card chrome */
--color-secondary:         158 165 145;   /* #9EA591 dusty sage — eyebrow labels */
--color-accent:            122 60 46;     /* #7A3C2E warm oxblood — single accent */
--color-destructive:       155 50 40;     /* #9B3228 */
```

Alternate accents (pick one — never combine):

| Accent | Hex | Mood |
|---|---|---|
| Oxblood / aubergine | `#5A2A2A` to `#7A3C2E` | Couture, mature |
| Sage | `#8C9482` to `#9EA591` | Calm, considered |
| Caramel | `#A07852` | Warm, earthy |
| Champagne / brass | `#B5946A` | Hospitality, hotel |
| Dusty blue | `#7A8A99` | Coastal, editorial |
| Warm terracotta | `#B5634A` | Mediterranean |

### Typography

```css
--font-display: "Cormorant Garamond", "Editorial New", "Times New Roman", Georgia, serif;
--font-body:    "Inter", system-ui, -apple-system, sans-serif;
/* DO NOT add a script font. Use display italic for romantic accents. */
```

Fluid type scale (every value combines `rem` + `vw`, never `vw` alone — preserves user font-size preference):

```css
--text-xs:      clamp(0.75rem,  0.72rem + 0.15vw, 0.8125rem);
--text-sm:      clamp(0.875rem, 0.85rem  + 0.15vw, 0.9375rem);
--text-base:    clamp(1rem,     0.95rem  + 0.25vw, 1.125rem);
--text-lg:      clamp(1.125rem, 1rem     + 0.5vw,  1.375rem);
--text-xl:      clamp(1.5rem,   1.2rem   + 1.2vw,  2rem);
--text-2xl:     clamp(2rem,     1.5rem   + 2vw,    3rem);
--text-3xl:     clamp(2.75rem,  2rem     + 3vw,    4.5rem);
--text-display: clamp(3.5rem,   2.5rem   + 5vw,    7.5rem);
```

Letter-spacing:
- `-0.02em` to `-0.03em` on display headlines
- `0.18em` to `0.20em` (uppercase) on eyebrow labels (≤12 px)
- `0` on body
- **Never** `0.32em` (`tracking-widest2`) — too wide, reads as 2010s "luxury template"

### Spacing & layout

```css
--space-section:    clamp(96px, 12vw, 200px);
--space-section-sm: clamp(64px, 8vw, 120px);
--container-max:    1280px;
--container-gutter: clamp(24px, 4vw, 64px);
```

Breakpoints (Tailwind v4 defaults — industry standard):

| Name | Min width |
|---|---|
| (base) | 0 |
| `sm` | 640 px |
| `md` | 768 px |
| `lg` | 1024 px |
| `xl` | 1280 px |
| `2xl` | 1536 px |

Use **media queries** for page-level layout, **container queries** (`@container (min-width: …)`) for components that may appear in multiple widths.

### Borders, radii, shadows

```css
/* SHADOWS — one token, used almost nowhere */
--shadow-hairline: 0 0 0 1px rgb(0 0 0 / 0.06);
/* DELETE every other shadow. No box-shadow on photos. Ever. */

/* RADII — editorial scale, no blobs */
--radius-none: 0;     /* Photography defaults to this */
--radius-sm:   2px;   /* Form inputs */
--radius-md:   4px;
--radius-lg:   8px;
--radius-full: 9999px; /* Used only for the single Inquire pill, if at all */
/* NEVER rounded-[100px / 140px / 200px] */
```

### Motion

```css
@keyframes reveal {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 700ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
```

Trigger via `IntersectionObserver` (one tiny client component — see `app/components/Reveal.tsx` pattern). Replace any `animate-fade-up` (24 px / 0.8 s) or `animate-float` keyframes — they're noisy.

---

## Information architecture (boutique-planner standard)

Six pages — the structure used by Yifat Oren, Marcy Blum, Easton Events, Calder Clark, Tara Guérard:

1. **Home** — atmosphere only. Hero photo + studio statement + 5–6 portfolio tiles + 1 italic-serif pull quote + greyscale press wall + Inquire band. **No services, no FAQ, no testimonials block, no pricing.**
2. **Work** (`/work`) — editorial grid, 12+ tiles, mixed 4:5 / 16:9 aspect ratios, caption = place + year only. Text-only filter chips at top.
3. **Work detail** (`/work/[slug]`) — full-bleed hero, one-paragraph narrative, photo essay, photographer + vendor credits, prev/next.
4. **About** (`/about`) — founder portrait, philosophy, three-pillar approach (Joyful / Editorial / Seamless — Calder Clark pattern), team grid, stats row.
5. **Press** (`/press`) — greyscale logo wall + linked feature list (italic publication name + headline + date).
6. **Journal** (`/journal`) — optional editorial blog. Ship a "Coming soon" stub if no content.
7. **Inquire** (`/inquire`) — two-column welcome + form. **Bottom-bordered inputs only, no boxed fields.** Submit = text link "Submit enquiry →", no filled pill.

**Never include on a luxury site:** Services tiers with pricing, FAQ on the homepage, pricing pages, testimonial carousels with star ratings.

---

## Section-by-section homepage cheat sheet

| Section | Pattern |
|---|---|
| **Navbar** | `h-20` fixed. Centred or left-aligned wordmark in display serif at 24 px. 5 quiet nav links uppercase 12 px tracking-0.18em. Inquire as text link, no pill. On dark hero: invert nav text to background color. On scroll: cream background with backdrop-blur, hairline bottom border, no shadow. |
| **Hero** | `h-[100svh]` full-bleed `next/image` with `priority`. Single italic-display-serif headline ("X regular / *Y italic*"). One subhead in 16 px Inter. No CTA above the fold. Tiny ↓ Scroll indicator bottom-center. **No floating image clusters, no animate-float.** |
| **Studio statement** | 80–120 words, Cormorant 28–32 px, max-width `52ch`, centered. Italic credit beneath ("— Founder, role"). No image. |
| **Selected work** | 5–6 tiles in CSS Grid, mixed 4:5 + 16:9. No card chrome. Caption: italic place name + uppercase region · year. Hover: image scale 1.02 over 700–900 ms. Tile → `/work/[slug]`. |
| **Pull quote** | One italic-Cormorant quote 32–48 px, max-width `40ch`, centered. No quote graphic, no card. Attribution in italic 14 px (anonymized: "A bride, Provence 2024"). |
| **Press wall** | Eyebrow "AS FEATURED IN" + 5–6 publication wordmarks at `text-foreground/55` opacity, in display font. Wraps the whole row in a single link to `/press`. |
| **Inquire band** | Display headline "Begin a *conversation*". Visible italic email link. One quiet text link "Inquire →". No filled pill on the home page. |
| **Footer** | 3-column light. Left: wordmark + studio address + email. Center: 5-link nav. Right: 2 social icons greyscale + studio hours. Bottom row: copyright + privacy + photography credits. All 12 px Inter, no shadows. |

---

## Performance & accessibility budget (luxury target)

Stricter than the standard "good" Core Web Vitals thresholds, because luxury sites must *feel* premium-fast:

| Metric | Standard "good" | Luxury target |
|---|---|---|
| LCP (Largest Contentful Paint) | ≤ 2.5 s | **≤ 2.0 s** |
| INP (Interaction to Next Paint) | ≤ 200 ms | **≤ 100 ms** |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | **≤ 0.05** |

How to hit it:
- `next/image` (or `<picture>` with AVIF + WebP `srcset`) for **every** image. Hero gets `priority` + `fetchpriority="high"`.
- Self-host fonts via `next/font/google`. `display: swap` on the display face (with preload), `display: optional` on body sans (zero CLS, falls back gracefully).
- Always specify `width`/`height` or `aspect-ratio` to reserve space.
- AVIF hero ≤ 180 KB at 1920 w.
- Inline critical CSS, defer the rest.
- Self-hosted fonts subset to `latin`.

### Accessibility — WCAG 2.2 AA baseline

| Element | Requirement |
|---|---|
| Body text contrast | ≥ 4.5:1 against background |
| Large text (≥18 pt) contrast | ≥ 3:1 |
| UI components & focus indicator | ≥ 3:1 |
| Focus indicator | 2 px solid accent ring, 3 px offset, on `:focus-visible` only |
| Headings | One `<h1>` per page, no skipped levels |
| Images | Meaningful `alt`; decorative `alt=""` |
| Motion | Wrap every animation in `@media (prefers-reduced-motion: no-preference)` |
| Skip link | First focusable element, links to `#main` |
| Tap targets | ≥ 44 × 44 px on mobile (even 12 px text needs vertical padding inside the tap area) |

The cream-text trap to defend against: light grey body text on warm white frequently fails AA. `#A0A0A0` on `#FAFAFA` is only ~2.6:1 — fails. Use `#6B6356` minimum (5.7:1, AA pass).

Sample contrast values for the recipe above:

- `#1A1814` on `#FAF7F2` → 13.5:1 (AAA)
- `#6B6356` on `#FAF7F2` → 5.7:1 (AA)
- `#7A3C2E` accent on `#FAF7F2` → 7.4:1 (AAA)

---

## Three sites to study deeply (in order)

If you can only internalise three luxury wedding/event/lifestyle sites, do these:

1. **`yifatoren.com`** — the most extreme expression of "less is the brand". Splash-page restraint, Trémont serif, ~44 words on the homepage. The luxury ceiling.
2. **`eastonevents.com`** — best technical execution. Webflow + AVIF + Letter South–style editorial galleries. Shows what "performance as luxury" looks like.
3. **`kinfolk.com`** — not weddings, but the editorial reference every modern wedding planner is borrowing from. Print-magazine discipline.

Then for genre moves:
- `mindyweiss.com` — celebrity-credible voice and press treatment.
- `calderclark.com` — three-pillar "Joyful / Editorial / Seamless" approach to selling a service without listing services.
- `davidbeahm.com` — press wall execution.
- `oncewed.com` / `magnoliarouge.com` — editorial blog grid patterns.
- `vogue.com/weddings` — typographic / hierarchy reference.

---

## When the user asks for a "luxury" or "wedding" site, default to:

1. This token recipe (cream + warm-ink + single accent — pick from the alternate accents table).
2. Cormorant Garamond (display, with italic for romantic accents) + Inter (body). **Not Great Vibes.** **Not Playfair as the only display.** **Not Raleway as the body.**
3. The 6-page boutique-planner IA above.
4. Full-bleed hero, no CTAs above the fold, "Inquire" as the only verb.
5. The performance & accessibility budget.

If the request explicitly contradicts (e.g. "I need pricing tiers visible"), ship the pricing as a separate quiet section — never as colorful card tiers with "Most loved" badges.
