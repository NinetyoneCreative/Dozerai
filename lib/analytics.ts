"use client";

/**
 * Thin analytics layer. Vendor-agnostic: it pushes to GA4 (gtag) and/or
 * Plausible if present on the page, and always console-logs in dev so events
 * are verifiable without a live tag.
 *
 * Wire-up: set NEXT_PUBLIC_GA4_ID (and/or NEXT_PUBLIC_PLAUSIBLE_DOMAIN) and the
 * loader script in components/Analytics.tsx. Tag IDs are intentionally env-only
 * TODOs so no real account ships with the redesign.
 */

export type AnalyticsEvent =
  | "cta_click"
  | "demo_form_start"
  | "demo_form_submit"
  | "scroll_depth"
  | "video_play";

type Props = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: Props }) => void;
    dataLayer?: unknown[];
  }
}

export function track(event: AnalyticsEvent, props: Props = {}): void {
  if (typeof window === "undefined") return;

  // GA4
  if (typeof window.gtag === "function") {
    window.gtag("event", event, props);
  }
  // Plausible
  if (typeof window.plausible === "function") {
    window.plausible(event, { props });
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[analytics]", event, props);
  }
}
