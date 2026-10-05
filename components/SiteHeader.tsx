"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, PRIMARY_CTA, type NavItem } from "@/content/nav";
import { SafeImage } from "@/components/SafeImage";
import { CtaLink } from "@/components/CtaLink";
import { NavDropdown } from "@/components/NavDropdown";
import { ASSETS } from "@/lib/site";

/**
 * Sticky primary header. Transparent over the dark homepage hero, then solid
 * white once the user scrolls (and always solid on every other route). Nav:
 * Product, Hardware, Platform, Industries, Company, plus one primary CTA,
 * "Book a walkthrough".
 *
 * The homepage hero pulls itself up under this header (negative top margin) so
 * the transparent bar overlays the dark hero. See HomeHero.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile menu
  const [scrolled, setScrolled] = useState(false);

  // Only the homepage starts transparent (dark hero behind it).
  const transparentCapable = pathname === "/";
  const solid = scrolled || !transparentCapable || open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-medium-grey/30 bg-dozer-white/90 backdrop-blur supports-[backdrop-filter]:bg-dozer-white/75"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-container items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center" aria-label="Dozer AI home">
          <SafeImage
            src={ASSETS.logoHeader}
            alt="Dozer AI"
            width={147}
            height={44}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {PRIMARY_NAV.map((item: NavItem) =>
            item.children ? (
              <NavDropdown
                key={item.href}
                label={item.label}
                active={isActive(item.href)}
                items={item.children}
                onDark={!solid}
              />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    solid
                      ? isActive(item.href)
                        ? "font-medium text-darker-grey"
                        : "text-dark-grey hover:text-darker-grey"
                      : "text-white/85 hover:text-white"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <CtaLink href={PRIMARY_CTA.href} variant="primary" trackId="header_walkthrough">
            {PRIMARY_CTA.label}
          </CtaLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
            solid ? "text-darker-grey" : "text-white"
          }`}
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

      {/* Mobile menu (always solid) */}
      {open && (
        <div id="mobile-menu" className="border-t border-medium-grey/30 bg-dozer-white lg:hidden">
          <ul className="flex flex-col px-5 py-3">
            {PRIMARY_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 font-medium text-dark-grey hover:text-darker-grey"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-1 ml-3 border-l border-medium-grey/30 pl-3">
                    {item.children
                      .filter((c) => c.href !== item.href)
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
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-medium-grey/30 px-5 py-4">
            <CtaLink href={PRIMARY_CTA.href} variant="primary" trackId="mobile_walkthrough">
              {PRIMARY_CTA.label}
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
