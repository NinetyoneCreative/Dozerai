# Dozer.ai — Marketing Site (Redesign)

A production-ready marketing site for **Dozer.ai**, the AI depth-sensing camera
system mounted on heavy equipment for real-time safety alerting, situational
awareness, and productivity tracking.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. The brand look
(colors, fonts, styling) is matched to the live dozer.ai site; the structure and
conversion/SEO improvements are new.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out (all routes static)
```

**Deployment:** auto-deploys to Hostinger via GitHub Actions on every push to
`main`. See [DEPLOY.md](DEPLOY.md) for setup (FTP secrets, temp URL).

---

## Design tokens (extracted from the live site)

Pulled verbatim from the live Next.js CSS bundle
(`/_next/static/css/042fb76698679e6b.css`). Source of truth:
[`styles/tokens.css`](styles/tokens.css), mirrored into
[`tailwind.config.ts`](tailwind.config.ts).

### Colors

| Token (Tailwind class) | Value | Role |
|---|---|---|
| `dozer-yellow` | `rgb(253 172 19)` · `#FDAC13` | Primary accent / CTA |
| `dozer-white` | `rgb(244 247 249)` · `#F4F7F9` | Light page background |
| `darker-grey` | `rgb(77 82 96)` · `#4D5260` | Dark section bg / headings |
| `dark-grey` | `rgb(92 99 116)` · `#5C6374` | Body text / ink |
| `medium-grey` | `rgb(167 170 177)` · `#A7AAB1` | Borders / muted text |
| `black` / `white` | `#000` / `#fff` | Headings / surfaces |

### Fonts (self-hosted via `next/font/local`, downloaded from the live site)

- **Gotham** — headings + body. Weights: Book 400, Medium 500, Bold 700
  (`public/fonts/Gotham/*.otf`). Var: `--font-gotham`.
- **Share Tech Mono** — monospace accent / kicker labels
  (`public/fonts/ShareTechMono/*.ttf`). Var: `--font-share-tech-mono`.

### Layout

Container `max-width: 1440px`; radii `0.25rem` / `0.5rem` / pill; line-height `1.5`.

---

## Routes / Information architecture

| Route | File | Notes |
|---|---|---|
| `/` | [`app/page.tsx`](app/page.tsx) | Home — leads with AI perceptual intelligence positioning |
| `/product` | [`app/product/page.tsx`](app/product/page.tsx) | **The whole system + both applications, on one page.** System (eyes on site → data capture → pipeline → site intelligence → insights & actions), then a `#safety` section (available now) and a `#productivity` section (coming soon · 60–90 days). Absorbs the former `/cameras`, `/dashboards`, `/safety`, `/productivity` — all 301-redirect here via `public/.htaccess`. Suite content from [`lib/suites.ts`](lib/suites.ts) |
| `/industries` | [`app/industries/page.tsx`](app/industries/page.tsx) | Vertical funnel index (kept for SEO) |
| `/industries/[slug]` | [`app/industries/[slug]/page.tsx`](app/industries/[slug]/page.tsx) | Per-vertical sales funnel (heavy-civil, aggregates, demolition, mining-landfill) — content in [`lib/industries.ts`](lib/industries.ts) |
| `/demo` | [`app/demo/page.tsx`](app/demo/page.tsx) | Conversion page |
| `/contact` | [`app/contact/page.tsx`](app/contact/page.tsx) | Contact — form ([`ContactForm`](components/ContactForm.tsx)) + contact methods + testimonial + calendar fallback |
| `/privacy-policy` | [`app/privacy-policy/page.tsx`](app/privacy-policy/page.tsx) | Legal stub |
| `/terms-of-service` | [`app/terms-of-service/page.tsx`](app/terms-of-service/page.tsx) | Legal stub |

Shared shell: [`SiteHeader`](components/SiteHeader.tsx),
[`SiteFooter`](components/SiteFooter.tsx), [`CtaBand`](components/CtaBand.tsx),
[`Section`](components/Section.tsx) primitive — all wired in
[`app/layout.tsx`](app/layout.tsx).

---

## Where each conversion + SEO addition lives

| # | Addition | File(s) |
|---|---|---|
| 1 | **3+2 field demo form** w/ validation + success state | [`components/DemoForm.tsx`](components/DemoForm.tsx) |
| 2 | **"Book a 15-min intro"** + "what happens next" + calendar fallback | [`app/demo/page.tsx`](app/demo/page.tsx) |
| 3 | **Two-column demo page** (proof left / lean form right) | [`app/demo/page.tsx`](app/demo/page.tsx) |
| 4 | **Outcomes / ROI section** + "pays for itself" line | [`components/OutcomesSection.tsx`](components/OutcomesSection.tsx) |
| 5 | **Dark CTA band** on home + all product pages | [`components/CtaBand.tsx`](components/CtaBand.tsx) |
| 6 | **`#pricing` block** + risk reversal | [`components/PricingBlock.tsx`](components/PricingBlock.tsx) (home + demo) |
| 7 | **CTA ladder** (intro / watch demo / get pricing) | [`components/CtaLink.tsx`](components/CtaLink.tsx) + hero in [`app/page.tsx`](app/page.tsx) |
| 8 | **Near-miss video** on conversion path | home hero + [`app/demo/page.tsx`](app/demo/page.tsx) via [`components/SafeVideo.tsx`](components/SafeVideo.tsx) |
| 9 | **Social proof** (logo bar + testimonial) | [`components/ProofBar.tsx`](components/ProofBar.tsx), [`components/Testimonial.tsx`](components/Testimonial.tsx) |
| 10 | **Use-case grid** (4 verticals, anchor stubs) | [`components/UseCaseGrid.tsx`](components/UseCaseGrid.tsx) |
| 11 | **Footer social links** | [`components/SiteFooter.tsx`](components/SiteFooter.tsx) + `SOCIAL_LINKS` in [`lib/site.ts`](lib/site.ts) |
| 12 | **SEO** (unique meta/canonical/OG, keywords, sitemap, robots, JSON-LD) | [`lib/seo.ts`](lib/seo.ts), [`app/layout.tsx`](app/layout.tsx), [`app/sitemap.ts`](app/sitemap.ts), [`app/robots.ts`](app/robots.ts), [`components/JsonLd.tsx`](components/JsonLd.tsx) |
| 13 | **Analytics** (`track()` + GA4/Plausible loader, CTA/form/scroll events) | [`lib/analytics.ts`](lib/analytics.ts), [`components/Analytics.tsx`](components/Analytics.tsx) |

**Graceful asset degradation** (broken remote asset never breaks layout):
[`components/SafeImage.tsx`](components/SafeImage.tsx) and
[`components/SafeVideo.tsx`](components/SafeVideo.tsx) hide on error.

**Accessibility**: skip link, semantic landmarks, focus-visible ring,
`prefers-reduced-motion` honored ([`app/globals.css`](app/globals.css)), alt text,
ARIA on nav/forms.

---

## ⚠️ TODO / PLACEHOLDER — replace before launch

| Item | Where |
|---|---|
| **Demo form → CRM/scheduler** wiring (currently a simulated submit) | [`components/DemoForm.tsx`](components/DemoForm.tsx) `handleSubmit` |
| **Calendly / Chili Piper booking link** (`EXTERNAL.booking`) | [`lib/site.ts`](lib/site.ts) |
| **Real social URLs** (LinkedIn / YouTube / Instagram / Facebook — currently `#`) | `SOCIAL_LINKS` in [`lib/site.ts`](lib/site.ts) |
| **Real testimonial** (quote + name/title/company are placeholder) | [`components/Testimonial.tsx`](components/Testimonial.tsx) |
| **Real customer logos** (text marks are placeholder) | [`components/ProofBar.tsx`](components/ProofBar.tsx) |
| **Analytics tag id** (`NEXT_PUBLIC_GA4_ID` / `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`) | [`.env.example`](.env.example), [`components/Analytics.tsx`](components/Analytics.tsx) |
| **Privacy Policy / Terms** real content | [`app/privacy-policy/page.tsx`](app/privacy-policy/page.tsx), [`app/terms-of-service/page.tsx`](app/terms-of-service/page.tsx) |
| **Production domain** (`SITE.url`) — affects canonical/OG/sitemap | [`lib/site.ts`](lib/site.ts) |
| **Industry-page testimonials/stats** — testimonial is shared placeholder; add vertical-specific proof/quotes/metrics when available | [`lib/industries.ts`](lib/industries.ts), [`components/Testimonial.tsx`](components/Testimonial.tsx) |

Search the codebase for `TODO` and `PLACEHOLDER` to find every spot.

---

## Notes

- All routes prerender as static content; first-load JS ~87–102 kB.
- Remote brand assets (logo, videos, images) are referenced from `dozer.ai` and
  the public S3 bucket — whitelisted in [`next.config.mjs`](next.config.mjs).
- The homepage on the live site blocks bots; it was reconstructed from the other
  pages + the product spec.
