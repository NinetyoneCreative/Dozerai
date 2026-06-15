"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, EXTERNAL, ASSETS } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { SafeImage } from "@/components/SafeImage";
import { CtaLink } from "@/components/CtaLink";
import { track } from "@/lib/analytics";

/**
 * Shared sticky header.
 * Nav: logo → Home · Product · Industries (dropdown) · Contact, plus Login
 * (beta app) and a primary "Request Demo" button.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [industriesOpen, setIndustriesOpen] = useState(false); // desktop dropdown
  const dropdownRef = useRef<HTMLLIElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Close menus on route change.
  useEffect(() => {
    setOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  // Close the desktop dropdown on outside click or Escape.
  useEffect(() => {
    if (!industriesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndustriesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [industriesOpen]);

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
            width={147}
            height={44}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/industries" ? (
              <li
                key={link.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-sm transition-colors hover:text-darker-grey ${
                    isActive(link.href) ? "font-medium text-darker-grey" : "text-dark-grey"
                  }`}
                  aria-haspopup="true"
                  aria-expanded={industriesOpen}
                  onClick={() => setIndustriesOpen((v) => !v)}
                >
                  {link.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {industriesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="w-60 overflow-hidden rounded-md border border-medium-grey/30 bg-white py-1 shadow-lg">
                      <li>
                        <Link
                          href="/industries"
                          className="block px-4 py-2 text-sm font-medium text-darker-grey hover:bg-dozer-white"
                        >
                          All industries
                        </Link>
                      </li>
                      <li aria-hidden="true">
                        <hr className="my-1 border-medium-grey/20" />
                      </li>
                      {INDUSTRIES.map((ind) => (
                        <li key={ind.slug}>
                          <Link
                            href={`/industries/${ind.slug}`}
                            className="block px-4 py-2 text-sm text-dark-grey hover:bg-dozer-white hover:text-darker-grey"
                          >
                            {ind.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors hover:text-darker-grey ${
                    isActive(link.href) ? "font-medium text-darker-grey" : "text-dark-grey"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
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
          className="inline-flex items-center justify-center rounded-md p-2 text-darker-grey lg:hidden"
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
        <div id="mobile-menu" className="border-t border-medium-grey/30 bg-dozer-white lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {NAV_LINKS.map((link) =>
              link.href === "/industries" ? (
                <li key={link.href}>
                  <Link
                    href="/industries"
                    className="block py-2 font-medium text-dark-grey hover:text-darker-grey"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                  <ul className="mb-1 ml-3 border-l border-medium-grey/30 pl-3">
                    {INDUSTRIES.map((ind) => (
                      <li key={ind.slug}>
                        <Link
                          href={`/industries/${ind.slug}`}
                          className="block py-1.5 text-sm text-dark-grey hover:text-darker-grey"
                          onClick={() => setOpen(false)}
                        >
                          {ind.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-dark-grey hover:text-darker-grey"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
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
