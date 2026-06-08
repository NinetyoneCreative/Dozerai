/**
 * Product-suite content model: the single source of truth for the two
 * Dozer.ai suites, mirrored from the product roadmap (Safety Intelligence
 * Suite and Productivity & Analytics Suite).
 *
 * Drives the Safety + Productivity sections on /product and the home
 * "what it delivers" module grid.
 * Future / next-generation capabilities (3D site intelligence, Trackunit,
 * autonomous ops) are intentionally NOT represented here.
 */

export type SuiteStatus = "available" | "coming-soon";

/** Icon keys map to inline SVGs in components/SuiteIcon.tsx. */
export type IconKey =
  | "detection"
  | "alert"
  | "cost"
  | "anomaly"
  | "analytics"
  | "report"
  | "heatmap"
  | "integration";

export interface Feature {
  name: string;
  desc: string;
}

export interface FeatureCategory {
  key: string;
  name: string;
  icon: IconKey;
  features: Feature[];
}

export interface Suite {
  slug: "safety" | "productivity";
  name: string;
  shortName: string;
  status: SuiteStatus;
  /** SEO title (keyword-led). */
  title: string;
  metaDescription: string;
  heroKicker: string;
  heroHeadline: string;
  heroSub: string;
  categories: FeatureCategory[];
}

export const SAFETY_SUITE: Suite = {
  slug: "safety",
  name: "Safety Intelligence Suite",
  shortName: "Safety Intelligence",
  status: "available",
  title: "Safety Intelligence Suite, AI Blind-Spot & Proximity Detection",
  metaDescription:
    "Dozer.ai Safety Intelligence Suite: production-ready AI object detection, exclusion-zone proximity monitoring, PPE compliance, and in-cab driver alerts for heavy equipment.",
  heroKicker: "Safety Intelligence Suite · Available now",
  heroHeadline: "Enhance safety with AI-powered cameras that watch every blind spot",
  heroSub:
    "Production-ready today. Dozer's computer vision detects people, equipment, and vehicles around the machine, alerts operators in-cab in real time, and gives supervisors a full record of every safety event.",
  categories: [
    {
      key: "object-detection",
      name: "Object Detection",
      icon: "detection",
      features: [
        {
          name: "Real-time object detection",
          desc: "Identifies workers, equipment, and vehicles in the camera field of view.",
        },
        {
          name: "Proximity zone monitoring",
          desc: "Detects personnel within defined exclusion zones around heavy equipment.",
        },
        {
          name: "PPE compliance detection",
          desc: "Hard hat, vest, and safety-gear verification per worker.",
        },
      ],
    },
    {
      key: "driver-alerts",
      name: "Driver Alerts",
      icon: "alert",
      features: [
        {
          name: "In-cab driver alerts",
          desc: "Real-time audio and visual warnings for hazards, fatigue signals, and zone violations.",
        },
        {
          name: "Safety event dashboard",
          desc: "Supervisor view of all flagged events, clips, and incident history.",
        },
      ],
    },
  ],
};

export const PRODUCTIVITY_SUITE: Suite = {
  slug: "productivity",
  name: "Productivity & Analytics Suite",
  shortName: "Productivity & Analytics",
  status: "coming-soon",
  title: "Productivity & Analytics Suite, Heavy Equipment Fleet Analytics",
  metaDescription:
    "The Dozer.ai Productivity & Analytics Suite turns machine activity into job-cost allocation, utilization analytics, AI jobsite reports, heat maps, and ERP integrations.",
  heroKicker: "Productivity & Analytics Suite",
  heroHeadline: "Turn machine activity into job costs, utilization, and insight",
  heroSub:
    "Built on the same cameras already improving safety, the Productivity & Analytics Suite turns machine activity into a clear picture of how, and how efficiently, work gets done.",
  categories: [
    {
      key: "job-cost",
      name: "Job Cost & Time Allocation",
      icon: "cost",
      features: [
        {
          name: "Job cost code assignment",
          desc: "Automatically assigns cost codes to bands of machine time based on activity and location.",
        },
        {
          name: "Time-band activity logging",
          desc: "Continuous time-series log of machine state tied to project phase and work type.",
        },
        {
          name: "Production rate tracking",
          desc: "Measures cycle times and output volumes per machine per shift.",
        },
      ],
    },
    {
      key: "anomalous-behavior",
      name: "Anomalous Behavior",
      icon: "anomaly",
      features: [
        {
          name: "Anomalous behavior detection",
          desc: "Flags unusual movement patterns, falls, or unexpected machine behavior.",
        },
        {
          name: "Idle equipment detection",
          desc: "Identifies machines running without active operation.",
        },
      ],
    },
    {
      key: "fleet-utilization",
      name: "Fleet & Utilization Analytics",
      icon: "analytics",
      features: [
        {
          name: "Equipment utilization reports",
          desc: "Per-machine uptime, idle time, and fuel burn aggregated by day, week, or project.",
        },
        {
          name: "Shift performance benchmarking",
          desc: "Compare crews, machines, and shifts against project baselines.",
        },
      ],
    },
    {
      key: "ai-reporting",
      name: "AI Reporting",
      icon: "report",
      features: [
        {
          name: "AI jobsite report + summarization",
          desc: "Automated daily and weekly jobsite summaries generated from machine activity, events, and site data.",
        },
        {
          name: "AI vehicle report + summarization",
          desc: "Per-vehicle AI-generated performance and safety summaries, flagging anomalies and productivity trends.",
        },
      ],
    },
    {
      key: "heat-maps",
      name: "Heat Maps & Drone Footage",
      icon: "heatmap",
      features: [
        {
          name: "Activity & density heat maps",
          desc: "Visual heat maps of machine movement, personnel density, and high-activity zones across the jobsite.",
        },
        {
          name: "Heat map overlay on drone footage",
          desc: "Real-time and historical heat map data overlaid directly onto aerial drone imagery.",
        },
        {
          name: "Live unit tracking on drone map",
          desc: "Real-time GPS position of all fleet vehicles displayed as live markers on the drone map view.",
        },
      ],
    },
    {
      key: "integrations",
      name: "Integrations",
      icon: "integration",
      features: [
        {
          name: "ERP & project management export",
          desc: "Push cost-code data directly to Viewpoint, Procore, Oracle, or similar systems.",
        },
        {
          name: "API data access",
          desc: "Programmatic access to all machine activity, event, and cost data for custom reporting.",
        },
      ],
    },
  ],
};

export const SUITES: Suite[] = [SAFETY_SUITE, PRODUCTIVITY_SUITE];
