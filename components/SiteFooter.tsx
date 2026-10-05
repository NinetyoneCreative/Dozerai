import Link from "next/link";
import { SafeImage } from "@/components/SafeImage";
import { FOOTER_GROUPS, FOOTER_BOILERPLATE, PRIMARY_CTA } from "@/content/nav";
import { ASSETS } from "@/lib/site";

/**
 * Dark site footer: brand, full nav, legal, and the required boilerplate line.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-deep text-dozer-white/80">
      <div className="mx-auto max-w-container px-5 pb-10 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          {/* Brand + boilerplate */}
          <div>
            <Link href="/" aria-label="Dozer AI home" className="inline-flex">
              <SafeImage src={ASSETS.logoHeader} alt="Dozer AI" width={140} height={42} className="h-10 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-dozer-white/70">
              {FOOTER_BOILERPLATE}
            </p>
            <div className="mt-6">
              <Link
                href={PRIMARY_CTA.href}
                className="inline-flex items-center justify-center rounded-md bg-dozer-yellow px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[rgb(230_154_12)]"
              >
                {PRIMARY_CTA.label}
              </Link>
            </div>
          </div>

          {/* Nav groups */}
          {FOOTER_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-dozer-white/50">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-dozer-white/75 transition-colors hover:text-dozer-yellow">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-dozer-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Dozer AI. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy-policy" className="hover:text-dozer-white/80">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-dozer-white/80">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
