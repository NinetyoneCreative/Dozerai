/**
 * Site navigation structure for the header and footer.
 *
 * Route map (2026 redesign):
 *   /product, /product/safety, /product/productivity
 *   /hardware, /hardware/camera, /hardware/edge-computer, /hardware/tablet
 *   /platform
 *   /industries/<slug> (six trades, one shared template)
 *   /pilot, /company, /demo
 *
 * The six industries live here as {label, href} for nav; their full per-trade
 * copy lives in /content/industries.ts (added during the industries build).
 */

export interface NavChild {
  label: string;
  href: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

/** The six industry trades, in nav order. Slugs are canonical. */
export const INDUSTRY_NAV: NavChild[] = [
  { label: "Earthwork & Grading", href: "/industries/earthwork-grading" },
  { label: "Underground Utility", href: "/industries/underground-utility" },
  { label: "Pipeline", href: "/industries/pipeline" },
  { label: "Paving", href: "/industries/paving" },
  { label: "Demolition", href: "/industries/demolition" },
  { label: "Mining", href: "/industries/mining" },
];

/** Primary header nav. */
export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Solution",
    href: "/solution",
    children: [
      { label: "The system, end to end", href: "/solution" },
      { label: "Safety Intelligence Suite", href: "/solution#safety" },
      { label: "Productivity & Analytics Suite", href: "/solution#productivity" },
    ],
  },
  {
    label: "Hardware",
    href: "/hardware",
    children: [
      { label: "All hardware", href: "/hardware" },
      { label: "360° Stereoscopic Camera", href: "/hardware#camera" },
      { label: "Onboard Edge Computer", href: "/hardware#edge-computer" },
      { label: "In-Cabin Tablet", href: "/hardware#tablet" },
    ],
  },
  { label: "Platform", href: "/platform" },
  {
    label: "Industries",
    href: "/industries",
    children: [{ label: "All industries", href: "/industries" }, ...INDUSTRY_NAV],
  },
  { label: "Company", href: "/company" },
];

/** The one primary CTA carried across the site. */
export const PRIMARY_CTA = { label: "Book a walkthrough", href: "/demo" };

/** Footer link groups (dark footer, full nav). */
export const FOOTER_GROUPS: { heading: string; links: NavChild[] }[] = [
  {
    heading: "Solution",
    links: [
      { label: "The system", href: "/solution" },
      { label: "Safety Intelligence Suite", href: "/solution#safety" },
      { label: "Productivity & Analytics Suite", href: "/solution#productivity" },
      { label: "Command Center", href: "/platform" },
    ],
  },
  {
    heading: "Hardware",
    links: [
      { label: "360° Stereoscopic Camera", href: "/hardware#camera" },
      { label: "Onboard Edge Computer", href: "/hardware#edge-computer" },
      { label: "In-Cabin Tablet", href: "/hardware#tablet" },
    ],
  },
  { heading: "Industries", links: INDUSTRY_NAV },
  {
    heading: "Company",
    links: [
      { label: "About Dozer AI", href: "/company" },
      { label: "45-day pilot", href: "/pilot" },
      { label: "Book a walkthrough", href: "/demo" },
    ],
  },
];

/** Required footer boilerplate line. */
export const FOOTER_BOILERPLATE =
  "Dozer AI is an AI perceptual intelligence system for heavy job sites. Rugged cameras and depth sensors mount directly on your equipment to detect people, measure proximity, and turn busy sites into safer, more productive operations.";
