"use client";

import { useEffect, useRef, useState } from "react";

const SRC = "https://dozeraicameras.netlify.app/demo/camera-coverage";

/**
 * The interactive camera-coverage view, which lives in a separate repo/site.
 * Lazy-loaded with an IntersectionObserver so it never slows the form, with a
 * responsive aspect ratio and a plain-link fallback for very small screens.
 */
export function CameraCoverage() {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || load) return;
    if (typeof IntersectionObserver !== "function") {
      setLoad(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [load]);

  return (
    <div ref={ref}>
      <div className="relative w-full overflow-hidden rounded-md border border-medium-grey/30 bg-black" style={{ aspectRatio: "16 / 10" }}>
        {load ? (
          <iframe
            src={SRC}
            title="Interactive Dozer AI camera coverage view"
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            allow="fullscreen"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-mono text-xs uppercase tracking-wide text-medium-grey">Loading the coverage view…</p>
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-sm">
        <a
          href={SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-darker-grey underline underline-offset-4 hover:text-dozer-yellow"
        >
          Open the interactive view
        </a>
      </p>
    </div>
  );
}
