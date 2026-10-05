"use client";

import { useEffect, useId, useRef } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/**
 * Embeds a HubSpot form via HubSpot's v2 embed script.
 *
 * The site is a static export, so there's no server to POST to. HubSpot hosts
 * the form and the submission. We load the embed script once (shared across all
 * instances) and call `hbspt.forms.create()` into a container with a unique id,
 * so multiple forms can coexist on a page without colliding.
 *
 * Defaults point at the Dozer HubSpot portal/form; pass props to override.
 */
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

const HS_SCRIPT_SRC = "https://js-na2.hsforms.net/forms/embed/v2.js";

interface HubspotFormProps {
  portalId?: string;
  formId?: string;
  region?: string;
  /** Analytics event fired once HubSpot confirms the submission. */
  trackId?: AnalyticsEvent;
  /** Extra work to run on successful submit (e.g. serve a gated PDF). */
  onSubmitted?: () => void;
}

export function HubspotForm({
  portalId = "48464019",
  formId = "0ca0b5c9-e75d-4757-9d38-46bf0374a24e",
  region = "na2",
  trackId,
  onSubmitted,
}: HubspotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // useId() yields something like ":r0:"; strip colons so it's a valid id/selector.
  const targetId = `hs-form-${useId().replace(/:/g, "")}`;

  // Keep the latest onSubmitted without re-initializing the embedded form.
  const onSubmittedRef = useRef(onSubmitted);
  onSubmittedRef.current = onSubmitted;

  useEffect(() => {
    let cancelled = false;

    function createForm() {
      if (cancelled || !window.hbspt || !containerRef.current) return;
      // Clear first so a re-mount (e.g. React strict mode) doesn't double-render.
      containerRef.current.innerHTML = "";
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
        onFormSubmitted: () => {
          if (trackId) track(trackId);
          onSubmittedRef.current?.();
        },
      });
    }

    if (window.hbspt) {
      createForm();
      return () => {
        cancelled = true;
      };
    }

    // Load the embed script once; reuse it if another form already added it.
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${HS_SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = HS_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", createForm);
    return () => {
      cancelled = true;
      script?.removeEventListener("load", createForm);
    };
  }, [portalId, formId, region, targetId, trackId]);

  return (
    <div
      id={targetId}
      ref={containerRef}
      // Reserve a little height so the layout doesn't jump before the form loads.
      className="min-h-[280px]"
    />
  );
}
