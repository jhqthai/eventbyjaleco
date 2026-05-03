# UI Styles — 67 Styles Catalog

## Style Ratings Legend
- **Performance**: ⚡ Excellent | ✓ Good | ⚠ Caution | ❌ Poor
- **Accessibility**: ✓ WCAG AAA | ✓ WCAG AA | ⚠ Needs attention | ❌ Avoid for critical
- **Mobile-Friendly**: ✓ High | ◐ Medium | ✗ Low
- **Conversion-Focused**: ✓ High | ◐ Medium | ✗ Low

---

## Core Styles (Most Used)

### 1. Minimalism & Swiss Style
- **Keywords**: clean, spacious, white space, geometric, sans-serif, grid-based, essential
- **Colors**: Black #000000, White #FFFFFF, Neutral greys, single accent
- **Effects**: Subtle hover (200–250ms), sharp shadows, clear type hierarchy
- **Best for**: Enterprise apps, dashboards, documentation, SaaS, professional tools
- **Avoid for**: Creative portfolios, entertainment, playful brands
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ WCAG AAA | **Mobile**: ✓ | **Conversion**: ◐
- **CSS keys**: `display: grid`, `gap: 2rem`, `font-family: sans-serif`, `border-radius: 0`, no box-shadow
- **Era**: 1950s Swiss | **Complexity**: Low

### 2. Neumorphism
- **Keywords**: soft UI, embossed, debossed, monochromatic, light source, subtle depth, rounded
- **Colors**: Pastels — Soft Blue #C8E0F4, Soft Pink #F5E0E8, Soft Grey #E8E8E8
- **Effects**: Dual box-shadow (`-5px -5px 15px`, `5px 5px 15px`), smooth press 150ms
- **Best for**: Health/wellness, meditation, fitness, minimal interaction
- **Avoid for**: Complex apps, critical accessibility, data-heavy
- **Performance**: ⚡ Good | **Accessibility**: ⚠ Low contrast | **Mobile**: ✓ | **Conversion**: ◐
- **CSS keys**: `border-radius: 12–16px`, `box-shadow: -5px -5px 15px rgba(0,0,0,0.1), 5px 5px 15px rgba(255,255,255,0.8)`
- **Era**: 2020s | **Complexity**: Medium

### 3. Glassmorphism
- **Keywords**: frosted glass, transparent, blurred background, layered, vibrant, depth
- **Colors**: Translucent white rgba(255,255,255,0.1–0.3), vibrant backgrounds
- **Effects**: Backdrop blur 10–20px, 1px rgba white border, Z-depth layers
- **Best for**: Modern SaaS, financial dashboards, high-end corporate, modals
- **Avoid for**: Low-contrast backgrounds, performance-limited
- **Performance**: ⚠ Good | **Accessibility**: ⚠ Ensure 4.5:1 | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `backdrop-filter: blur(15px)`, `background: rgba(255,255,255,0.15)`, `border: 1px solid rgba(255,255,255,0.2)`
- **Era**: 2020s | **Complexity**: Medium

### 4. Brutalism
- **Keywords**: raw, stark, high contrast, plain text, visible borders, asymmetric, anti-design
- **Colors**: Primary only — Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black, White
- **Effects**: No smooth transitions (instant), sharp corners 0px, bold type 700+
- **Best for**: Design portfolios, counter-culture, editorial/media, tech blogs
- **Avoid for**: Corporate, conservative industries, customer-facing professional
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ WCAG AAA | **Mobile**: ◐ | **Conversion**: ✗
- **CSS keys**: `border-radius: 0px`, `transition: none`, `font-weight: 700+`, visible borders 2–4px
- **Era**: 1950s Brutalist | **Complexity**: Low

### 5. 3D & Hyperrealism
- **Keywords**: depth, realistic textures, 3D models, spatial, tactile, immersive
- **Colors**: Deep Navy #001F3F, Forest Green, Burgundy, Gold #FFD700, Silver
- **Effects**: WebGL/Three.js, physics lighting, parallax 3–5 layers, 300–400ms
- **Best for**: Gaming, product showcase, immersive e-commerce, VR/AR
- **Avoid for**: Low-end mobile, accessibility-critical, data tables
- **Performance**: ❌ Poor | **Accessibility**: ⚠ | **Mobile**: ✗ | **Conversion**: ◐
- **CSS keys**: `perspective: 1000px`, WebGL canvas, Three.js/Babylon.js
- **Era**: 2020s | **Complexity**: High

### 6. Vibrant & Block-Based
- **Keywords**: bold, energetic, playful, block layout, geometric, high contrast, duotone
- **Colors**: Neon Green #39FF14, Electric Purple #BF00FF, Vivid Pink #FF1493, Bright Cyan
- **Effects**: Large sections (48px+ gaps), animated patterns, bold hover, scroll-snap
- **Best for**: Startups, creative, gaming, social media, youth-focused, entertainment
- **Avoid for**: Finance, healthcare, formal business, elderly
- **Performance**: ⚡ Good | **Accessibility**: ◐ | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `gap: 48px+`, `font-size: 32px+`, animated CSS patterns
- **Era**: 2020s | **Complexity**: Medium

### 7. Dark Mode (OLED)
- **Keywords**: dark theme, OLED, deep black, midnight blue, eye-friendly, neon accents
- **Colors**: Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27 + neon accents
- **Effects**: Minimal glow (`text-shadow: 0 0 10px`), high readability
- **Best for**: Coding platforms, entertainment, eye-strain prevention, OLED devices
- **Avoid for**: Print-first, high-brightness outdoor, color-accuracy-critical
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ WCAG AAA | **Mobile**: ✓ | **Conversion**: ◐
- **CSS keys**: `background: #000000 or #121212`, `color-scheme: dark`
- **Era**: 2020s | **Complexity**: Low

### 8. Aurora UI
- **Keywords**: aurora borealis, gradient mesh, iridescent, ethereal, fluid, layered
- **Colors**: Deep Midnight Blue #0A0E27, Soft Purple #4B2D8F, Teal #00C9B8, Rose Pink #FF6B6B
- **Effects**: Fluid gradient blobs (CSS radial-gradient), subtle shimmer, soft glow
- **Best for**: Tech startups, creative platforms, AI products, premium SaaS
- **Avoid for**: Accessibility-first, conservative
- **Performance**: ✓ Good | **Accessibility**: ⚠ | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: radial-gradient blobs, mix-blend-mode, filter: blur for mesh

### 9. Claymorphism
- **Keywords**: clay, 3D, rounded, plastic, inflated, bubbly, soft shadows, colorful
- **Colors**: Pastel primary colors, vivid accents, soft backgrounds
- **Effects**: Multi-layer shadow (inner + outer), border-radius 20–24px, scale on press
- **Best for**: Kids, education, playful brands, fintech gamification
- **Avoid for**: Professional enterprise, financial, legal
- **Performance**: ✓ Good | **Accessibility**: ✓ AA | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `border-radius: 20–24px`, complex box-shadow with spread, inner-shadow

### 10. Retro-Futurism
- **Keywords**: cyberpunk, neon on dark, sci-fi, glitch, holographic, grid lines, 80s
- **Colors**: Electric Blue #0080FF, Neon Pink #FF00FF, Chrome Silver, Dark base #0D0D0D
- **Effects**: Glitch animation, scan lines, phosphor glow, grid overlay
- **Best for**: Gaming, crypto, cybersecurity, sci-fi, underground culture
- **Avoid for**: Healthcare, corporate, family-friendly
- **Performance**: ✓ Good | **Accessibility**: ⚠ | **Mobile**: ◐ | **Conversion**: ◐

### 11. Flat Design
- **Keywords**: flat, 2D, no shadows, clean, icon-based, simple, Material-inspired
- **Colors**: Bold solids, Material Design palette, strong contrast
- **Effects**: Minimal — color change on hover, slight elevation, no drop shadows
- **Best for**: Mobile apps, cross-platform, icon-heavy, general purpose
- **Avoid for**: Luxury brands, immersive experiences
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ AA+ | **Mobile**: ✓ | **Conversion**: ✓

### 12. Micro-interactions
- **Keywords**: small animations, gesture-based, tactile, contextual, responsive
- **Colors**: Feedback: Green #22C55E, Red #EF4444, Amber #F59E0B
- **Effects**: Hover 50–100ms, loading spinners, success/error states, swipe/pinch
- **Best for**: Mobile apps, touchscreen UIs, productivity, consumer apps
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ Good | **Mobile**: ✓ | **Conversion**: ✓

### 13. Motion-Driven
- **Keywords**: animation-heavy, scroll effects, parallax, entrance animations, page transitions
- **Effects**: Scroll (Intersection Observer), hover 300–400ms, parallax 3–5 layers
- **Best for**: Portfolio, storytelling, entertainment, SaaS
- **Avoid for**: Data dashboards, accessibility-critical, low-power
- **Performance**: ⚠ Good | **Accessibility**: ⚠ prefers-reduced-motion | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `will-change: transform`, `Intersection Observer API`, GSAP/Framer Motion

### 14. Accessible & Ethical Design
- **Keywords**: WCAG AAA, color-blind, high contrast, haptic, voice, screen reader
- **Colors**: 7:1+ contrast ratio, symbol-based indicators, no color-only signals
- **Effects**: Focus ring 4px+, haptic feedback, large text 16px+
- **Best for**: Public services, healthcare, education, finance, government — universal
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ WCAG AAA | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `aria-*` complete, `focus-visible: 3–4px ring`, `@media (prefers-reduced-motion)`

### 15. Soft UI Evolution (Evolved Neumorphism)
- **Keywords**: evolved soft, modern, accessible neumorphism, hybrid, subtle depth
- **Colors**: Improved contrast pastels: Soft Blue #87CEEB, Soft Pink #FFB6C1, Soft Green #90EE90
- **Effects**: Softer shadows than flat, clearer than neumorphism, 200–300ms, WCAG AA+
- **Best for**: Modern enterprise, SaaS, health, wellness, professional hybrid
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ WCAG AA+ | **Mobile**: ✓ | **Conversion**: ✓

### 16. Data-Dense (Analytics/Dashboard)
- **Keywords**: information-dense, minimal decoration, data-forward, compact, precise
- **Colors**: Neutral base, semantic status colors (green/amber/red), blue for primary data
- **Effects**: Subtle hover highlights, tooltip reveals, compact spacing
- **Best for**: Financial dashboards, analytics, BI tools, admin panels
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ AA | **Mobile**: ◐ | **Conversion**: ◐

### 17. AI-Native UI
- **Keywords**: streaming text, thinking indicators, AI purple, minimal chrome, conversational
- **Colors**: Neutral base + AI Purple #6366F1, streaming gradient, subtle glass
- **Effects**: Typing indicators, streaming text animation, loading pulse, context fade
- **Best for**: AI assistants, chatbots, LLM interfaces, generative tools
- **Performance**: ✓ Good | **Accessibility**: ✓ AA | **Mobile**: ✓ | **Conversion**: ✓

### 18. Bento Box Grid
- **Keywords**: bento, grid, asymmetric cards, magazine layout, varied sizes, modular
- **Colors**: Card backgrounds vary, strong visual hierarchy, brand accent on key cards
- **Effects**: Card hover lift, staggered entrance animations
- **Best for**: Product showcases, feature highlights, portfolios, landing pages
- **Performance**: ✓ Good | **Accessibility**: ✓ AA | **Mobile**: ✓ | **Conversion**: ✓
- **CSS keys**: `display: grid`, `grid-template-areas`, varied `grid-column`/`grid-row` spans

### 19. Swiss Modernism 2.0
- **Keywords**: grid-strict, typography-first, editorial, monospace accents, functional, structured
- **Colors**: Black + white primary, single accent color, structured hierarchy
- **Effects**: Typography-driven, minimal decoration, structured spacing
- **Best for**: Magazines, editorial, documentation, design systems, blogs
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ AAA | **Mobile**: ✓ | **Conversion**: ◐

### 20. Cyberpunk UI
- **Keywords**: neon, matrix green, dark, HUD, glitch, sci-fi, chamfered corners
- **Colors**: Matrix Green #00FF00, Neon Cyan #00FFFF, Dark bg, Magenta accents
- **Effects**: Glitch animation, scan lines, neon glow, HUD overlays
- **Best for**: Gaming, cybersecurity, Web3, dark brand apps
- **Performance**: ✓ Good | **Accessibility**: ⚠ | **Mobile**: ◐ | **Conversion**: ◐

### 21. Liquid Glass (Apple-inspired)
- **Keywords**: morphing glass, fluid, iridescent, chromatic aberration, premium
- **Colors**: Vibrant iridescent, translucent, gradient fluidity, chromatic RGB shifts
- **Effects**: Morphing elements (SVG/CSS), fluid animations 400–600ms, dynamic blur
- **Best for**: Premium SaaS, luxury e-commerce, creative platforms, branding
- **Performance**: ⚠ Moderate | **Accessibility**: ⚠ Text contrast | **Mobile**: ◐ | **Conversion**: ✓
- **CSS keys**: SVG morphing paths, `backdrop-filter`, `filter: hue-rotate`, `blend-mode: screen`

### 22. Organic Biophilic
- **Keywords**: nature, organic shapes, earth tones, botanical, flowing, sustainable
- **Colors**: Earth Green #4A7C23, Warm Brown #8B6914, Sky Blue #87CEEB, Cream #F5F0E8
- **Effects**: Organic blob shapes, flowing curves, nature-inspired patterns
- **Best for**: Sustainability, wellness, agriculture, eco-brands, plant-based
- **Performance**: ✓ Good | **Accessibility**: ✓ AA | **Mobile**: ✓ | **Conversion**: ◐

### 23. Trust & Authority
- **Keywords**: professional, credential-focused, conservative, structured, safe
- **Colors**: Navy Blue #0F172A, Professional Blue, Gold accents, Clean White
- **Effects**: Minimal, clean, structured, trust badges prominent
- **Best for**: Legal, financial, government, professional services, B2B
- **Performance**: ⚡ Excellent | **Accessibility**: ✓ AAA | **Mobile**: ✓ | **Conversion**: ✓

---

## Style Compatibility by Framework

| Style | Tailwind | React/MUI | Framer | GSAP |
|-------|---------|-----------|--------|------|
| Minimalism | 10/10 | 9/10 | — | — |
| Glassmorphism | 9/10 | 8/10 | 9/10 | — |
| Dark Mode | 10/10 | 10/10 | — | — |
| Motion-Driven | 7/10 | 7/10 | 10/10 | 10/10 |
| Claymorphism | 8/10 | 8/10 | 9/10 | — |
| Vibrant & Block | 10/10 | 9/10 | 9/10 | — |
| Brutalism | 10/10 | 7/10 | — | — |
| Neumorphism | 8/10 | 7/10 | — | — |
| 3D/Hyperrealism | — | — | — | — Three.js/Babylon only |
| Aurora UI | 8/10 | 7/10 | 10/10 | 9/10 |

## AI Prompt Templates by Style

**Minimalism**: "Design a minimalist interface using white space, geometric layouts, sans-serif fonts, high contrast, grid-based structure. Avoid shadows and gradients. Focus on clarity."

**Glassmorphism**: "Create a glassmorphic interface with backdrop blur 15px, translucent overlays (rgba 15–30% opacity), vibrant background colors, subtle borders, layered depth."

**Dark Mode OLED**: "Create an OLED-optimized dark interface. Background #000000 or #121212, white text, neon accents (green/blue/gold/purple). Minimal glow effects, high contrast text."

**Glassmorphism**: "Frosted glass UI: backdrop-filter blur(15px), background rgba(255,255,255,0.15), 1px solid rgba(255,255,255,0.2) border, vibrant background, layered Z-depth."

**Claymorphism**: "Clay UI with soft 3D plastic feel: border-radius 20–24px, multi-layer shadows (inner + outer), pastel colors, inflated button press effect scale(0.96) on active."

**Brutalism**: "Brutalist design: pure primary colors only (red/blue/yellow/black/white), border-radius 0px, no transitions (instant), font-weight 700+, visible grid borders 2–4px."

**Vibrant Block**: "Energetic vibrant UI: bold block layouts, geometric shapes, 4–6 contrasting neon colors, large typography 32px+, animated CSS background patterns, 48px+ section gaps."

**Aurora UI**: "Aurora gradient mesh: radial-gradient blobs in midnight blue/purple/teal/rose, mix-blend-mode, subtle shimmer effect, fluid layered backgrounds, premium tech feel."
