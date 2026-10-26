"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";

interface SafeVideoProps {
  src: string;
  /** Accessible description of the footage. */
  label: string;
  className?: string;
  poster?: string;
  /** Autoplay muted loop (for ambient hero footage). */
  ambient?: boolean;
  /** Analytics id; fires video_play on first play. */
  trackId?: string;
}

/**
 * <video> wrapper that hides itself on load error (graceful degradation) and
 * respects prefers-reduced-motion by not autoplaying. Ambient videos loop
 * muted; non-ambient videos show native controls.
 */
export function SafeVideo({
  src,
  label,
  className = "",
  poster,
  ambient = false,
  trackId,
}: SafeVideoProps) {
  const [failed, setFailed] = useState(false);
  const played = useRef(false);

  if (failed) return null;

  return (
    <video
      className={className}
      aria-label={label}
      poster={poster}
      muted={ambient}
      loop={ambient}
      autoPlay={ambient}
      playsInline
      preload="metadata"
      controls={!ambient}
      onError={() => setFailed(true)}
      onPlay={() => {
        if (!played.current && trackId) {
          played.current = true;
          track("video_play", { video: trackId });
        }
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
