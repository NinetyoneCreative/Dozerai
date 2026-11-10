"use client";

import { useEffect, useId, useRef, useState } from "react";
import { HUBSPOT } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";
import { track, dataLayerPush } from "@/lib/analytics";
import { getStoredAttribution, UTM_KEYS } from "@/lib/attribution";
import { MeetingsEmbed, type Prefill } from "@/components/demo/MeetingsEmbed";

/**
 * The /demo form, with the instant-booking swap.
 *
 * HubSpot's v2 embed now renders the form inside a cross-origin iframe, so the
 * parent page cannot read or write its fields. Two consequences shape this:
 *
 *  - Hidden attribution fields (gclid, utm_*, industry_interest) are captured by
 *    HubSpot from the PAGE URL. We sync stored attribution into the URL before
 *    the form initializes, so a click that landed elsewhere still reaches these
 *    fields (when Mike adds them to the form; harmless if he has not).
 *  - The scheduler prefill is read from the onFormSubmitted(form, data) callback
 *    rather than from the DOM.
 *
 * On a successful submit we fire the existing "demo_form_submit" gtag event (the
 * only Google Ads conversion, preserved exactly, fired once) and swap the form
 * for the HubSpot Meetings scheduler.
 */
const SCRIPT_SRC = `https://js-${HUBSPOT.region}.hsforms.net/forms/embed/v2.js`;
let scriptPromise: Promise<void> | null = null;

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

const VALID_SLUGS = new Set(INDUSTRIES.map((i) => i.slug));

/**
 * Put any stored attribution that isn't already in the URL onto the URL, so the
 * HubSpot form can capture it as hidden fields. Never throws.
 */
function syncAttributionToUrl() {
  try {
    const attr = getStoredAttribution();
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const set = (k: string, v?: string) => {
      if (v && !params.get(k)) params.set(k, v);
    };
    set("gclid", attr.gclid);
    for (const k of UTM_KEYS) set(k, attr[k]);
    if (attr.industry_interest && VALID_SLUGS.has(attr.industry_interest)) {
      set("industry_interest", attr.industry_interest);
    }
    if (url.href !== window.location.href) {
      window.history.replaceState(window.history.state, "", url.href);
    }
  } catch {
    /* best-effort */
  }
}

/** Pull first/last/email out of HubSpot's onFormSubmitted data, any shape. */
function readPrefill(data: unknown): Prefill {
  const out: Prefill = {};
  try {
    const raw = (data as { submissionValues?: unknown })?.submissionValues;
    const map: Record<string, string> = {};
    if (Array.isArray(raw)) {
      for (const item of raw as { name: string; value: string }[]) map[item.name] = item.value;
    } else if (raw && typeof raw === "object") {
      Object.assign(map, raw as Record<string, string>);
    }
    if (map.firstname) out.firstName = map.firstname;
    if (map.lastname) out.lastName = map.lastname;
    if (map.email) out.email = map.email;
  } catch {
    /* no prefill available */
  }
  return out;
}

export function DemoBooking() {
  const rawId = useId();
  const targetId = `hs-form-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const root = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<Prefill>({});

  // demo_form_view once the card enters the viewport.
  useEffect(() => {
    const node = root.current;
    if (!node || typeof IntersectionObserver !== "function") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          dataLayerPush("demo_form_view");
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (submitted) return;
    let cancelled = false;
    syncAttributionToUrl();
    loadScript()
      .then(() => {
        if (cancelled || !window.hbspt) return;
        const host = document.getElementById(targetId);
        if (host) host.innerHTML = "";
        window.hbspt.forms.create({
          region: HUBSPOT.region,
          portalId: HUBSPOT.portalId,
          formId: HUBSPOT.formId,
          target: `#${targetId}`,
          onFormSubmitted: (_form: unknown, data: unknown) => {
            // The single Google Ads conversion signal. Fires exactly once.
            track("demo_form_submit");
            setBookingPrefill(readPrefill(data));
            setSubmitted(true);
            try {
              window.dispatchEvent(new Event("demo:submitted"));
            } catch {
              /* ignore */
            }
          },
        });
      })
      .catch(() => {
        const host = document.getElementById(targetId);
        if (host) {
          host.innerHTML =
            '<p class="text-sm text-dark-grey">The form did not load. Please call <a class="underline" href="tel:+17075639898">(707) 563-9898</a> or email <a class="underline" href="mailto:support@dozer.ai">support@dozer.ai</a> and we will get right back to you.</p>';
        }
      });
    return () => {
      cancelled = true;
    };
  }, [targetId, submitted]);

  return (
    <div
      id="demo-form"
      ref={root}
      className="scroll-mt-24 rounded-md border border-medium-grey/30 bg-dozer-white p-6 sm:p-8"
    >
      {submitted ? (
        <MeetingsEmbed prefill={bookingPrefill} />
      ) : (
        <>
          <h2 className="text-xl font-bold text-darker-grey">Tell us about your fleet</h2>
          <p className="mt-1.5 text-sm text-dark-grey">A few quick details and we&apos;ll handle the rest.</p>
          <div className="mt-6">
            <div id={targetId} className="min-h-[420px]">
              <p className="text-sm text-medium-grey">Loading form…</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-medium-grey">
            15 minutes. No obligation. Pick a time right after you submit.
          </p>
        </>
      )}
    </div>
  );
}
