"use client";

import { type ReactNode } from "react";
import { CONTACT } from "@/lib/site";
import { dataLayerPush } from "@/lib/analytics";

/**
 * tel: link for /demo that records where it was tapped. Defaults to showing the
 * phone number; pass children to wrap other text.
 */
export function PhoneLink({
  location,
  children,
  className = "",
}: {
  location: "header" | "scheduler" | "faq" | "final-cta";
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={`tel:${CONTACT.phoneE164}`}
      onClick={() => dataLayerPush("demo_phone_click", { location })}
      className={className}
    >
      {children ?? CONTACT.phone}
    </a>
  );
}
