"use client";

import { useEffect, useId, useRef } from "react";
import { HUBSPOT } from "@/lib/site";
import { track, type AnalyticsEvent } from "@/lib/analytics";

interface HubSpotFormProps {
  /** Analytics events for this placement (start = first focus, submit = HubSpot success). */
  events: { start: AnalyticsEvent; submit: AnalyticsEvent };
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: Record<string, unknown>) => void;
      };
    };
  }
}

const SCRIPT_SRC = `https://js-${HUBSPOT.region}.hsforms.net/forms/embed/v2.js`;
let scriptPromise: Promise<void> | null = null;

/** Load HubSpot's embed script once per page, however many forms render. */
function loadScript(): Promise<void> {
  if (window.hbspt) return Promise.resolve();
  scriptPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("HubSpot forms script failed to load"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/**
 * The Dozer HubSpot form, embedded with HubSpot's own script (same form the
 * live site uses). HubSpot renders the fields, validation, consent and
 * thank-you message, and submissions land directly in the Dozer HubSpot portal.
 */
export function HubSpotForm({ events }: HubSpotFormProps) {
  const rawId = useId();
  const targetId = `hs-form-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const container = useRef<HTMLDivElement>(null);
  const failed = useRef(false);

  useEffect(() => {
    let cancelled = false;
    loadScript()
      .then(() => {
        if (cancelled || !window.hbspt || !container.current) return;
        container.current.innerHTML = "";
        window.hbspt.forms.create({
          region: HUBSPOT.region,
          portalId: HUBSPOT.portalId,
          formId: HUBSPOT.formId,
          target: `#${targetId}`,
          onFormReady: () => {
            container.current?.addEventListener("focusin", () => track(events.start), { once: true });
          },
          onFormSubmitted: () => track(events.submit),
        });
      })
      .catch(() => {
        failed.current = true;
        if (container.current) {
          container.current.innerHTML =
            '<p class="text-sm text-dark-grey">The form didn’t load. Please call <a class="underline" href="tel:+17075639898">(707) 563-9898</a> or email <a class="underline" href="mailto:support@dozer.ai">support@dozer.ai</a> and we’ll get right back to you.</p>';
        }
      });
    return () => {
      cancelled = true;
    };
  }, [targetId, events.start, events.submit]);

  return (
    <div ref={container} id={targetId} className="min-h-[420px]">
      <p className="text-sm text-medium-grey">Loading form…</p>
    </div>
  );
}
