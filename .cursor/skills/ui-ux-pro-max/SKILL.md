---
name: ui-ux-pro-max
description: Expert UI/UX design advisor providing style recommendations, color palettes, typography pairings, chart types, and landing page patterns for any product type. Use when designing interfaces, selecting design systems, choosing color schemes, picking fonts, building dashboards, or planning landing pages. Covers 161 product categories, 67 UI styles, 73 font pairings, 161 color palettes, 25 chart types, and 20+ landing patterns.
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
2. **Get primary style** → from product type recommendation
3. **Get color palette** → from `references/colors.md` (matched by product number)
4. **Get typography** → from `references/typography.md` (matched by mood keywords)
5. **Get landing pattern** → from `references/landing.md` (matched by goal)
6. **Get chart types** → from `references/charts.md` (if dashboard)
7. **Validate** → apply the pre-delivery checklist

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
| Premium / luxury | Liquid Glass + Glassmorphism |
| Healthcare / wellness | Neumorphism + Soft UI Evolution |
| AI / Tech | AI-Native UI + Dark Mode (OLED) |
| Dashboard / analytics | Data-Dense + Dark Mode (OLED) |
| Creative agency / portfolio | Brutalism + Motion-Driven |
| SaaS / productivity | Glassmorphism + Flat Design |
| Kids / education | Claymorphism + Vibrant |
| Crypto / Web3 | Cyberpunk UI + Dark Mode |

---

## Typography Quick Guide

| Mood | Heading | Body |
|------|---------|------|
| Elegant/Luxury | Playfair Display | Inter |
| Modern SaaS | Poppins | Open Sans |
| Tech/Startup | Space Grotesk | DM Sans |
| Wellness/Calm | Lora | Raleway |
| Developer | JetBrains Mono | IBM Plex Sans |
| Playful/Kids | Fredoka | Nunito |
| Bold/Impact | Bebas Neue | Source Sans 3 |
| Finance/Trust | IBM Plex Sans | IBM Plex Sans |
| Gaming | Russo One | Chakra Petch |
| Wedding/Romance | Great Vibes | Cormorant |
| Vietnamese | Be Vietnam Pro | Noto Sans |
| Japanese | Noto Serif JP | Noto Sans JP |
| Korean | Noto Sans KR | Noto Sans KR |
| Arabic (RTL) | Noto Naskh Arabic | Noto Sans Arabic |

All fonts load from Google Fonts. Import pattern:
```css
@import url('https://fonts.googleapis.com/css2?family=HEADING_FONT:wght@400;600;700&family=BODY_FONT:wght@400;500&display=swap');
```

---

## Color Palette Shorthand (Top 20 Product Types)

| # | Product | Primary | Accent | Background |
|---|---------|---------|--------|------------|
| 1 | SaaS | #2563EB | #EA580C | #F8FAFC |
| 2 | Micro SaaS | #6366F1 | #059669 | #F5F3FF |
| 3 | E-commerce | #059669 | #EA580C | #ECFDF5 |
| 4 | E-commerce Luxury | #1C1917 | #A16207 | #FAFAF9 |
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
| 33 | Luxury Brand | #1C1917 | #A16207 | #FAFAF9 |
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

## Pre-Delivery Checklist

- [ ] All 10 design tokens defined
- [ ] Color contrast WCAG AA (4.5:1) minimum — AAA (7:1) for critical text
- [ ] Google Fonts `@import` included with correct weights
- [ ] Mobile-responsive layout verified
- [ ] Focus states visible (3-4px ring)
- [ ] No color-only indicators (add icons/labels)
- [ ] `prefers-reduced-motion` respected for animations
- [ ] Loading states defined
- [ ] Error / destructive states defined
- [ ] Dark mode tokens defined if product type uses dark theme

---

## Additional Reference Files

- `references/styles.md` — All 67 UI styles with CSS keywords, checklist, and AI prompts
- `references/colors.md` — Full color palettes for 161 product types
- `references/typography.md` — 73 Google Fonts pairings with CSS import and Tailwind config
- `references/products.md` — Product type → style + landing + dashboard recommendations
- `references/charts.md` — 25 chart types with accessibility rating and library recommendations
- `references/landing.md` — 20+ landing page patterns with color strategy and conversion tips
