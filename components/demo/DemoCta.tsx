"use client";

import { type ReactNode } from "react";
import { dataLayerPush } from "@/lib/analytics";

/** Smooth-scroll to the form and move focus to its first field. */
export function scrollToDemoForm(): void {
  const el = document.getElementById("demo-form");
  if (!el) return;
  const reduce =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.setTimeout(
    () => {
      // Inline field if present; otherwise the HubSpot iframe, so keyboard users
      // still land on the form region (the form renders in a cross-origin iframe).
      const field = el.querySelector<HTMLElement>(
        "input:not([type=hidden]), select, textarea, iframe, button",
      );
      field?.focus({ preventScroll: true });
    },
    reduce ? 0 : 450,
  );
}

interface DemoCtaProps {
  /** Module id this CTA sits in, for the demo_cta_click event. */
  location: string;
  children: ReactNode;
  variant?: "primary" | "link";
  className?: string;
}

/**
 * Every scroll-to-form CTA on /demo. Pushes demo_cta_click with its location,
 * then scrolls to and focuses the form. Not a Google Ads conversion.
 */
export function DemoCta({ location, children, variant = "primary", className = "" }: DemoCtaProps) {
  const base =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 rounded-md bg-dozer-yellow px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[rgb(230_154_12)]"
      : "inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline";
  return (
    <button
      type="button"
      onClick={() => {
        dataLayerPush("demo_cta_click", { location });
        scrollToDemoForm();
      }}
      className={`${base} ${className}`}
    >
      {children}
    </button>
  );
}
