"use client";

import { useState } from "react";
import { Pill, LiveDot } from "@/components/ProductOverlays";

const VIEWS = [
  {
    id: "housing",
    label: "With housing",
    src: "/product-camera/camera-housing.jpg",
    alt: "Dozer camera unit in its yellow protective housing, ready to bolt onto a machine.",
    caption: "The housing bolts to the machine and shields the camera from dust, water, and impact.",
    chip: "IP-6/7 housing",
  },
  {
    id: "bare",
    label: "Camera only",
    src: "/product-camera/camera-bare.jpg",
    alt: "The Dozer stereoscopic depth camera on its ball-head mount, with the housing removed.",
    caption: "Inside: a stereoscopic depth camera on an adjustable ball-head mount.",
    chip: "Stereo depth camera",
  },
] as const;

/**
 * Product shot of the camera unit with a toggle that shows or hides the
 * protective housing. The two renders are aligned so the housing appears to
 * fade away around the camera.
 */
export function CameraShowcase() {
  const [view, setView] = useState<(typeof VIEWS)[number]["id"]>("bare");
  const active = VIEWS.find((v) => v.id === view) ?? VIEWS[0];

  return (
    <figure className="w-full">
      <div className="relative overflow-hidden rounded-md border border-medium-grey/30 bg-[#fefefe]">
        {VIEWS.map((v) => (
          // eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-sized
          <img
            key={v.id}
            src={v.src}
            alt={v.id === view ? v.alt : ""}
            aria-hidden={v.id !== view}
            width={1024}
            height={768}
            loading="lazy"
            className={`block h-auto w-full transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              v.id === "housing" ? "" : "absolute inset-0"
            } ${v.id === view ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2" aria-hidden="true">
          <Pill>
            <LiveDot /> Watching 360°
          </Pill>
          <Pill tone="dark">{active.chip}</Pill>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-5">
        <div
          role="group"
          aria-label="Camera housing"
          className="flex shrink-0 rounded-full border border-medium-grey/30 bg-white p-1"
        >
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              aria-pressed={v.id === view}
              onClick={() => setView(v.id)}
              className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dozer-yellow ${
                v.id === view
                  ? "bg-darker-grey text-white"
                  : "text-dark-grey hover:text-darker-grey"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
        <figcaption
          className="text-center text-sm text-dark-grey sm:text-left"
          aria-live="polite"
        >
          {active.caption}
        </figcaption>
      </div>
    </figure>
  );
}
