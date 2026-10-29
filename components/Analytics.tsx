"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Loads the Google tag (Google Ads, plus GA4 when configured) and Plausible
 * if configured, and tracks scroll depth at 25/50/75/100% on every route.
 *
 * The Google Ads tag is always on. Optional extras via env vars:
 *   NEXT_PUBLIC_GA4_ID=G-XXXXXXX        (shares the same gtag.js load)
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=dozer.ai
 */
const GOOGLE_ADS_ID = "AW-18533381103";
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
/** Every Google tag id to configure; gtag.js loads once with the first. */
const GOOGLE_TAG_IDS = [GOOGLE_ADS_ID, GA4_ID].filter(Boolean) as string[];
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export function Analytics() {
  const pathname = usePathname();
  const seen = useRef<Set<number>>(new Set());

  // Reset scroll-depth milestones on navigation.
  useEffect(() => {
    seen.current = new Set();
  }, [pathname]);

  useEffect(() => {
    const milestones = [25, 50, 75, 100];
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      if (scrollable <= 0) return;
      const pct = Math.round((el.scrollTop / scrollable) * 100);
      for (const m of milestones) {
        if (pct >= m && !seen.current.has(m)) {
          seen.current.add(m);
          track("scroll_depth", { depth: m, path: pathname });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_IDS[0]}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${GOOGLE_TAG_IDS.map((id) => `gtag('config','${id}');`).join("")}`}
      </Script>
      {PLAUSIBLE_DOMAIN && (
        <Script
          defer
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
