"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

/**
 * Loads the analytics vendor (GA4 and/or Plausible) IF a tag id is configured,
 * and tracks scroll depth at 25/50/75/100% on every route.
 *
 * TODO before launch: set one (or both) of these env vars to go live, 
 *   NEXT_PUBLIC_GA4_ID=G-XXXXXXX
 *   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=dozer.ai
 * Until then nothing loads, but track() still console-logs in dev.
 */
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
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
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');`}
          </Script>
        </>
      )}
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
