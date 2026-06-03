# Deployment — Hostinger via GitHub Actions

This site is a **Next.js static export**. On every push to `main`, GitHub
Actions builds it and uploads the `out/` folder to Hostinger over FTP(S).
There is **no build step on Hostinger** — it just serves the uploaded files.

Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

```
push to main ──▶ GitHub Actions ──▶ npm ci && npm run build ──▶ out/
                                          │
                                          └─▶ FTP upload out/ ──▶ Hostinger web root ──▶ live URL
```

---

## One-time setup

### 1. Get your Hostinger FTP credentials
hPanel → **Files → FTP Accounts**. Note (or create) an FTP account:
- **FTP hostname** (e.g. `ftp.yourdomain.com` or an IP / `files.000webhost`-style host)
- **FTP username**
- **FTP password**
- **Web root path** for this site — the folder the temp URL serves from
  (commonly `/public_html/`, but for a subdomain/temp domain it may be
  `/domains/<temp-domain>/public_html/`). **It must end with a slash.**

### 2. Add them as GitHub repository secrets
GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**.
Create these four:

| Secret name | Value | Notes |
|---|---|---|
| `FTP_SERVER` | FTP hostname | no `ftp://` prefix |
| `FTP_USERNAME` | FTP username | |
| `FTP_PASSWORD` | FTP password | |
| `FTP_SERVER_DIR` | web root path | **must end in `/`**, e.g. `/public_html/` |

### 3. Create the fresh temp URL (Hostinger)
hPanel → **Websites → Add Website** (or your plan's "Create" flow) → choose the
**temporary/preview domain** option. Note the web-root folder it gives you and
make sure `FTP_SERVER_DIR` points at it.

> The web root must be the folder the FTP upload targets. The upload places
> `index.html` (and `.htaccess`) directly there, which is what makes the URL
> resolve instead of 403'ing.

### 4. Trigger the first deploy
Either push any commit to `main`, or run it manually:
GitHub repo → **Actions → "Build & Deploy to Hostinger" → Run workflow**.

Watch the run under the **Actions** tab. Green check = deployed. Reload the
temp URL.

---

## Day-to-day
Just commit and push to `main` — the site rebuilds and redeploys automatically.
Nothing to run by hand.

## Troubleshooting
- **Build fails** in Actions → read the failing step's log (usually a TS/lint error).
- **FTP step fails (auth)** → re-check the four secrets; try `protocol: ftp`
  instead of `ftps` in the workflow if your account blocks FTPS.
- **Still 403 / wrong files** → `FTP_SERVER_DIR` isn't the actual web root.
  Confirm the temp URL's document root in hPanel and match it exactly (trailing `/`).
- **Old pages linger** → the FTP action syncs incrementally; deleted files aren't
  removed by default. Add `dangerous-clean-slate: true` to the deploy step to wipe
  the remote dir first (only if that dir is dedicated to this site).

## Notes
- Static export means no server runtime: no API routes, server actions, or ISR.
  All current routes are static/SSG, so this is fine.
- `next/image` runs unoptimized (no optimization server); brand assets are remote
  and load directly. See [`next.config.mjs`](next.config.mjs).
- `public/.htaccess` is bundled into `out/` for clean URLs, the 404 page, and
  asset caching.
