import { type ReactNode } from "react";

/**
 * Minimal browser chrome around a Command Center screenshot (bucket `ui`).
 * A hairline frame, three window dots, and a static address pill. Purely
 * decorative, so it is hidden from assistive tech.
 */
export function BrowserChrome({
  url = "app.dozer.ai",
  children,
}: {
  url?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-white/10 bg-surface-dark shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1">
          <span className="inline-block rounded-sm bg-white/10 px-3 py-1 font-mono text-xs text-white/50">
            {url}
          </span>
        </div>
      </div>
      <div className="bg-black">{children}</div>
    </div>
  );
}
