import type { IconKey } from "@/lib/suites";

/** Minimal line icons for suite feature categories (no icon library). */
export function SuiteIcon({ name, className = "" }: { name: IconKey; className?: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    className,
  };
  switch (name) {
    case "detection":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 9h2M19 9h2M3 15h2M19 15h2" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 3l9 16H3z" />
          <path d="M12 10v4M12 17h.01" />
        </svg>
      );
    case "cost":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4" />
        </svg>
      );
    case "anomaly":
      return (
        <svg {...common}>
          <path d="M3 13l4-4 3 3 5-6 6 7" />
          <path d="M3 19h18" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...common}>
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
        </svg>
      );
    case "report":
      return (
        <svg {...common}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5M10 13h6M10 17h6" />
        </svg>
      );
    case "heatmap":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="10" r="2.2" />
          <circle cx="15" cy="14" r="1.4" />
        </svg>
      );
    case "integration":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h4a2 2 0 0 1 2 2V14" />
        </svg>
      );
    default:
      return null;
  }
}
