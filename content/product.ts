/**
 * Content for /product (the system, end to end) and the two suite pages,
 * /product/safety and /product/productivity. Both suites carry equal weight
 * and are live today. No price, no "coming soon", no em dashes.
 */
import type { AssetKey } from "@/content/assets";

/* ---- /product : the system, end to end -------------------------------- */
export const PRODUCT = {
  eyebrow: "The system",
  h1: "One system, from the camera to the decision.",
  opening:
    "Dozer AI is a single system: rugged cameras and depth sensors on the machine, an onboard computer that runs the AI locally, an in-cab tablet for the operator, and a web Command Center for the office. One install, on any machine, feeding both safety and production.",
  specs: [
    { value: "30m", label: "detection range" },
    { value: "<150ms", label: "edge AI" },
    { value: "<1hr", label: "install" },
    { value: "IP-rated", label: "dust, water, impact" },
    { value: "OEM", label: "agnostic" },
  ],
  flow: [
    {
      n: "01",
      name: "Cameras and sensors",
      body: "360-degree stereoscopic cameras and depth sensors mount to the machine and measure the distance to everything around it.",
    },
    {
      n: "02",
      name: "Onboard edge computer",
      body: "The AI runs on the machine and classifies people, equipment, and objects in under 150 milliseconds, with no cell service required.",
    },
    {
      n: "03",
      name: "In-cabin tablet",
      body: "The operator sees every camera and hears an alert the moment a hazard enters a blind spot.",
    },
    {
      n: "04",
      name: "Command Center",
      body: "Events and machine activity sync to the web dashboard as safety events, utilization, cycle times, and cost codes.",
    },
  ],
};

/* ---- Suite pages ------------------------------------------------------- */
export interface SuiteCapability {
  title: string;
  body: string;
}
export interface SuitePage {
  slug: "safety" | "productivity";
  eyebrow: string;
  title: string; // meta
  metaDescription: string;
  h1: string;
  opening: string;
  heroAsset: AssetKey;
  capabilities: SuiteCapability[];
  outcomes: string[];
  crossLink: { label: string; href: string };
}

export const SAFETY_SUITE: SuitePage = {
  slug: "safety",
  eyebrow: "Safety Intelligence Suite",
  title: "Safety Intelligence Suite, Proximity Detection for Heavy Equipment",
  metaDescription:
    "The Dozer AI Safety Intelligence Suite: 360-degree proximity detection, exclusion zones, PPE compliance, in-cab alerts, and near-miss recording on any heavy machine.",
  h1: "Catch the near-miss before it becomes a claim.",
  opening:
    "The Safety Intelligence Suite backs up every operator with a virtual spotter that never looks away. Stereoscopic depth tells a person apart from a dirt pile at up to 30 meters, and the operator gets an audible and visual warning in the cab in under 150 milliseconds, while there is still time to stop.",
  heroAsset: "safetyIncab",
  capabilities: [
    {
      title: "Proximity detection",
      body: "360-degree stereoscopic depth measures the distance to every person and machine and warns the operator before a blind spot becomes a struck-by.",
    },
    {
      title: "Exclusion zones",
      body: "Draw a keep-out zone around a hazard or work area. Dozer flags anyone who crosses it.",
    },
    {
      title: "PPE compliance",
      body: "The system recognizes required PPE and surfaces gaps, so you can catch them before an audit does.",
    },
    {
      title: "In-cab alerts",
      body: "Audible and visual warnings reach the operator in the seat, tuned so they fire on real hazards, not clutter.",
    },
    {
      title: "Near-miss recording",
      body: "Every flagged event is clipped, time-stamped, and tied to a machine and location, so a near-miss is documented instead of forgotten.",
    },
    {
      title: "Safety event dashboard",
      body: "Supervisors review events by machine, site, and shift, and see patterns before they turn into incidents.",
    },
  ],
  outcomes: [
    "Fewer struck-by and backover near-misses",
    "Documented proof for insurers and disputes",
    "Faster, more confident onboarding for new operators",
    "A safety record built from your own jobsite",
  ],
  crossLink: { label: "See the Productivity & Analytics Suite", href: "/solution#productivity" },
};

export const PRODUCTIVITY_SUITE: SuitePage = {
  slug: "productivity",
  eyebrow: "Productivity & Analytics Suite",
  title: "Productivity & Analytics Suite, Cost Codes and Utilization",
  metaDescription:
    "The Dozer AI Productivity & Analytics Suite: job cost codes, cycle times, utilization, shift benchmarking, AI jobsite reporting, and ERP export to Procore, Viewpoint, and Oracle.",
  h1: "Turn the same footage into a tighter job.",
  opening:
    "The Productivity & Analytics Suite is live today and runs on the same cameras and the same install as safety. The footage that warns the operator also becomes the data the office needs: where the time went, how the machines ran, and what it cost, by machine and by cost code.",
  heroAsset: "productivityDashboard",
  capabilities: [
    {
      title: "Job cost codes",
      body: "Machine activity maps to your cost codes, so hours land against the right line without a timecard guess.",
    },
    {
      title: "Time allocation",
      body: "See working time against idle and travel, by machine and by task, across the day.",
    },
    {
      title: "Cycle times",
      body: "Measure load, haul, and return cycles so you can find the bottleneck on the haul road.",
    },
    {
      title: "Utilization",
      body: "Track how hard each machine is actually working, shift over shift, across the fleet.",
    },
    {
      title: "Shift benchmarking",
      body: "Compare shifts and crews on the same work, so a good day is repeatable and a slow one is explainable.",
    },
    {
      title: "AI jobsite reporting and ERP export",
      body: "Automated site summaries flag the exceptions, and the data exports to Procore, Viewpoint, and Oracle.",
    },
  ],
  outcomes: [
    "Accurate hours against every cost code",
    "Cycle-time and utilization data with no extra hardware",
    "Automated daily summaries instead of manual reports",
    "Production data that lands in the systems you already run",
  ],
  crossLink: { label: "See the Safety Intelligence Suite", href: "/solution#safety" },
};

export const SUITE_PAGES: SuitePage[] = [SAFETY_SUITE, PRODUCTIVITY_SUITE];
