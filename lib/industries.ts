import { ASSETS } from "@/lib/site";

/**
 * Industry / vertical landing-page content. Each entry powers a conversion
 * funnel at /industries/<slug>:
 *   Hero (pain-led) → "sound familiar?" pains → how Dozer fits →
 *   outcomes/ROI → proof → pricing/risk-reversal → CTA band.
 *
 * Copy reuses Dozer's REAL capabilities (360° vision, proximity detection,
 * in-cab alerts, object classification, GPS-tagged footage, dashboards) and
 * frames the context/pain for each vertical, no invented features.
 */

export interface Industry {
  slug: string;
  /** Short nav/card name. */
  name: string;
  /** One-line blurb for the homepage industries grid. */
  gridBlurb: string;
  /** SEO <title> (keyword-led, buyer language). */
  title: string;
  metaDescription: string;
  heroKicker: string;
  heroHeadline: string;
  heroSub: string;
  /** Machines common to this vertical (shown as chips). */
  equipment: string[];
  /** "Sound familiar?", the specific hazards/costs of this environment. */
  pains: { title: string; body: string }[];
  /** How Dozer fits, real features mapped to this environment. */
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
    gridBlurb: "Grading, earthmoving, and site work where ground crews and machines share tight space.",
    title: "Heavy Civil Safety Cameras, Excavator & Dozer Blind-Spot Detection",
    metaDescription:
      "Dozer.ai blind-spot cameras for heavy-civil contractors: protect grade crews on foot, prevent excavator and dozer backovers, and document utility strikes, on every machine on site.",
    heroKicker: "For heavy-civil contractors",
    heroHeadline: "Keep your ground crews out from under the iron",
    heroSub:
      "Checkers, pipe layers, and laborers work feet from swinging excavators and backing dozers. Dozer gives every operator a 360° virtual spotter and an in-cab alert the moment a person enters a blind spot.",
    equipment: ["Excavators", "Dozers", "Motor graders", "Wheel loaders", "Haul trucks"],
    pains: [
      {
        title: "People on foot, machines in motion",
        body: "Grade checkers and pipe crews are in the work zone all day, exactly where operators can't see them, behind the counterweight, beside the blade, in the swing radius.",
      },
      {
        title: "New operators, every phase",
        body: "Subs rotate on and off the job. A new operator doesn't know the site, the crew, or where the utilities run, and that's when incidents happen.",
      },
      {
        title: "Disputes you can't prove",
        body: "Rework claims, damaged utilities, 'who hit what', without footage it's your word against the sub's, and it costs you either way.",
      },
    ],
    solutions: [
      {
        title: "In-cab alerts before a backover",
        body: "Computer vision classifies people vs. equipment and warns the operator in real time when a worker is in the danger zone, not after.",
      },
      {
        title: "360° GPS-tagged record",
        body: "Every machine carries a complete, time- and location-stamped view. Isolate footage by area on the map to settle a rework dispute in minutes.",
      },
      {
        title: "Mark utilities on the map",
        body: "Flag overhead lines and buried utilities so operators get warned in-cab as they approach, even the ones who've never been on this site.",
      },
    ],
    outcomes: [
      "Prevent a backover or struck-by before it happens",
      "Document utility locates and near-misses for your safety file",
      "Resolve rework and damage disputes with footage, not arguments",
      "Lower your EMR and insurance exposure with proof your controls work",
    ],
    heroVideo: ASSETS.importantObjectsVideo,
    ctaHeadline: "See Dozer catch a near-miss on a grading site, book a 15-min intro",
  },
  {
    slug: "aggregates",
    name: "Aggregates",
    gridBlurb: "Quarries and pits with constant haul-truck traffic, loaders, and pinch points.",
    title: "Aggregate & Quarry Safety Cameras, Haul Truck & Loader Proximity",
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
        body: "Load-and-carry cycles put loaders and trucks nose-to-tail at the face, the stockpile, and the crusher, the exact spots where a light vehicle or person disappears from view.",
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
        body: "Point-cloud measurement assesses distance in real time and warns the operator as a vehicle or person enters the danger zone, through the dust.",
      },
      {
        title: "360° coverage on the big iron",
        body: "Spherical vision covers the full perimeter of a loader or haul truck, including the deep blind spots mirrors never reach.",
      },
      {
        title: "Track productivity, not just safety",
        body: "GPS-tagged footage and the fleet dashboard show cycle times and where work happened, turning the safety system into an operations tool.",
      },
    ],
    outcomes: [
      "Cut vehicle-to-vehicle and struck-by collisions at the face and crusher",
      "Protect light vehicles and spotters around loaded haul trucks",
      "Avoid the stand-down: keep production moving",
      "Use footage to coach operators and optimize cycle times",
    ],
    heroVideo: ASSETS.proximityVideo,
    ctaHeadline: "Stop a pinch-point collision before it costs a shift, book a 15-min intro",
  },
  {
    slug: "demolition",
    name: "Demolition",
    gridBlurb: "High-hazard teardown with falling debris, spotters, and shifting exclusion zones.",
    title: "Demolition Safety Cameras, High-Reach Excavator Blind-Spot Detection",
    metaDescription:
      "Dozer.ai cameras for demolition contractors: monitor exclusion zones, protect spotters and ground crews around high-reach excavators, and document every event in a high-hazard teardown.",
    heroKicker: "For demolition contractors",
    heroHeadline: "Hold the exclusion zone, even when nobody's watching it",
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
        body: "From the cab of a high-reach machine focused on the attachment, the crew below and behind is out of sight, and out of mind under production pressure.",
      },
      {
        title: "Incidents you have to defend",
        body: "When something goes wrong on a demo site, you need an objective record of what happened, for OSHA, for insurance, and for your own people.",
      },
    ],
    solutions: [
      {
        title: "Person-detection in the drop zone",
        body: "Computer vision classifies people in a chaotic, debris-filled scene and alerts the operator in-cab the instant a worker enters the danger area.",
      },
      {
        title: "360° awareness around the machine",
        body: "Spherical vision covers the full perimeter, the blind spots behind and beside a high-reach excavator that a spotter alone can't hold.",
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
    heroVideo: ASSETS.camerasHeroVideo,
    ctaHeadline: "Put a second set of eyes on every demo machine, book a 15-min intro",
  },
  {
    slug: "mining-landfill",
    name: "Mining / Landfill",
    gridBlurb: "Large fleets, long sightlines, and 24/7 operation where blind spots are deadly.",
    title: "Mining & Landfill Safety Cameras, Haul Truck Collision Avoidance",
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
        body: "Centimeter-accurate proximity detection warns operators in real time when a light vehicle or person enters the danger zone, day or night.",
      },
      {
        title: "360° vision on every machine",
        body: "Spherical coverage eliminates the deep blind spots on haul trucks and dozers that mirrors and a single backup camera leave open.",
      },
      {
        title: "Fleet-wide dashboard & documentation",
        body: "Review safety events, footage, and proximity data by machine and map area across the whole site, the record you need for compliance reviews.",
      },
    ],
    outcomes: [
      "Reduce light-vehicle-to-heavy-equipment collisions",
      "Add a margin of safety at edges, berms, and the tip face",
      "Run safer around the clock with night-capable detection",
      "Document controls and events for regulatory and insurance review",
    ],
    heroVideo: ASSETS.intelligenceHeroVideo,
    ctaHeadline: "Protect light vehicles around your fleet, book a 15-min intro",
  },
  {
    slug: "underground-utilities",
    name: "Underground Utilities",
    gridBlurb: "Trenching and pipe work where crews on foot share tight ground with excavators.",
    title: "Underground Utility Safety Cameras, Excavator & Trench Proximity Detection",
    metaDescription:
      "Dozer.ai cameras for underground utility contractors: protect crews on foot around excavators and open trenches, prevent strikes and backovers, and document every dig.",
    heroKicker: "For underground utility contractors",
    heroHeadline: "Protect the crew working beside the trench",
    heroSub:
      "Locators, laborers, and pipe crews work inches from swinging excavators and backing trucks over open ground. Dozer gives every operator a virtual spotter and an in-cab alert the moment a person is in the danger zone.",
    equipment: ["Excavators", "Backhoes", "Trenchers", "Wheel loaders", "Vacuum trucks"],
    pains: [
      {
        title: "Crews in the trench and at the edge",
        body: "Laborers and pipe setters work in and around an open trench, exactly where the operator can't see them.",
      },
      {
        title: "Backing trucks and blind swings",
        body: "Spoil trucks, vac trucks, and swinging booms move over the same narrow corridor all day.",
      },
      {
        title: "Strikes you have to answer for",
        body: "A struck line or a struck-by incident means a stand-down, a claim, and questions you need footage to answer.",
      },
    ],
    solutions: [
      {
        title: "In-cab alerts before contact",
        body: "Computer vision classifies people vs. equipment and warns the operator in real time when a worker is in the swing or backing path.",
      },
      {
        title: "360° GPS-tagged record of the dig",
        body: "Every machine keeps a complete, time- and location-stamped view. Isolate footage by area to document the work or settle a dispute.",
      },
      {
        title: "Mark utilities and hazards on the map",
        body: "Flag located lines and overhead hazards so operators get warned in-cab as they approach.",
      },
    ],
    outcomes: [
      "Prevent struck-by and backover incidents at the trench",
      "Document locates, potholing, and near-misses for your safety file",
      "Resolve damage and rework disputes with footage",
      "Lower your EMR and insurance exposure",
    ],
    heroVideo: ASSETS.proximityVideo,
    ctaHeadline: "Keep your trench crews safe, book a 15-min intro",
  },
  {
    slug: "road-highway",
    name: "Road & Highway",
    gridBlurb: "Active work zones where crews, equipment, and live traffic share the road.",
    title: "Road & Highway Construction Safety Cameras, Work Zone Proximity Detection",
    metaDescription:
      "Dozer.ai cameras for road and highway contractors: protect flaggers and crews in active work zones, prevent equipment and intruding-traffic incidents, and track paving productivity.",
    heroKicker: "For road & highway contractors",
    heroHeadline: "Keep the work zone safe with traffic feet away",
    heroSub:
      "Paving crews, flaggers, and graders work with live traffic on one side and heavy equipment on the other. Dozer watches every machine's blind spots and warns operators before contact.",
    equipment: ["Pavers", "Rollers", "Motor graders", "Milling machines", "Haul trucks"],
    pains: [
      {
        title: "Live traffic on an open work zone",
        body: "Vehicles pass feet from your crew, and one distracted driver or blind backing move becomes a fatality.",
      },
      {
        title: "Crews on foot around the paver",
        body: "Rakers, screed hands, and grade checkers move constantly around moving equipment.",
      },
      {
        title: "Night work and low visibility",
        body: "Much of the work happens at night, when mirrors and a backup camera aren't enough.",
      },
    ],
    solutions: [
      {
        title: "In-cab alerts for people and vehicles",
        body: "Real-time warnings when a worker, or an intruding vehicle, enters the danger zone around a machine.",
      },
      {
        title: "360° coverage day or night",
        body: "Spherical vision covers the full perimeter of pavers, rollers, and trucks, including the deep blind spots.",
      },
      {
        title: "Track paving productivity",
        body: "GPS-tagged footage and the dashboard show cycle times and where work happened across the job.",
      },
    ],
    outcomes: [
      "Prevent work-zone struck-by and backover incidents",
      "Protect flaggers and crews from intruding traffic",
      "Keep paving trains moving with fewer stand-downs",
      "Document incidents for DOT and insurance review",
    ],
    heroVideo: ASSETS.importantObjectsVideo,
    ctaHeadline: "Protect your work zone, book a 15-min intro",
  },
  {
    slug: "oil-gas-pipeline",
    name: "Oil, Gas & Pipeline",
    gridBlurb: "Well pads and pipeline right-of-ways with crews working around big iron.",
    title: "Oil, Gas & Pipeline Safety Cameras, Heavy Equipment Proximity Detection",
    metaDescription:
      "Dozer.ai cameras for oil, gas, and pipeline contractors: protect crews around excavators, sidebooms, and cranes on remote pads and right-of-ways, and document every event.",
    heroKicker: "For oil, gas & pipeline contractors",
    heroHeadline: "A virtual spotter on every machine on the right-of-way",
    heroSub:
      "Pipeline spreads and well-pad work put crews on foot around excavators, sidebooms, and cranes, often on remote sites far from help. Dozer alerts operators before a person is in harm's way.",
    equipment: ["Excavators", "Sidebooms", "Dozers", "Cranes", "Haul trucks"],
    pains: [
      {
        title: "Crews around lifts and lowering-in",
        body: "Pipe crews work directly under and beside sidebooms and cranes during lowering-in.",
      },
      {
        title: "Remote sites, high stakes",
        body: "An incident far from help is worse, and regulators and clients scrutinize your safety record.",
      },
      {
        title: "Long spreads, many machines",
        body: "Equipment strung along miles of right-of-way makes consistent spotting hard.",
      },
    ],
    solutions: [
      {
        title: "Proximity alerts during critical lifts",
        body: "Real-time warnings when a worker enters the danger zone around a machine or a suspended load.",
      },
      {
        title: "360° coverage on every machine",
        body: "Spherical vision covers the blind spots on excavators, sidebooms, and cranes.",
      },
      {
        title: "One record across the spread",
        body: "Review safety events and footage by machine and location for compliance and client reporting.",
      },
    ],
    outcomes: [
      "Reduce struck-by and caught-between incidents on the spread",
      "Protect crews during lifts and lowering-in",
      "Document controls and events for regulators and clients",
      "Run safer on remote sites",
    ],
    heroVideo: ASSETS.camerasHeroVideo,
    ctaHeadline: "Protect your pipeline crews, book a 15-min intro",
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    gridBlurb: "Utility-scale solar and wind builds with large fleets on tight timelines.",
    title: "Solar & Wind Construction Safety Cameras, Heavy Equipment Proximity Detection",
    metaDescription:
      "Dozer.ai cameras for solar and wind farm construction: protect crews around earthmoving equipment and cranes on large, fast-moving renewable-energy sites.",
    heroKicker: "For solar & wind farm builders",
    heroHeadline: "Move fast on the build without losing sight of the crew",
    heroSub:
      "Utility-scale solar and wind sites run huge fleets of earthmoving equipment and cranes on tight schedules. Dozer keeps a virtual spotter on every machine so speed never costs safety.",
    equipment: ["Excavators", "Dozers", "Motor graders", "Cranes", "Pile drivers"],
    pains: [
      {
        title: "Large fleets, tight schedules",
        body: "Aggressive timelines push cycle times across hundreds of acres and dozens of machines.",
      },
      {
        title: "Crews around grading and piling",
        body: "Laborers and installers work around graders, excavators, and pile drivers all shift.",
      },
      {
        title: "Cranes and turbine lifts",
        body: "Wind work adds high-stakes crane lifts with crews working below.",
      },
    ],
    solutions: [
      {
        title: "In-cab alerts across the fleet",
        body: "Real-time warnings when a person enters the danger zone around any machine.",
      },
      {
        title: "360° coverage on every machine",
        body: "Spherical vision covers the blind spots on earthmoving equipment and cranes.",
      },
      {
        title: "Track productivity across the site",
        body: "GPS-tagged activity and the dashboard show utilization and cycle times across the build.",
      },
    ],
    outcomes: [
      "Prevent struck-by and backover incidents on the build",
      "Protect crews around grading, piling, and lifts",
      "Keep an aggressive schedule without cutting safety",
      "Measure utilization across a large fleet",
    ],
    heroVideo: ASSETS.intelligenceHeroVideo,
    ctaHeadline: "Build safer and faster, book a 15-min intro",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
