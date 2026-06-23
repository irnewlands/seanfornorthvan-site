# Sean for North Vancouver — Campaign Website V2.1

Developer-friendly campaign website for Sean Alexander, designed to move the site away from Canva and into a maintainable GitHub + Cloudflare Pages workflow.

## Stack

- React
- Vite
- CSS
- Lucide icons
- Static assets in `/public/assets`

## V2.1 updates

- Fixed hero image cropping/oversizing issue by constraining the hero portrait height and using `object-fit`/`object-position`.
- Added campaign logo asset into the header and hero.
- Added stylized Sean Alexander signature mark in the footer.
- Updated colour palette to better match the approved Sean campaign graphics: dark navy, deep blue, olive green, muted gold, cyan, charcoal, and grey-blue accents.
- Added Google font imports for stronger campaign typography.
- Added uploaded Canva/SVG brand elements into `/public/assets` for future developer use.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Cloudflare Pages settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Deployment plan

1. Upload repo to GitHub.
2. Connect repo to Cloudflare Pages.
3. Deploy and review the `.pages.dev` preview URL.
4. Do not connect the GoDaddy domain until the preview site is approved.

## Brand assets included

- `sean-cnv-logo.svg`
- `sean-wordmark.svg`
- `sean-signature.svg`
- `sean-qr.svg`
- `report-banner.svg`
- `provincial-flag-banner.svg`
- Original website/rack-card SVGs
- Sean portrait and event graphics
