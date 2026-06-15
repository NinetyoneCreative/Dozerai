# Deployment — Netlify

This site is a **Next.js static export** hosted on **Netlify**. Netlify builds
straight from the GitHub repo on every push to `main` — no FTP, no secrets.

Config: [`netlify.toml`](netlify.toml)

```
push to main ──▶ Netlify ──▶ npm run build ──▶ out/ ──▶ live (CDN)
                                  │
                                  └─▶ scans out/*.html for forms ──▶ Netlify Forms
```

---

## One-time setup

1. **Connect the repo:** app.netlify.com → **Add new site → Import an existing project → GitHub** → pick `NinetyoneCreative/Dozerai`.
2. Netlify reads [`netlify.toml`](netlify.toml) automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
3. Click **Deploy**. Every push to `main` redeploys automatically.
4. (Optional) Add your custom domain under **Site settings → Domains**.

## Environment variables (optional)
Set under **Site settings → Environment variables** if/when you go live with analytics:
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`

## Forms
The Contact and Demo forms use **Netlify Forms** (no backend needed):
- Each `<form>` carries `data-netlify="true"`, a hidden `form-name`, and a honeypot.
- Netlify detects them in the built HTML and captures submissions.
- View entries under **Forms** in the Netlify dashboard; configure email/Slack
  notifications there. Form names: `contact`, `demo`.

> Forms only work on Netlify (Netlify intercepts the POST at its edge). They
> can't be tested on `localhost`.

## Redirects
Old routes consolidated onto `/product` are 301'd via [`public/_redirects`](public/_redirects)
(Cameras, Dashboards, Safety, Productivity, Intelligence → `/product`).

## Notes
- Static export: no server runtime (no API routes / SSR / ISR). All routes are static/SSG.
- `next/image` runs unoptimized; brand assets are remote. See [`next.config.mjs`](next.config.mjs).
- `public/.htaccess` is harmless on Netlify (ignored); kept only as an Apache fallback.
