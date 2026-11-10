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
  | "contact_form_start"
  | "contact_form_submit"
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

/**
 * Raw dataLayer push for interaction events (e.g. the /demo page's engagement
 * events). These are NOT Google Ads conversions and must never be wired as
 * such: the only conversion is the gtag "demo_form_submit" event in track().
 */
export function dataLayerPush(event: string, props: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...props });
  } catch {
    // storage/CSP edge cases: never throw from analytics
  }
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[dataLayer]", event, props);
  }
}
