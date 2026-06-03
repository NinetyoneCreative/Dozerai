"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { track } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-3 disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Primary brand CTA — dozer-yellow on dark text
  primary: "bg-dozer-yellow text-black hover:bg-[rgb(230_154_12)]",
  // Secondary — outlined, for "watch a demo"
  secondary:
    "border border-medium-grey/70 text-darker-grey hover:border-darker-grey hover:bg-white",
  // Tertiary text link with underline affordance
  ghost: "text-dark-grey underline-offset-4 hover:text-darker-grey hover:underline",
  // For use on dark backgrounds
  dark: "border border-white/30 text-white hover:bg-white/10",
};

interface CtaLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Analytics label so we can attribute conversions to a specific CTA. */
  trackId: string;
  className?: string;
  external?: boolean;
}

/**
 * Conversion CTA. Every CTA on the site routes through this so clicks are
 * tracked consistently (cta_click) — that's what makes lift measurable.
 */
export function CtaLink({
  href,
  children,
  variant = "primary",
  trackId,
  className = "",
  external = false,
}: CtaLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const onClick = () => track("cta_click", { cta: trackId, href });

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}
