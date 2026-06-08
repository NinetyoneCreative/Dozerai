import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, EXTERNAL, ASSETS, SITE } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { SafeImage } from "@/components/SafeImage";

/** Minimal inline icons so we don't pull an icon library. */
function SocialIcon({ name }: { name: string }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true as const };
  switch (name) {
    case "LinkedIn":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12c.5-1.88.5-5.8.5-5.8s0-3.92-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6 4.39 10.98 10.13 11.88v-8.4H7.08v-3.48h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.48h-2.8v8.4C19.61 23.05 24 18.07 24 12.07z" />
        </svg>
      );
    default:
      return null;
  }
}

/** Shared site footer: tagline, nav, social links, legal, vehicles image. */
export function SiteFooter() {
  return (
    <footer className="border-t border-medium-grey/30 bg-white">
      <div className="mx-auto max-w-container px-5 pb-8 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand + tagline */}
          <div>
            <SafeImage
              src={ASSETS.logoFooter}
              alt="Dozer.ai"
              width={130}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm text-dark-grey">{SITE.tagline}</p>
            <ul className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.label}>
                  {/* TODO: replace "#" with the real social URL before launch */}
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-medium-grey/40 text-dark-grey transition-colors hover:border-dozer-yellow hover:text-darker-grey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon name={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product nav */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-medium text-darker-grey">Product</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-grey hover:text-darker-grey">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={EXTERNAL.login} className="text-dark-grey hover:text-darker-grey">
                  Login
                </a>
              </li>
            </ul>
          </nav>

          {/* Industries */}
          <nav aria-label="Industries">
            <h2 className="text-sm font-medium text-darker-grey">Industries</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {INDUSTRIES.map((ind) => (
                <li key={ind.slug}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-dark-grey hover:text-darker-grey"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company / CTA */}
          <div>
            <h2 className="text-sm font-medium text-darker-grey">Get started</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/demo" className="text-dark-grey hover:text-darker-grey">
                  Book a 15-min intro
                </Link>
              </li>
              <li>
                <Link href="/demo#pricing" className="text-dark-grey hover:text-darker-grey">
                  Get pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-grey hover:text-darker-grey">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-dark-grey hover:text-darker-grey">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-dark-grey hover:text-darker-grey">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-medium-grey/30 pt-6 text-xs text-medium-grey sm:flex-row">
          <p>© {new Date().getFullYear()} Dozer.ai. All rights reserved.</p>
          <p>Heavy-equipment safety cameras &amp; proximity detection.</p>
        </div>
      </div>
    </footer>
  );
}
