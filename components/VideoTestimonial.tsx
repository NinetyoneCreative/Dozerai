"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { track } from "@/lib/analytics";

const VIDEO_ID = "LniqXy8HlL0";

/**
 * Customer video testimonial (Smith Denison). Renders a lightweight click-to-
 * play facade (YouTube thumbnail + play button) so the heavy YouTube iframe
 * only loads on interaction — important since this appears on every page.
 */
const DESCRIPTION =
  "From out in the field to in the office, Smith Denison has transformed how they handle safety and productivity.";

export function VideoTestimonial({
  tone = "white",
}: {
  tone?: "light" | "white" | "dark";
}) {
  const [playing, setPlaying] = useState(false);
  const dark = tone === "dark";

  return (
    <Section tone={tone} spacing="lg" aria-labelledby="testimonial-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Quote */}
        <div>
          <p className="kicker">Customer story</p>
          <h2
            id="testimonial-heading"
            className={`mt-3 text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-darker-grey"}`}
          >
            Hear it from a Dozer customer
          </h2>
          <p
            className={`mt-6 text-xl leading-relaxed ${dark ? "text-dozer-white/90" : "text-dark-grey"}`}
          >
            {DESCRIPTION}
          </p>
        </div>

        {/* Video: facade → iframe on click */}
        <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
          {playing ? (
            <iframe
              className="aspect-video w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="Dozer AI customer testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => {
                setPlaying(true);
                track("video_play", { video: "testimonial_smith_denison" });
              }}
              className="group relative block aspect-video w-full"
              aria-label="Play the Dozer AI customer testimonial video"
            >
              {/* YouTube thumbnail (plain img to avoid the image optimizer) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
              />
              <span className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" aria-hidden="true" />
              <span
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dozer-yellow text-black shadow-lg transition group-hover:scale-105"
                aria-hidden="true"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
