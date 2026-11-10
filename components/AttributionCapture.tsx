"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { captureAttribution } from "@/lib/attribution";

/**
 * Captures ad/UTM params into first-party storage on landing and on every route
 * change. Rendered once, site-wide, in the root layout. Renders nothing.
 */
export function AttributionCapture() {
  const pathname = usePathname();
  useEffect(() => {
    captureAttribution();
  }, [pathname]);
  return null;
}
