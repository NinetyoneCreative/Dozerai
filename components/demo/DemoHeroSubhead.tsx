"use client";

import { useEffect, useState } from "react";
import { getIndustry } from "@/lib/industries";

/**
 * Hero subhead for /demo. Defaults to the provided copy, and when the page is
 * loaded with a valid ?industry=<slug> it swaps in that trade's line from the
 * existing industry data. Invalid or missing values keep the default. Read
 * client-side (query params are not known at static build time); never throws.
 */
export function DemoHeroSubhead({ defaultText }: { defaultText: string }) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    try {
      const slug = new URLSearchParams(window.location.search).get("industry");
      if (!slug) return;
      const industry = getIndustry(slug);
      if (industry?.heroSub) setText(industry.heroSub);
    } catch {
      /* keep default */
    }
  }, []);

  return <p className="mt-5 max-w-xl text-lg text-dark-grey">{text}</p>;
}
