import { ASSETS } from "@/lib/site";

/**
 * Industry / vertical landing-page content. Each entry powers a conversion
 * funnel at /industries/<slug>:
 *   Hero (pain-led) → "sound familiar?" pains → how Dozer fits →
 *   outcomes/ROI → proof → pricing/risk-reversal → CTA band.
 *
 * Copy reuses Dozer's REAL capabilities (360° vision, proximity detection,
 * in-cab alerts, object classification, GPS-tagged footage, dashboards) and
 * frames the context/pain for each vertical — no invented features.
 */

export interface Industry {
  slug: string;
  /** Short nav/card name. */
  name: string;
  /** SEO <title> (keyword-led, buyer language). */
  title: string;
  metaDescription: string;
  heroKicker: string;
  heroHeadline: string;
  heroSub: string;
  /** Machines common to this vertical (shown as chips). */
  equipment: string[];
  /** "Sound familiar?" — the specific hazards/costs of this environment. */
  pains: { title: string; body: string }[];
  /** How Dozer fits — real features mapped to this environment. */
  solutions: { title: string; body: string }[];
  /** Outcome bullets framed for this buyer. */
  outcomes: string[];
  /** Hero video (reuses existing S3 assets). */
  heroVideo: string;
  /** Headline for the closing CTA band. */
  ctaHeadline: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "heavy-civil",
    name: "Heavy Civil",
    title: "Heavy Civil Safety Cameras — Excavator & Dozer Blind-Spot Detection",
    metaDescription:
      "Dozer.ai blind-spot cameras for heavy-civil contractors: protect grade crews on foot, prevent excavator and dozer backovers, and document utility strikes — on every machine on site.",
    heroKicker: "For heavy-civil contractors",
    heroHeadline: "Keep your ground crews out from under the iron",
    heroSub:
      "On a grading site, checkers, pipe layers, and laborers work feet from swinging excavators and backing dozers. Dozer gives every operator a 360° virtual spotter and an in-cab alert the moment a person enters the blind spot.",
    equipment: ["Excavators", "Dozers", "Motor graders", "Wheel loaders", "Haul trucks"],
    pains: [
      {
        title: "People on foot, machines in motion",
        body: "Grade checkers and pipe crews are in the work zone all day, exactly where operators can't see them — behind the counterweight, beside the blade, in the swing radius.",
      },
      {
        title: "New operators, every phase",
        body: "Subs rotate on and off the job. A new operator doesn't know the site, the crew, or where the utilities run — and that's when incidents happen.",
      },
      {
        title: "Disputes you can't prove",
        body: "Rework claims, damaged utilities, 'who hit what' — without footage it's your word against the sub's, and it costs you either way.",
      },
    ],
    solutions: [
      {
        title: "In-cab alerts before a backover",
        body: "Computer vision classifies people vs. equipment and warns the operator in real time when a worker is in the danger zone — not after.",
      },
      {
        title: "360° GPS-tagged record",
        body: "Every machine carries a complete, time- and location-stamped view. Isolate footage by area on the map to settle a rework dispute in minutes.",
      },
      {
        title: "Mark utilities on the map",
        body: "Flag overhead lines and buried utilities so operators get warned in-cab as they approach — even the ones who've never been on this site.",
      },
    ],
    outcomes: [
      "Prevent a backover or struck-by before it happens",
      "Document utility locates and near-misses for your safety file",
      "Resolve rework and damage disputes with footage, not arguments",
      "Lower your EMR and insurance exposure with proof your controls work",
    ],
    heroVideo: ASSETS.importantObjectsVideo,
    ctaHeadline: "See Dozer catch a near-miss on a grading site — book a 15-min intro",
  },
  {
    slug: "aggregates",
    name: "Aggregates",
    title: "Aggregate & Quarry Safety Cameras — Haul Truck & Loader Proximity",
    metaDescription:
      "Dozer.ai proximity detection for quarries and pits: protect spotters and light vehicles around haul trucks and wheel loaders, cut collisions at pinch points, and keep production moving.",
    heroKicker: "For quarries, pits & aggregate producers",
    heroHeadline: "Constant truck traffic. Zero room for a blind-spot collision.",
    heroSub:
      "At the face and around the crusher, loaders and haul trucks move all shift in tight, dusty pinch points. Dozer's proximity detection gives operators a virtual spotter and an in-cab alert before contact.",
    equipment: ["Wheel loaders", "Haul trucks", "Excavators", "Water trucks"],
    pains: [
      {
        title: "Pinch points everywhere",
        body: "Load-and-carry cycles put loaders and trucks nose-to-tail at the face, the stockpile, and the crusher — the exact spots where a light vehicle or person disappears from view.",
      },
      {
        title: "Dust kills visibility",
        body: "Mirrors and a backup camera aren't enough when the air is full of fines and you're reversing a loaded truck in the same path all day.",
      },
      {
        title: "Production pressure",
        body: "Tons-per-hour targets push cycle times. A single collision or stand-down wipes out a shift of production and ties up a machine.",
      },
    ],
    solutions: [
      {
        title: "Proximity alerts at centimeter accuracy",
        body: "Point-cloud measurement assesses distance in real time and warns the operator as a vehicle or person enters the danger zone — through the dust.",
      },
      {
        title: "360° coverage on the big iron",
        body: "Spherical vision covers the full perimeter of a loader or haul truck, including the deep blind spots mirrors never reach.",
      },
      {
        title: "Track productivity, not just safety",
        body: "GPS-tagged footage and the fleet dashboard show cycle times and where work happened — turning the safety system into an operations tool.",
      },
    ],
    outcomes: [
      "Cut vehicle-to-vehicle and struck-by collisions at the face and crusher",
      "Protect light vehicles and spotters around loaded haul trucks",
      "Avoid the stand-down: keep production moving",
      "Use footage to coach operators and optimize cycle times",
    ],
    heroVideo: ASSETS.proximityVideo,
    ctaHeadline: "Stop a pinch-point collision before it costs a shift — book a 15-min intro",
  },
  {
    slug: "demolition",
    name: "Demolition",
    title: "Demolition Safety Cameras — High-Reach Excavator Blind-Spot Detection",
    metaDescription:
      "Dozer.ai cameras for demolition contractors: monitor exclusion zones, protect spotters and ground crews around high-reach excavators, and document every event in a high-hazard teardown.",
    heroKicker: "For demolition contractors",
    heroHeadline: "Hold the exclusion zone — even when nobody's watching it",
    heroSub:
      "Teardown is the highest-hazard work there is: falling debris, shifting structures, and crews moving in and out of the drop zone. Dozer puts a second set of eyes on every machine and alerts the operator when someone enters the danger area.",
    equipment: ["High-reach excavators", "Standard excavators", "Skid steers", "Wheel loaders"],
    pains: [
      {
        title: "Exclusion zones that move",
        body: "The danger area shifts as the structure comes down. A spotter can't be everywhere, and a worker who wanders in is in the worst possible place.",
      },
      {
        title: "Operators can't see the ground",
        body: "From the cab of a high-reach machine focused on the attachment, the crew below and behind is out of sight — and out of mind under production pressure.",
      },
      {
        title: "Incidents you have to defend",
        body: "When something goes wrong on a demo site, you need an objective record of what happened — for OSHA, for insurance, and for your own people.",
      },
    ],
    solutions: [
      {
        title: "Person-detection in the drop zone",
        body: "Computer vision classifies people in a chaotic, debris-filled scene and alerts the operator in-cab the instant a worker enters the danger area.",
      },
      {
        title: "360° awareness around the machine",
        body: "Spherical vision covers the full perimeter — the blind spots behind and beside a high-reach excavator that a spotter alone can't hold.",
      },
      {
        title: "Recorded, GPS-tagged events",
        body: "Every safety event is saved and tagged by location, giving you the documentation to review, train on, and defend.",
      },
    ],
    outcomes: [
      "Reinforce exclusion zones with automated person-detection",
      "Protect spotters and ground crews around high-reach machines",
      "Capture an objective record for OSHA and insurance",
      "Review near-misses to retrain crews before the next job",
    ],
    heroVideo: ASSETS.importantObjectsVideo,
    ctaHeadline: "Put a second set of eyes on every demo machine — book a 15-min intro",
  },
  {
    slug: "mining-landfill",
    name: "Mining / Landfill",
    title: "Mining & Landfill Safety Cameras — Haul Truck Collision Avoidance",
    metaDescription:
      "Dozer.ai collision avoidance for mining and landfill fleets: protect light vehicles and people around haul trucks and dozers, monitor edge and berm proximity, and run safer around the clock.",
    heroKicker: "For mining & landfill operations",
    heroHeadline: "Big iron, long shifts, and blind spots that can be fatal",
    heroSub:
      "Light vehicles, people, and 100-ton machines share the same haul roads and tip faces 24/7. Dozer's proximity detection and 360° vision give every operator a virtual spotter and a real-time alert before contact.",
    equipment: ["Haul trucks", "Dozers", "Wheel loaders", "Motor graders", "Compactors"],
    pains: [
      {
        title: "Vehicle interaction is the #1 risk",
        body: "A pickup beside a haul truck disappears entirely into the blind spot. Light-vehicle-to-heavy-equipment interaction is the hazard regulators and your insurer care about most.",
      },
      {
        title: "Edges, berms & the tip face",
        body: "Dozers and compactors work close to drop-offs and active faces where a misjudged distance has no margin for error.",
      },
      {
        title: "24/7, large, mixed fleets",
        body: "Around-the-clock operation, fatigue, and a fleet of mixed machines and operators mean the conditions for an incident are always present.",
      },
    ],
    solutions: [
      {
        title: "Collision-avoidance proximity alerts",
        body: "Centimeter-accurate proximity detection warns operators in real time when a light vehicle or person enters the danger zone — day or night.",
      },
      {
        title: "360° vision on every machine",
        body: "Spherical coverage eliminates the deep blind spots on haul trucks and dozers that mirrors and a single backup camera leave open.",
      },
      {
        title: "Fleet-wide dashboard & documentation",
        body: "Review safety events, footage, and proximity data by machine and map area across the whole site — the record you need for compliance reviews.",
      },
    ],
    outcomes: [
      "Reduce light-vehicle-to-heavy-equipment collisions",
      "Add a margin of safety at edges, berms, and the tip face",
      "Run safer around the clock with night-capable detection",
      "Document controls and events for regulatory and insurance review",
    ],
    heroVideo: ASSETS.proximityVideo,
    ctaHeadline: "Protect light vehicles around your fleet — book a 15-min intro",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
