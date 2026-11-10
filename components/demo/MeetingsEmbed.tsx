"use client";

import { useEffect, useRef } from "react";
import { CONTACT } from "@/lib/site";
import { dataLayerPush } from "@/lib/analytics";
import { PhoneLink } from "@/components/demo/PhoneLink";

/**
 * HubSpot Meetings scheduler, shown in place of the form after a successful
 * submit. The meeting URL comes from NEXT_PUBLIC_HUBSPOT_MEETINGS_URL (Mike
 * supplies it). If it is missing we show a simple thank-you so the page never
 * breaks. Prefills first name, last name and email only.
 */
const MEETINGS_URL = process.env.NEXT_PUBLIC_HUBSPOT_MEETINGS_URL;
const EMBED_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbedCode/static/MeetingsEmbedCode.js";

export interface Prefill {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export function MeetingsEmbed({ prefill }: { prefill: Prefill }) {
  const host = useRef<HTMLDivElement>(null);

  // Fire the "scheduler shown" event once.
  useEffect(() => {
    dataLayerPush("demo_meeting_shown");
  }, []);

  useEffect(() => {
    if (!MEETINGS_URL || !host.current) return;
    let url: string;
    try {
      const u = new URL(MEETINGS_URL);
      u.searchParams.set("embed", "true");
      if (prefill.firstName) u.searchParams.set("firstName", prefill.firstName);
      if (prefill.lastName) u.searchParams.set("lastName", prefill.lastName);
      if (prefill.email) u.searchParams.set("email", prefill.email);
      url = u.toString();
    } catch {
      return;
    }

    host.current.innerHTML = "";
    const container = document.createElement("div");
    container.className = "meetings-iframe-container";
    container.setAttribute("data-src", url);
    host.current.appendChild(container);

    // Re-add the embed script so it scans and mounts the new container.
    document.querySelector(`script[src="${EMBED_SCRIPT}"]`)?.remove();
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [prefill]);

  if (!MEETINGS_URL) {
    return (
      <div role="status">
        <h2 className="text-xl font-bold text-darker-grey">Thanks, you&apos;re all set</h2>
        <p className="mt-2 text-dark-grey">
          We got your details and the Dozer team will reach out within one business day to set your
          15-minute intro.
        </p>
        <p className="mt-4 text-sm text-dark-grey">
          Rather talk now? Call{" "}
          <PhoneLink location="scheduler" className="font-medium text-darker-grey underline underline-offset-2">
            {CONTACT.phone}
          </PhoneLink>
          .
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-darker-grey">Last step: pick a time</h2>
      <p className="mt-1.5 text-sm text-dark-grey">
        15 minutes with the Dozer team. You&apos;ll see live footage from machines in the field.
      </p>
      <div ref={host} className="mt-6 min-h-[640px]" />
      <p className="mt-4 text-sm text-dark-grey">
        Can&apos;t find a time? Call us at{" "}
        <PhoneLink location="scheduler" className="font-medium text-darker-grey underline underline-offset-2">
          {CONTACT.phone}
        </PhoneLink>{" "}
        or we&apos;ll reach out to you.
      </p>
    </div>
  );
}
