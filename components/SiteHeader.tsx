"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, EXTERNAL, ASSETS } from "@/lib/site";
import { SafeImage } from "@/components/SafeImage";
import { CtaLink } from "@/components/CtaLink";
import { track } from "@/lib/analytics";

/**
 * Shared sticky header. Nav structure matches the live site:
 * logo → Home · Cameras · Intelligence · Dashboards, plus Login (beta app)
 * and a primary "Request Demo" button.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-medium-grey/30 bg-dozer-white/90 backdrop-blur supports-[backdrop-filter]:bg-dozer-white/75">
      <nav
        className="mx-auto flex h-16 max-w-container items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center" aria-label="Dozer.ai home">
          <SafeImage
            src={ASSETS.logoHeader}
            alt="Dozer.ai"
            width={120}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-darker-grey ${
                  isActive(link.href)
                    ? "font-medium text-darker-grey"
                    : "text-dark-grey"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={EXTERNAL.login}
            className="text-sm text-dark-grey transition-colors hover:text-darker-grey"
            onClick={() => track("cta_click", { cta: "header_login" })}
          >
            Login
          </a>
          <CtaLink href="/demo" variant="primary" trackId="header_request_demo">
            Request Demo
          </CtaLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-darker-grey md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-medium-grey/30 bg-dozer-white md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-dark-grey hover:text-darker-grey"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-medium-grey/30 px-5 py-4">
            <a
              href={EXTERNAL.login}
              className="text-dark-grey hover:text-darker-grey"
              onClick={() => track("cta_click", { cta: "mobile_login" })}
            >
              Login
            </a>
            <CtaLink href="/demo" variant="primary" trackId="mobile_request_demo">
              Request Demo
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
