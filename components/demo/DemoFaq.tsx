"use client";

import { useState } from "react";
import { FAQ } from "@/lib/demoContent";
import { dataLayerPush } from "@/lib/analytics";
import { PhoneLink } from "@/components/demo/PhoneLink";

/**
 * Accessible FAQ accordion. Each row is a real button toggling a region, so it
 * is keyboard operable with a visible focus ring. The last answer's phone
 * number renders as a tracked tel: link. The FAQPage JSON-LD is emitted by the
 * page from the same FAQ data.
 */
export function DemoFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="mx-auto max-w-3xl divide-y divide-medium-grey/30 border-y border-medium-grey/30">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <dt>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => {
                  const next = isOpen ? null : i;
                  setOpen(next);
                  if (next !== null) dataLayerPush("demo_faq_open", { question: i });
                }}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-lg font-medium text-darker-grey">{item.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  className={`shrink-0 text-dozer-yellow transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </dt>
            <dd
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="pb-6 pr-8 text-dark-grey"
            >
              {i === FAQ.length - 1 ? (
                <>
                  Yes. Call us at{" "}
                  <PhoneLink location="faq" className="font-medium text-darker-grey underline underline-offset-2">
                    (707) 563-9898
                  </PhoneLink>
                  .
                </>
              ) : (
                item.a
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
