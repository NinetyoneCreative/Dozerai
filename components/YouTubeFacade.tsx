"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

/**
 * Click-to-play YouTube facade. Renders the thumbnail plus a play button and
 * does NOT load the YouTube iframe until the user clicks, so no third-party
 * player JS loads on page view. One of the few pieces of client JS on the site.
 */
export function YouTubeFacade({
  videoId,
  title,
  trackId = "video_play",
  className = "",
}: {
  videoId: string;
  title: string;
  trackId?: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`overflow-hidden rounded-md border border-white/10 bg-black ${className}`}>
      {playing ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            track("video_play", { video: trackId });
          }}
          className="group relative block aspect-video w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-black/25 transition group-hover:bg-black/15" aria-hidden="true" />
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
  );
}
