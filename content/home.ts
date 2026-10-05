/**
 * Homepage content. Typed so it can move to a CMS later without touching the
 * page. Copy rules: no em dashes, outcome first, plainspoken trade language,
 * no price anywhere, both suites carry equal weight.
 */
import type { AssetKey } from "@/content/assets";

/* Section 4 — four-pillar strip. Two safety pillars and two productivity
   pillars, in alternating order, so the equal weighting reads at a glance. */
export interface Pillar {
  name: string;
  body: string;
  suite: "safety" | "productivity";
}
export const PILLARS: Pillar[] = [
  {
    name: "Detect",
    body: "Stereoscopic depth tells a person apart from a dirt pile at up to 30 meters.",
    suite: "safety",
  },
  {
    name: "Alert",
    body: "The operator gets a warning in the cab in under 150 milliseconds.",
    suite: "safety",
  },
  {
    name: "Record",
    body: "Every flagged event is clipped, time-stamped, and tied to a machine and a location.",
    suite: "productivity",
  },
  {
    name: "Report",
    body: "The same footage becomes utilization, cycle times, and cost codes.",
    suite: "productivity",
  },
];

/* Section 5 — what the operator sees. */
export const OPERATOR = {
  headline: "A virtual spotter that never looks away.",
  body: "The in-cab tablet shows every camera at once. When a person or a machine crosses into a blind spot, the operator hears it and sees it, with distance to the hazard on screen.",
  specs: ["360° coverage", "30m range", "under 150ms"],
};

/* Section 6 — what the office sees. */
export const OFFICE = {
  headline: "Alerts in the cab. Answers on the dashboard.",
  body: "The same cameras that warn the operator feed the Command Center, so supervisors see the whole yard without leaving the trailer.",
  bullets: [
    "Live operations and equipment tracking",
    "Utilization and production versus plan",
    "Automated site summaries and exception alerts",
  ],
};

/* Section 7 — two suites, equal weight. */
export interface Suite {
  eyebrow: string;
  name: string;
  promise: string;
  features: string[];
  asset: AssetKey;
  href: string;
}
export const SUITES_INTRO = "Two suites. One set of cameras. One install. Both live today.";
export const SUITES: Suite[] = [
  {
    eyebrow: "Safety Intelligence Suite",
    name: "Catch the near-miss before it becomes a claim.",
    promise: "Real-time proximity detection that backs up every operator.",
    features: [
      "Proximity detection and exclusion zones",
      "PPE compliance and in-cab alerts",
      "Near-miss recording, every event clipped",
      "A safety event dashboard by machine and site",
    ],
    asset: "suiteSafetyUi",
    href: "/solution#safety",
  },
  {
    eyebrow: "Productivity & Analytics Suite",
    name: "Turn the same footage into a tighter job.",
    promise: "Cost codes, cycle times, and utilization from the cameras already on the machine.",
    features: [
      "Job cost codes and time allocation",
      "Cycle times and utilization",
      "Shift benchmarking and AI jobsite reporting",
      "ERP export to Procore, Viewpoint, and Oracle",
    ],
    asset: "suiteProductivityUi",
    href: "/solution#productivity",
  },
];

/* Section 9 — how it works. */
export interface Step {
  n: string;
  name: string;
  body: string;
}
export const STEPS: Step[] = [
  { n: "01", name: "Mount", body: "Install on any machine in under an hour. OEM agnostic, no drilling into the cab." },
  { n: "02", name: "Detect", body: "Edge AI classifies people, machines, and objects on the machine, in real time." },
  { n: "03", name: "Alert", body: "The operator is warned in the cab the instant a hazard enters a blind spot." },
  { n: "04", name: "Report", body: "Activity syncs to the Command Center as utilization, cost codes, and safety events." },
];

/* Section 10 — proof (Smith Denison). Stats are real. The pull quote needs
   Doug Burkhart's actual words; until then the section shows the factual ROI
   summary (our words, not a quotation) plus attribution on the video. */
export const PROOF = {
  videoId: "LniqXy8HlL0",
  attribution: { name: "Doug Burkhart", role: "Owner, Smith Denison Construction" },
  // TODO: replace with Doug Burkhart's verbatim quote once supplied. Leave empty
  // to render the factual summary below instead of a fabricated quotation.
  quote: "",
  summary:
    "An $11K prototype saved $80K and over 60 hours in its first three months, and led Smith Denison to expand to three units.",
  stats: [
    { value: "6.3x", label: "ROI in 3 months" },
    { value: "$80K", label: "saved in 3 months" },
    { value: "60+", label: "hours recovered" },
    { value: "3", label: "unit expansion" },
  ],
};

/* Section 11 — why on-machine. Category-level comparison, no brand names. */
export const COMPARISON = {
  columnA: "Dozer AI",
  columnB: "Fixed and pole-mounted systems",
  rows: [
    {
      label: "Where it sits",
      a: "On the machine, moves with the work",
      b: "Fixed to one spot on site",
    },
    {
      label: "How it measures distance",
      a: "Stereoscopic depth, centimeter accurate",
      b: "Single-lens estimate",
    },
    {
      label: "What one install gives you",
      a: "Safety alerts and production data",
      b: "Safety alerts only",
    },
  ],
};

/* Section 12 — pilot band. No price. */
export const PILOT = {
  headline: "Put it on one machine for 45 days.",
  line: "No long-term contract. Real events from your own jobsite.",
};

/* Section 13 — interactive tour. Drop a Navattic or Storylane URL here to
   replace the placeholder without a code change. */
export const TOUR_EMBED_URL = "";
