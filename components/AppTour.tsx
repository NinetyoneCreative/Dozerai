"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { APP_TOUR, type TourView } from "@/lib/appTour";
import { track } from "@/lib/analytics";

/** Every view in order, with the top-level section it belongs to. */
const VIEWS: (TourView & { section: string })[] = APP_TOUR.flatMap((s) =>
  s.views.map((v) => ({ ...v, section: s.id })),
);

/** Short GIFs still get a few seconds on screen before auto-advancing. */
const MIN_DWELL = 8;

/**
 * Tabbed tour of the Dozer desktop app. Tabs mirror the app's sidebar, and
 * Analytics opens its own 01–04 sub-tabs like the real app. While the section
 * is on screen it auto-advances after each GIF finishes a loop; any click or
 * key press hands control to the visitor. Reduced-motion visitors get stills
 * and no auto-advance.
 */
export function AppTour() {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const view = VIEWS[index];
  const section = APP_TOUR.find((s) => s.id === view.section)!;
  const dwell = Math.max(view.duration, MIN_DWELL);
  const playing = auto && inView && !reducedMotion;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance once the current GIF has played through.
  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % VIEWS.length), dwell * 1000);
    return () => window.clearTimeout(t);
  }, [playing, index, dwell]);

  // Keep the active tab visible in the horizontally scrolling tab row (mobile),
  // without moving the page vertically.
  useEffect(() => {
    const tab = tabRefs.current[APP_TOUR.findIndex((s) => s.id === view.section)];
    const row = tab?.parentElement;
    if (!tab || !row) return;
    const left = tab.offsetLeft - row.offsetLeft;
    if (left < row.scrollLeft || left + tab.offsetWidth > row.scrollLeft + row.clientWidth) {
      row.scrollTo({ left: left - 16 });
    }
  }, [view.section]);

  // Warm the cache for the next view so switching tabs is instant.
  useEffect(() => {
    if (!inView || reducedMotion) return;
    const next = new Image();
    next.src = VIEWS[(index + 1) % VIEWS.length].gif;
  }, [index, inView, reducedMotion]);

  const select = (i: number) => {
    setAuto(false);
    setIndex(i);
    track("cta_click", { id: `app_tour_${VIEWS[i].id}` });
  };

  const selectSection = (sectionId: string) => {
    const i = VIEWS.findIndex((v) => v.section === sectionId);
    if (i !== -1 && VIEWS[i].section !== view.section) select(i);
    else setAuto(false);
  };

  // Roving arrow-key navigation across the top-level tabs (WAI-ARIA tabs).
  const onTabKey = (e: KeyboardEvent, pos: number) => {
    const n = APP_TOUR.length;
    const target =
      e.key === "ArrowRight" ? (pos + 1) % n
      : e.key === "ArrowLeft" ? (pos - 1 + n) % n
      : e.key === "Home" ? 0
      : e.key === "End" ? n - 1
      : null;
    if (target === null) return;
    e.preventDefault();
    selectSection(APP_TOUR[target].id);
    tabRefs.current[target]?.focus();
  };

  return (
    <div ref={rootRef}>
      <div
        role="tablist"
        aria-label="Dozer app sections"
        className="flex gap-1 overflow-x-auto border-b border-medium-grey/30 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {APP_TOUR.map((s, pos) => {
          const active = s.id === view.section;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabRefs.current[pos] = el;
              }}
              role="tab"
              id={`app-tab-${s.id}`}
              aria-selected={active}
              aria-controls="app-tour-panel"
              tabIndex={active ? 0 : -1}
              onClick={() => selectSection(s.id)}
              onKeyDown={(e) => onTabKey(e, pos)}
              className={`relative shrink-0 px-4 pb-3 pt-2 text-sm font-medium transition-colors sm:px-5 sm:text-base ${
                active ? "text-darker-grey" : "text-dark-grey/70 hover:text-darker-grey"
              }`}
            >
              {s.label}
              <span
                className={`absolute inset-x-0 -bottom-px h-0.5 ${
                  active ? "bg-dozer-yellow" : "bg-transparent"
                }`}
                aria-hidden="true"
              />
              {/* Auto-advance progress, restarted per view via key */}
              {active && playing && (
                <span
                  key={view.id}
                  className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-darker-grey/40"
                  style={{ animation: `app-tour-progress ${dwell}s linear both` }}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {section.views.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label={`${section.label} views`}>
          {section.views.map((v, n) => {
            const i = VIEWS.findIndex((x) => x.id === v.id);
            const active = i === index;
            return (
              <button
                key={v.id}
                type="button"
                aria-pressed={active}
                onClick={() => select(i)}
                className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                  active
                    ? "border-darker-grey bg-darker-grey text-white"
                    : "border-medium-grey/50 bg-white text-dark-grey hover:border-darker-grey"
                }`}
              >
                <span className={`font-mono ${active ? "text-dozer-yellow" : "text-medium-grey"}`}>
                  {String(n + 1).padStart(2, "0")}
                </span>{" "}
                {v.label}
              </button>
            );
          })}
        </div>
      )}

      <div
        id="app-tour-panel"
        role="tabpanel"
        aria-labelledby={`app-tab-${view.section}`}
        className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-12"
      >
        <div key={view.id} className="animate-fade-up lg:pt-4">
          <h3 className="text-2xl font-bold text-darker-grey sm:text-3xl">{view.title}</h3>
          <p className="mt-4 text-lg text-dark-grey">{view.body}</p>
          <ul className="mt-5 space-y-2.5">
            {view.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-dark-grey">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Browser-window frame around the app recording */}
        <figure className="order-first overflow-hidden rounded-md lg:order-none border border-medium-grey/40 bg-white shadow-[0_24px_60px_-24px_rgba(77,82,96,0.35)]">
          <div className="flex items-center gap-1.5 border-b border-medium-grey/30 bg-dozer-white px-3 py-2" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-medium-grey/50" />
            <span className="ml-3 truncate font-mono text-[0.7rem] uppercase tracking-[0.14em] text-medium-grey">
              Dozer · {section.label}
              {section.views.length > 1 && ` · ${view.label}`}
            </span>
          </div>
          <picture key={view.id}>
            <source media="(prefers-reduced-motion: reduce)" srcSet={view.still} />
            {/* eslint-disable-next-line @next/next/no-img-element -- animated GIF, served as-is */}
            <img
              src={view.gif}
              alt={view.alt}
              width={1000}
              height={496}
              className="block h-auto w-full"
            />
          </picture>
        </figure>
      </div>
    </div>
  );
}
