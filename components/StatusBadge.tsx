import type { SuiteStatus } from "@/lib/suites";

/**
 * Suite availability badge. "Available now" (yellow) vs "Coming soon" with an
 * optional timeline (outlined). Used on suite pages, home, and nav.
 */
export function StatusBadge({
  status,
  timeline,
  tone = "light",
}: {
  status: SuiteStatus;
  timeline?: string;
  tone?: "light" | "dark";
}) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-dozer-yellow px-3 py-1 text-xs font-medium text-black">
        <span className="h-1.5 w-1.5 rounded-full bg-black/70" aria-hidden="true" />
        Available now
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        tone === "dark"
          ? "border-white/40 text-white"
          : "border-medium-grey/60 text-dark-grey"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-dozer-yellow" aria-hidden="true" />
      Coming soon{timeline ? ` · ${timeline}` : ""}
    </span>
  );
}
