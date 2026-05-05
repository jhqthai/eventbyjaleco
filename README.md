# Event by Jaleco

A boutique wedding planning site built with Next.js 14, TypeScript, and Tailwind CSS. Static export — no server required.

## Design

- **Style**: Soft UI / Neumorphism-lite with editorial typography
- **Palette**: Warm pastel white with champagne gold and blush rose accents
- **Typography**: Cormorant Garamond (display) · Great Vibes (script) · Raleway (body)

## Stack

- Next.js 14 (App Router) with `output: "export"`
- TypeScript
- Tailwind CSS
- `next/font` for self-hosted Google Fonts (Cormorant Garamond, Inter)

## Sections

- Hero
- Studio statement
- Selected work (with 12 individual destination pages under `/work/[slug]`)
- Pull quote
- Press wall
- Inquire band
- About / team
- Press
- Inquire (contact form)
- Journal (placeholder, currently `noindex`)

## Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Outputs a static site to `out/`. Deploy that folder to any static host (Netlify, Vercel static, Cloudflare Pages, S3 + CloudFront, etc.).

## SEO

The site ships with a comprehensive SEO layer (full metadata, JSON-LD, sitemap, robots, OG image, favicons, and analytics placeholders). See [`research/03-seo-strategy.md`](research/03-seo-strategy.md) for the full strategy and maintenance notes.

### Environment variables

Copy [`.env.example`](.env.example) to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 measurement ID. When set, the GA4 tag is injected into every page. When empty, no analytics script is rendered. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification token. When set, a `<meta name="google-site-verification" ...>` tag is injected into the document head. |

Both are optional and safe to leave blank in development.

### What gets generated at build

| Path in `out/` | Source |
| --- | --- |
| `out/sitemap.xml` | [`app/sitemap.ts`](app/sitemap.ts) |
| `out/robots.txt` | [`app/robots.ts`](app/robots.ts) |
| `out/opengraph-image.png` | [`app/opengraph-image.tsx`](app/opengraph-image.tsx) |
| `out/icon.png` (favicon) | [`app/icon.tsx`](app/icon.tsx) |
| `out/apple-icon.png` | [`app/apple-icon.tsx`](app/apple-icon.tsx) |

### Post-launch off-site checklist

Things to do once the site is live (not handled by code):

1. **Google Business Profile** — claim/verify the Surry Hills NSW address. Single biggest local SEO lever.
2. **Google Search Console** — add `https://eventbyjaleco.com`, verify, submit `sitemap.xml`.
3. **Bing Webmaster Tools** — same as above.
4. **Pinterest business account** — verify the domain. Wedding industry searches Pinterest heavily.
5. **Instagram bio link** — point to `https://eventbyjaleco.com`.
6. **Real press URLs** — replace the `#` placeholders in [`app/lib/press.ts`](app/lib/press.ts) with the actual article URLs once they exist.
