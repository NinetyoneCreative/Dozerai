import { type ElementType, type ReactNode } from "react";

type Tone = "light" | "white" | "dark";

const toneClasses: Record<Tone, string> = {
  // dozer-white wash — the default page tone on the live site
  light: "bg-dozer-white text-dark-grey",
  white: "bg-white text-dark-grey",
  // dark section uses darker-grey, matching .bg-darker-grey
  dark: "bg-darker-grey text-dozer-white",
};

interface SectionProps {
  children: ReactNode;
  /** Background tone. */
  tone?: Tone;
  /** Vertical padding scale. */
  spacing?: "sm" | "md" | "lg";
  /** Render as a different element (e.g. "header"). */
  as?: ElementType;
  id?: string;
  className?: string;
  /** Constrain inner content to the brand container width. */
  contain?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const spacingClasses = {
  sm: "py-10 sm:py-14",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

/**
 * The single layout primitive. Handles section background tone, vertical
 * rhythm, and the centered brand container so pages stay consistent.
 */
export function Section({
  children,
  tone = "light",
  spacing = "md",
  as: Tag = "section",
  id,
  className = "",
  contain = true,
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${toneClasses[tone]} ${spacingClasses[spacing]} ${className}`}
      {...aria}
    >
      {contain ? (
        <div className="mx-auto w-full max-w-container px-5 sm:px-8">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
