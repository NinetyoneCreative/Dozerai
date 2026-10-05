"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";

/**
 * Accessible FAQ accordion. Each row is a button that toggles a region; open
 * state is keyboard operable with a visible focus ring (inherited globally).
 * Content is always in the DOM (good for SEO and for the FAQPage JSON-LD that
 * the page renders alongside this).
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-medium-grey/30 border-y border-medium-grey/30">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <div key={item.q}>
            <dt>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
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
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="pb-6 pr-8 text-dark-grey"
            >
              {item.a}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
