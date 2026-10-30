import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS, ASSETS, SITE, EXTERNAL, CONTACT } from "@/lib/site";
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
              {(NAV_LINKS.find((l) => l.href === "/product")?.children ?? []).map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-dark-grey hover:text-darker-grey">
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-dark-grey hover:text-darker-grey">
                  Contact
                </Link>
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
                <a
                  href={EXTERNAL.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-grey hover:text-darker-grey"
                >
                  Book a 15-min intro
                </a>
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
                <a href={`tel:${CONTACT.phoneE164}`} className="text-dark-grey hover:text-darker-grey">
                  {CONTACT.phone}
                </a>
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
