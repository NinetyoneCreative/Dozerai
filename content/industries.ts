/**
 * The six industry trades, one shared template at /industries/<slug>.
 *
 * Each entry has its OWN h1, its OWN opening paragraph naming the specific
 * hazards and machines of that trade, and its OWN three use cases mapped to
 * real Dozer capabilities (proximity detection, in-cab alerts, exclusion
 * zones, near-miss recording, cost codes, cycle times, utilization). No
 * invented features, no competitor names, no price, no em dashes.
 */

export interface UseCase {
  title: string;
  body: string;
}

export interface Industry {
  slug: string;
  /** Short nav/card name. */
  name: string;
  eyebrow: string;
  /** SEO title, carries a disambiguating noun. */
  title: string;
  metaDescription: string;
  h1: string;
  /** One-line card blurb for the index grid. */
  cardBlurb: string;
  /** Opening paragraph: the hazards and machines of this trade. */
  opening: string;
  /** Machines common to the trade, shown as chips. */
  machines: string[];
  /** Three use cases relevant to this trade. */
  useCases: UseCase[];
  /** Outcome bullets for this buyer. */
  outcomes: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "earthwork-grading",
    name: "Earthwork & Grading",
    eyebrow: "For earthwork and grading crews",
    title: "Earthwork & Grading Safety Cameras for Dozers and Graders",
    metaDescription:
      "Dozer AI puts 360-degree proximity detection on dozers, graders, and scrapers so grade crews on foot stay out of the blind spot, and turns the same footage into cycle times and utilization.",
    h1: "Keep grade crews out from under the blade.",
    cardBlurb: "Grade checkers on foot, all day, in the swing and behind the blade.",
    opening:
      "Earthwork moves fast and the crew is on foot in the middle of it. Grade checkers, pipe layers, and laborers work feet from dozers pushing blind over a berm, motor graders finishing to line, and scrapers cutting and filling on tight haul roads. The operator cannot see the ground behind the counterweight or beside the blade, and that is exactly where a struck-by happens.",
    machines: ["Dozers", "Motor graders", "Scrapers", "Excavators", "Compactors"],
    useCases: [
      {
        title: "A spotter on every blind side",
        body: "Stereoscopic cameras watch 360 degrees around the machine and warn the operator in the cab the instant a grade checker steps behind a reversing dozer or into a grader's path.",
      },
      {
        title: "Exclusion zones around active cuts",
        body: "Set a zone around a mass excavation or a fresh cut. Dozer flags any person who crosses it, so foot traffic and iron stay separated on a busy pad.",
      },
      {
        title: "Cut and fill you can measure",
        body: "The same cameras log machine hours by task, so you see cycle times on the haul road and utilization across the fleet, tied to a cost code.",
      },
    ],
    outcomes: [
      "Fewer struck-by near-misses around dozers and graders",
      "Documented proof when a checker was clear of the machine",
      "Cycle-time and utilization data on every grading push",
      "New operators supported from day one on an unfamiliar pad",
    ],
  },
  {
    slug: "underground-utility",
    name: "Underground Utility",
    eyebrow: "For underground utility contractors",
    title: "Underground Utility Safety Cameras for Excavators and Trenchers",
    metaDescription:
      "Dozer AI gives excavator and trencher operators 360-degree proximity alerts to protect pipe crews in and around the trench, with time-stamped footage of every near-miss.",
    h1: "Protect the crew working the trench.",
    cardBlurb: "Pipe crews in the trench, feet from a swinging bucket.",
    opening:
      "On a utility job the crew works right at the machine. Pipe layers are in the trench under the boom, a spotter stands at the excavator's swing, and a laborer steps around the counterweight to hook a pipe. Trenchers and vacuum excavators run in the same tight corridor. One blind swing or one backing skid steer is all it takes.",
    machines: ["Excavators", "Trenchers", "Vacuum excavators", "Skid steers", "Wheel loaders"],
    useCases: [
      {
        title: "Swing-radius awareness",
        body: "Dozer measures the distance from the bucket and counterweight to any person and warns the operator before the swing brings iron over the crew.",
      },
      {
        title: "Eyes into the trench line",
        body: "Rear and side cameras cover the spots the operator cannot see from the seat, so a laborer stepping in behind the machine is flagged right away.",
      },
      {
        title: "A record when a strike is disputed",
        body: "Every flagged event is clipped and time-stamped to the machine and location, so a near-miss or a utility strike is documented, not argued.",
      },
    ],
    outcomes: [
      "Fewer swing and backover near-misses at the trench",
      "Clear documentation for utility-strike and injury disputes",
      "Utilization by machine across scattered short-duration digs",
      "Faster onboarding for rotating sub crews",
    ],
  },
  {
    slug: "pipeline",
    name: "Pipeline",
    eyebrow: "For pipeline spread contractors",
    title: "Pipeline Construction Safety Cameras for Sidebooms and Excavators",
    metaDescription:
      "Dozer AI mounts proximity detection on sidebooms, excavators, and dozers so spread crews on the right-of-way stay clear of lifts, with utilization data across a remote corridor.",
    h1: "Keep the spread clear of the lift.",
    cardBlurb: "Right-of-way crews moving with sidebooms and strung pipe.",
    opening:
      "A pipeline spread is a moving line of iron and people. Sidebooms carry strung pipe over the ditch while crews line up joints below, excavators dig the trench ahead, and dozers grade the right-of-way. Work stretches for miles through remote corridors with no fixed infrastructure, so the safety system has to ride the machine and keep working without a signal.",
    machines: ["Sidebooms", "Excavators", "Dozers", "Bending machines", "Padding machines"],
    useCases: [
      {
        title: "Proximity around the sideboom lift",
        body: "Dozer flags a crew member who moves under or beside a strung joint and warns the operator, so the lift and the line crew stay separated.",
      },
      {
        title: "Detection with no cell service",
        body: "The AI runs on the machine, so proximity alerts work in a remote corridor with no coverage. Events sync when the spread reaches signal.",
      },
      {
        title: "Production across the right-of-way",
        body: "Machine activity becomes cycle times and utilization by station, so you see how the spread is actually moving, mile by mile.",
      },
    ],
    outcomes: [
      "Fewer struck-by and caught-between events on the ditch line",
      "Proximity alerts that work with no connection at all",
      "Utilization and progress by station across the spread",
      "One system on a mixed fleet of sidebooms and excavators",
    ],
  },
  {
    slug: "paving",
    name: "Paving",
    eyebrow: "For paving crews",
    title: "Paving Safety Cameras for Pavers, Rollers, and Milling Machines",
    metaDescription:
      "Dozer AI protects the paving train with 360-degree proximity alerts around pavers, rollers, and milling machines, and turns the footage into cycle times and utilization.",
    h1: "Protect the paving train and the crew on foot.",
    cardBlurb: "Workers on foot around rollers and haul trucks backing to the hopper.",
    opening:
      "The paving train packs people and machines into a few feet of live work. Rakers and screed hands walk beside the paver, rollers move forward and back over the same mat, and haul trucks back up to the hopper with a laborer guiding them. Milling ahead throws the same mix of foot traffic and iron, often with live traffic just past the cones.",
    machines: ["Asphalt pavers", "Rollers", "Milling machines", "Material transfer vehicles", "Haul trucks"],
    useCases: [
      {
        title: "Roller reversal alerts",
        body: "Dozer warns the operator when a worker is behind a roller changing direction, the moment that puts crews most at risk on the mat.",
      },
      {
        title: "Backing to the hopper",
        body: "Cameras watch the path between a backing haul truck and the paver, so the operator and the ground crew both get a warning before contact.",
      },
      {
        title: "Cycle times on the pull",
        body: "The system logs paver and roller hours by pull, so you see production and idle time against the plan for the day.",
      },
    ],
    outcomes: [
      "Fewer roller and haul-truck near-misses on the mat",
      "A record of proximity events near live traffic",
      "Production and idle time measured on every pull",
      "Consistent coverage across a mixed paving fleet",
    ],
  },
  {
    slug: "demolition",
    name: "Demolition",
    eyebrow: "For demolition contractors",
    title: "Demolition Safety Cameras for High-Reach Excavators and Loaders",
    metaDescription:
      "Dozer AI gives demolition operators 360-degree proximity detection around high-reach excavators and loaders, with time-stamped footage of ground-crew near-misses and haul cycles.",
    h1: "See the ground crew through the dust.",
    cardBlurb: "Ground crews and spotters near the machine, in dust and debris.",
    opening:
      "Demolition is loud, dusty, and tight. High-reach excavators bring structures down while ground crews wet dust, cut steel, and sort debris nearby. Loaders and skid steers muck out as haul trucks stage for load-out. The operator is watching the attachment up high, which is exactly when a laborer or a spotter drifts into the danger zone at ground level.",
    machines: ["High-reach excavators", "Skid steers", "Wheel loaders", "Dozers", "Haul trucks"],
    useCases: [
      {
        title: "Ground-level proximity while the boom is up",
        body: "While the operator focuses on the attachment overhead, Dozer watches ground level and warns the cab when a person enters the zone around the tracks.",
      },
      {
        title: "Exclusion zones near the drop",
        body: "Set a keep-out zone around an active pull or drop area. Dozer flags anyone who crosses it, so the fall zone stays clear.",
      },
      {
        title: "Load-out you can account for",
        body: "Truck and loader activity becomes cycle times and utilization, so you can track haul-off progress and cost by the load.",
      },
    ],
    outcomes: [
      "Fewer ground-crew near-misses around active demolition",
      "Documented keep-out compliance in the fall zone",
      "Haul-off cycle times and utilization by machine",
      "Coverage that holds up in dust and low light",
    ],
  },
  {
    slug: "mining",
    name: "Mining",
    eyebrow: "For mining and aggregate operations",
    title: "Mining Safety Cameras for Haul Trucks and Loaders",
    metaDescription:
      "Dozer AI puts 360-degree proximity detection on haul trucks, loaders, and excavators to separate light vehicles and people from heavy iron, with utilization data across the pit.",
    h1: "Separate light vehicles from heavy iron.",
    cardBlurb: "Pickups and people near haul trucks with huge blind spots.",
    opening:
      "In the pit the scale is the hazard. Haul trucks and large loaders have blind spots that swallow a pickup, and light vehicles, foot traffic, and service crews share the same benches and intersections. A truck pulling away from the shovel or backing to dump cannot see what is low and close, and the consequences at that size are severe.",
    machines: ["Haul trucks", "Wheel loaders", "Excavators", "Dozers", "Motor graders"],
    useCases: [
      {
        title: "Light-vehicle detection around haul trucks",
        body: "Dozer tells a pickup and a person apart from the muck pile and warns the operator when either is in the truck's blind spot at the shovel or the dump.",
      },
      {
        title: "Awareness at benches and intersections",
        body: "360-degree coverage gives the operator eyes on the low, close traffic that the mirrors miss on a haul road or at a busy intersection.",
      },
      {
        title: "Utilization across the pit",
        body: "Machine activity becomes utilization and cycle times by unit, so you see how the fleet is running shift over shift.",
      },
    ],
    outcomes: [
      "Fewer light-vehicle interactions in haul-truck blind spots",
      "A record of proximity events at benches and intersections",
      "Fleet utilization and cycle times across the pit",
      "One system on trucks, loaders, and support equipment",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
