# Dozer AI marketing site

Product-first marketing site for Dozer AI. Next.js App Router, TypeScript,
Tailwind CSS, static export (`output: "export"`), deployed on Netlify.

## Local dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

The build emits a self-contained `out/` folder of static HTML/CSS/JS. There is
no server runtime: every route is static or SSG.

> Note: on OneDrive, do not run `npm run build` while `npm run dev` is running.
> The production build overwrites `.next` and corrupts the dev server. Stop dev,
> `rm -rf .next`, then build.

## Where content lives

All copy and data are typed files under `/content` (no CMS in phase 1, so this
can move to a CMS later without touching pages):

| File | Powers |
| --- | --- |
| `content/home.ts` | Homepage sections (pillars, suites, steps, proof, comparison, pilot band, tour URL) |
| `content/product.ts` | /product and the two suite pages |
| `content/hardware.ts` | The three hardware SKUs (lineup + detail + spec tables) |
| `content/platform.ts` | /platform (Command Center) |
| `content/industries.ts` | The six industry trades (one shared template) |
| `content/pilot.ts` | /pilot |
| `content/company.ts` | /company |
| `content/faq.ts` | Homepage FAQ (also feeds FAQPage JSON-LD) |
| `content/trust.ts` | Trust-bar customer logos |
| `content/nav.ts` | Header and footer navigation |
| `content/assets.ts` | The image slot manifest (see below) |

Copy rules live in the brief: no em dashes, no price, no competitor names, both
suites carry equal weight and are live today, "Dozer AI" on first mention then
"Dozer".

## How to drop an asset into a slot

Every image is a named slot in `content/assets.ts`, rendered by
`components/AssetSlot.tsx`. Until a real file is set, the slot shows a labeled
placeholder at the exact pixel size (zero layout shift). See `ASSETS.md` for the
full shot list.

1. Put the file in `/public` (e.g. `/public/hardware/camera.png`).
2. In `content/assets.ts`, set `src` on that slot for an image, or `video`
   (plus an optional `poster`) for a clip. Example:

   ```ts
   hardwareCamera: {
     id: "hardware-camera",
     bucket: "hardware",
     width: 600,
     height: 600,
     media: "image",
     src: "/hardware/camera.png",   // <- add this line
     alt: "...",
     location: "...",
   },
   ```

No layout code changes. Keep the real asset at (or above) the declared size.

## Forms

Lead capture uses an embedded HubSpot form (`components/HubspotForm.tsx`), used
on `/demo` and behind the hardware spec-sheet gate (`components/SpecSheetGate.tsx`).
The HubSpot portal and form IDs are configured as defaults in
`components/HubspotForm.tsx`. Spec-sheet PDFs live in `/public/spec-sheets`
(placeholders for now).

## Environment variables

Analytics is off until a tag id is set (see `components/Analytics.tsx`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA4_ID` | GA4 measurement id (e.g. `G-XXXXXXX`). Optional. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain (e.g. `dozer.ai`). Optional. |

Set either (or both) in Netlify's environment to enable analytics. Until then,
`track()` still console-logs events in dev.

## Deploy

Netlify: build command `npm run build`, publish directory `out`
(see `netlify.toml`). Redirects for legacy routes are in `public/_redirects`.

## Design system

Tokens are in `styles/tokens.css` and mirrored in `tailwind.config.ts`. Fonts
are self-hosted (Gotham + Share Tech Mono) and isolated in `app/fonts.ts`, so a
font swap is a one-file change.
