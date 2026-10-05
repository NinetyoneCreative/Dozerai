/**
 * Persona model — the organizing spine of the site. Dozer is ONE product
 * (safety + productivity from the same cameras) that serves three vantage
 * points on the jobsite:
 *
 *   In the field  → foremen & spotters
 *   In the cab    → operators
 *   In the office → foremen & upper management
 *
 * Field has a real photo (public/field.jpg). Cab + office use a labeled
 * placeholder until real photos are dropped into /public (cab.jpg, office.jpg);
 * set `image` on those entries and remove `placeholder` when the files arrive.
 */

export interface Persona {
  id: "field" | "cab" | "office";
  eyebrow: string; // "In the field"
  who: string; // audience
  /** One-line summary for overview cards. */
  teaser: string;
  title: string;
  body: string;
  points: string[];
  /** Real photo, if available. */
  image?: { src: string; alt: string };
  /** Fallback label shown when there is no image yet. */
  placeholder?: string;
}

export const PERSONAS: Persona[] = [
  {
    id: "field",
    eyebrow: "In the field",
    who: "Foremen & spotters",
    teaser: "Live proximity alerts and 360° awareness for everyone on the ground.",
    title: "A second set of eyes on every machine",
    body: "Dozer watches the area around each machine, so the crew on the ground gets warned before a machine gets too close.",
    points: [
      "Real-time proximity alerts that act as a virtual spotter",
      "360° view of the cabin, attachment, and every blind spot",
      "Exclusion-zone monitoring around active equipment",
      "PPE compliance checks on every worker in frame",
    ],
    image: {
      src: "/field.jpg",
      alt: "A Dozer camera unit mounted on a machine, with an excavator digging and a spotter with a tablet on a jobsite",
    },
  },
  {
    id: "cab",
    eyebrow: "In the cab",
    who: "Operators",
    teaser: "Real-time in-cab warnings before a person or hazard is in the way.",
    title: "In-cab alerts before contact, not after",
    body: "Operators get audio and visual warnings the instant a person or hazard enters a blind spot, with time to stop.",
    points: [
      "In-cab audio and visual hazard alerts",
      "Blind-spot and proximity detection on every side",
      "AI that tells people apart from equipment and objects",
      "Fatigue and exclusion-zone violation warnings",
    ],
    image: {
      src: "/cab.jpg",
      alt: "An operator's view from inside the cab, with a mounted in-cab tablet and a spotter visible through the windshield",
    },
  },
  {
    id: "office",
    eyebrow: "In the office",
    who: "Foremen & management",
    teaser: "One dashboard for safety events, productivity, and disputes.",
    title: "The whole jobsite, on one dashboard",
    body: "Review safety events, measure how productively work gets done, and settle disputes by machine and map area, all from your desk.",
    points: [
      "Safety event review with clips and full incident history",
      "Job-cost allocation and equipment utilization",
      "AI jobsite and per-vehicle reports",
      "Activity heat maps and ERP / project-management integrations",
    ],
    image: {
      src: "/office.jpg",
      alt: "A manager in a jobsite trailer reviewing the Dozer dashboard on a rugged laptop",
    },
  },
];
