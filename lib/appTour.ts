/**
 * Content for the desktop-app tour on /product. Each view is an animated GIF
 * built from real Dozer app screenshots (public/product-tour/), mirroring the
 * app's own sidebar: Home, Jobsites, Assets, Events, and Analytics with its
 * four tabs. `duration` is the GIF length in seconds (one full loop).
 */

export interface TourView {
  id: string;
  /** Tab label. */
  label: string;
  title: string;
  body: string;
  points: string[];
  gif: string;
  /** Still first frame, shown when the visitor prefers reduced motion. */
  still: string;
  alt: string;
  duration: number;
}

export interface TourSection {
  id: string;
  label: string;
  /** Analytics has sub-tabs, matching the app's 01–04 tabs. */
  views: TourView[];
}

const media = (name: string) => ({
  gif: `/product-tour/app-${name}.gif`,
  still: `/product-tour/app-${name}.jpg`,
});

export const APP_TOUR: TourSection[] = [
  {
    id: "home",
    label: "Home",
    views: [
      {
        id: "home",
        label: "Home",
        title: "Your whole operation, the minute you log in",
        body: "Home puts the day on one screen: a live feed from the field, headline metrics for each jobsite, an AI-written site summary, and the latest safety events with video.",
        points: [
          "Metric tiles for active assets, utilization, runtime, and top cost code",
          "Morning and midday site summaries, written for you from the day's footage",
          "Cost-code burnup and at-risk events with clips, side by side",
        ],
        ...media("home"),
        alt: "Dozer app Home screen scrolling through metric tiles, the site map, the AI site summary, cost-code burnup, and safety events.",
        duration: 13.5,
      },
    ],
  },
  {
    id: "jobsites",
    label: "Jobsites",
    views: [
      {
        id: "jobsites",
        label: "Jobsites",
        title: "Every jobsite, mapped and summarized",
        body: "Each jobsite gets its own geofenced map, a timeline of the day you can scrub through, and a site summary that breaks the work down by machine.",
        points: [
          "Assets, At Risk, and Timeline views for every site",
          "Midday check-ins with a video recap of what got done",
          "Cost-code totals, idle timebands, and proximity events by asset",
        ],
        ...media("jobsites"),
        alt: "Dozer app Jobsites screens: the jobsite list, a jobsite map with its assets, at-risk events, timeline, and site summary charts.",
        duration: 21.3,
      },
    ],
  },
  {
    id: "assets",
    label: "Assets",
    views: [
      {
        id: "assets",
        label: "Assets",
        title: "Every machine, with its own camera and record",
        body: "Open any excavator or loader to see what its camera sees, how long it ran, what it worked on, and how close things got to it.",
        points: [
          "Live camera view alongside runtime, utilization, and top cost code",
          "A daily summary with a video recap and the materials on site",
          "Proximity distance: closest approach, average, and most common",
        ],
        ...media("assets"),
        alt: "Dozer app Assets screens: the asset list, an asset's live camera view and timeline, its daily summary, and its proximity distance chart.",
        duration: 13.5,
      },
    ],
  },
  {
    id: "events",
    label: "Events",
    views: [
      {
        id: "events",
        label: "Events",
        title: "Every event, clipped and searchable",
        body: "Every proximity event is saved with the clip, the camera that caught it, and a risk score, so you can find and review exactly what happened.",
        points: [
          "Filter by jobsite, asset, camera position, event type, distance, and risk",
          "Play the clip right from the list",
          "Separate event types for people, vehicles, barriers, and buildings",
        ],
        ...media("events"),
        alt: "Dozer app Events screens: the event list, a proximity clip playing, and the event-type filter.",
        duration: 8.3,
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    views: [
      {
        id: "runtime",
        label: "Assets & Runtime",
        title: "Where did the fleet's time go?",
        body: "Fleet-wide analytics across every jobsite, starting with how many machines worked, how long engines ran, and how much of that time they sat still.",
        points: [
          "Machines working, total engine hours, and time sitting still",
          "A heat map of where assets spent the most time working",
          "Hours each asset ran, busiest first",
        ],
        ...media("runtime"),
        alt: "Dozer Analytics, Assets & Runtime tab: fleet metrics, a heat map of where assets worked, and hours by asset.",
        duration: 5.7,
      },
      {
        id: "idle",
        label: "Idle & Downtime",
        title: "When and where did assets sit idle?",
        body: "See how much engine time turned into real work, which machines sat the longest, and when the stops happened.",
        points: [
          "Time doing real work versus time wasted with the engine on",
          "Ranked and timeband views of every stop, by asset",
          "Idle growth over the week, and a map of where the waiting happened",
        ],
        ...media("idle"),
        alt: "Dozer Analytics, Idle & Downtime tab: idle metrics, time each asset sat still, a stops timeline, and idle growth.",
        duration: 8.3,
      },
      {
        id: "production",
        label: "Production",
        title: "What did we work on?",
        body: "Hours are tied to cost codes automatically, so you can see what the fleet actually worked on, where, and how steadily.",
        points: [
          "The cost code with the most hours, and work-effort consistency",
          "A map of where each cost code was worked",
          "Hours by cost code, and a running total of allocated hours",
        ],
        ...media("production"),
        alt: "Dozer Analytics, Production tab: top cost code, a cost-code map, hours by cost code, and hours allocated over time.",
        duration: 8.3,
      },
      {
        id: "safety",
        label: "Safety",
        title: "How safe was the site?",
        body: "Every at-risk event across the fleet, measured: how often they happen, how far inside the safety zone they get, and what got close.",
        points: [
          "At-risk events, the rate per engine hour, and average depth into the zone",
          "What got close, people versus vehicles, by zone",
          "When events spike, by hour and by asset",
        ],
        ...media("safety"),
        alt: "Dozer Analytics, Safety tab: at-risk event metrics, events by asset, zone depth, what got close, and events by hour.",
        duration: 16.1,
      },
    ],
  },
];

/** The in-cab operator tablet. */
export const TABLET_VIEW = {
  gif: "/product-tour/tablet-operator-view.gif",
  still: "/product-tour/tablet-operator-view.jpg",
  alt: "Dozer in-cab tablet showing front, right, and rear camera feeds around a top-down view of an excavator, with a truck and car boxed and labeled with distance as the zones turn orange and red.",
};
