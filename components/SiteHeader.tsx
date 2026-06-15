"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, ASSETS, type NavItem, type NavChild } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { SafeImage } from "@/components/SafeImage";
import { CtaLink } from "@/components/CtaLink";
import { NavDropdown } from "@/components/NavDropdown";

/**
 * Shared sticky header.
 * Nav: logo → Home · Product (Safety / Productivity) · Industries · Contact,
 * plus a primary "Request Demo" button. (Login removed from the marketing site.)
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

        <div className="hidden items-center gap-4 lg:flex">
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
            <CtaLink href="/demo" variant="primary" trackId="mobile_request_demo">
              Request Demo
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
