"use client";

import { useEffect, useState } from "react";
import { scrollToDemoForm } from "@/components/demo/DemoCta";
import { dataLayerPush } from "@/lib/analytics";

/**
 * Mobile-only sticky CTA. Appears once the form scrolls out of view, hides
 * while the form is visible, and disappears for good after a successful submit
 * (the form dispatches a "demo:submitted" event). Hidden at >= 768px so it
 * never overlaps the desktop layout, the scheduler, or a cookie banner.
 */
export function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const form = document.getElementById("demo-form");
    if (!form) return;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // Show only when the form is NOT in view.
        setVisible(!e.isIntersecting);
      },
      { threshold: 0 },
    );
    io.observe(form);

    const onSubmitted = () => setDone(true);
    window.addEventListener("demo:submitted", onSubmitted);
    return () => {
      io.disconnect();
      window.removeEventListener("demo:submitted", onSubmitted);
    };
  }, []);

  if (done || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-medium-grey/30 bg-white/95 p-3 backdrop-blur md:hidden">
      <button
        type="button"
        onClick={() => {
          dataLayerPush("demo_cta_click", { location: "sticky-mobile" });
          scrollToDemoForm();
        }}
        className="flex w-full items-center justify-center rounded-md bg-dozer-yellow px-6 py-3 text-sm font-medium text-black"
      >
        Book a 15-min intro
      </button>
    </div>
  );
}
