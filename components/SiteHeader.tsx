"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, ASSETS, EXTERNAL, CONTACT, type NavItem, type NavChild } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { SafeImage } from "@/components/SafeImage";
import { CtaLink } from "@/components/CtaLink";
import { NavDropdown } from "@/components/NavDropdown";
import { dataLayerPush } from "@/lib/analytics";

/** Simple phone handset glyph for the /demo click-to-call. */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z" />
    </svg>
  );
}

/**
 * Shared sticky header.
 * Nav: logo → Home · Product (Safety / Productivity) · Industries · Contact,
 * plus a Login button (customer app) and the primary "Request Demo" button.
 * On /demo it collapses to logo + click-to-call (see the early return).
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  // Resolve dropdown children: Product is static; Industries is built from data.
  const childrenFor = (item: NavItem): NavChild[] | undefined => {
    if (item.children) return item.children;
    if (item.href === "/industries") {
      return [
        { label: "All industries", href: "/industries" },
        ...INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
      ];
    }
    return undefined;
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Stripped-down header on the /demo conversion page: logo + click-to-call only.
  // No nav and no "Request Demo" button, since the visitor is already here.
  // (trailingSlash is on, so the path can be "/demo" or "/demo/".)
  if (pathname.replace(/\/$/, "") === "/demo") {
    const onPhone = () => dataLayerPush("demo_phone_click", { location: "header" });
    return (
      <header className="sticky top-0 z-50 border-b border-medium-grey/30 bg-dozer-white/90 backdrop-blur supports-[backdrop-filter]:bg-dozer-white/75">
        <nav
          className="mx-auto flex h-20 max-w-container items-center justify-between px-5 sm:px-8"
          aria-label="Primary"
        >
          <Link href="/" className="flex items-center" aria-label="Dozer AI home">
            <SafeImage src={ASSETS.logoHeader} alt="Dozer AI" width={147} height={44} priority className="h-11 w-auto" />
          </Link>
          {/* Desktop: full phone text; mobile: icon button */}
          <a
            href={`tel:${CONTACT.phoneE164}`}
            onClick={onPhone}
            className="hidden items-center gap-2 rounded-md border border-medium-grey/70 px-4 py-2 text-sm font-medium text-darker-grey transition-colors hover:border-darker-grey hover:bg-white sm:inline-flex"
          >
            <PhoneIcon />
            {CONTACT.phone}
          </a>
          <a
            href={`tel:${CONTACT.phoneE164}`}
            onClick={onPhone}
            aria-label="Call Dozer AI"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-medium-grey/70 text-darker-grey transition-colors hover:border-darker-grey hover:bg-white sm:hidden"
          >
            <PhoneIcon />
          </a>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-medium-grey/30 bg-dozer-white/90 backdrop-blur supports-[backdrop-filter]:bg-dozer-white/75">
      <nav
        className="mx-auto flex h-20 max-w-container items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center" aria-label="Dozer.ai home">
          <SafeImage
            src={ASSETS.logoHeader}
            alt="Dozer.ai"
            width={147}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((item) => {
            const children = childrenFor(item);
            return children ? (
              <NavDropdown
                key={item.href}
                label={item.label}
                active={isActive(item.href)}
                items={children}
              />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors hover:text-darker-grey ${
                    isActive(item.href) ? "font-medium text-darker-grey" : "text-dark-grey"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink
            href={EXTERNAL.login}
            external
            variant="secondary"
            trackId="header_login"
            className="bg-white px-5"
          >
            Login
          </CtaLink>
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
            {NAV_LINKS.map((item) => {
              const children = childrenFor(item);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 font-medium text-dark-grey hover:text-darker-grey"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {children && (
                    <ul className="mb-1 ml-3 border-l border-medium-grey/30 pl-3">
                      {children
                        .filter((c) => c.href !== item.href) // drop duplicate "overview" row
                        .map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block py-1.5 text-sm text-dark-grey hover:text-darker-grey"
                              onClick={() => setOpen(false)}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 border-t border-medium-grey/30 px-5 py-4">
            <CtaLink href={EXTERNAL.login} external variant="secondary" trackId="mobile_login">
              Login
            </CtaLink>
            <CtaLink href="/demo" variant="primary" trackId="mobile_request_demo">
              Request Demo
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
