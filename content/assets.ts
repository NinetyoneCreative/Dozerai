/**
 * Typed asset manifest for the product-first redesign.
 *
 * Most real assets are not ready. Every image on the site is a NAMED SLOT with
 * fixed pixel dimensions, rendered through <AssetSlot /> so a real file drops in
 * later without touching layout code (zero layout shift, dimensions are known
 * up front). This file is the single source of truth; ASSETS.md is generated
 * from it for the photographer and design team.
 *
 * The only four buckets, and the only things allowed in each:
 *  - hardware : the camera unit, edge computer, in-cabin tablet, brackets.
 *               Neutral/white background. None exist yet -> all placeholders.
 *  - ui       : real Command Center screenshots, shown inside a browser frame.
 *  - incab    : the in-cabin tablet showing FRONT / RIGHT / REAR feeds with
 *               PERSON / TRUCK / REAR BODY boxes and distance readouts.
 *  - footage  : real Smith Denison jobsite stills or video. Backgrounds only.
 *
 * If a section seems to need an image and none of the four buckets fits, use
 * type and whitespace instead. Do not invent or source an alternative.
 */

export type AssetBucket = "hardware" | "ui" | "incab" | "footage";

export interface AssetSpec {
  /** Stable slot id, unique across the site. */
  id: string;
  bucket: AssetBucket;
  width: number;
  height: number;
  /** Descriptive alt for the real asset. Never "image of camera". */
  alt: string;
  /** Page + section where the slot appears (drives ASSETS.md). */
  location: string;
  /** Intended final medium. "video" slots ship a looping muted clip. */
  media: "image" | "video";
  /** Real still, once delivered (public path or remote URL). */
  src?: string;
  /** Real looping clip, once delivered. */
  video?: string;
  /** Poster frame for a video slot. */
  poster?: string;
}

/**
 * Slots are keyed by a camelCase handle so pages can spread one entry:
 *   <AssetSlot {...ASSETS.heroIncab} />
 * Add new slots here as pages are built; keep ids kebab-case and unique.
 */
export const ASSETS = {
  // ---- Home / Hero -------------------------------------------------------
  heroIncab: {
    id: "hero-incab",
    bucket: "incab",
    width: 1200,
    height: 900,
    media: "video",
    location: "Home / Hero (right)",
    alt: "The in-cabin tablet showing live FRONT, RIGHT, and REAR camera feeds, with a worker on foot and a haul truck outlined by detection boxes and distance readouts",
  },
  heroHardware: {
    id: "hero-hardware",
    bucket: "hardware",
    width: 400,
    height: 400,
    media: "image",
    location: "Home / Hero (overlapping bottom-left)",
    alt: "The Dozer AI 360-degree stereoscopic camera unit, a rugged sensor bar that mounts to heavy equipment",
  },

  // ---- Home / What the operator sees ------------------------------------
  operatorIncab: {
    id: "operator-incab",
    bucket: "incab",
    width: 1600,
    height: 1000,
    media: "video",
    location: "Home / What the operator sees",
    alt: "The in-cabin tablet during a swing, a worker on foot flagged in the rear camera feed with a live distance readout",
  },

  // ---- Home / What the office sees --------------------------------------
  officeDashboard: {
    id: "office-dashboard",
    bucket: "ui",
    width: 1600,
    height: 1000,
    media: "image",
    location: "Home / What the office sees",
    alt: "The Command Center dashboard showing live machine locations on a site map, utilization, and a feed of flagged safety events",
  },

  // ---- Home / Two suites -------------------------------------------------
  suiteSafetyUi: {
    id: "suite-safety-ui",
    bucket: "ui",
    width: 800,
    height: 600,
    media: "image",
    location: "Home / Two suites (Safety card)",
    alt: "The safety event dashboard listing time-stamped proximity events by machine, with a near-miss clip selected",
  },
  suiteProductivityUi: {
    id: "suite-productivity-ui",
    bucket: "ui",
    width: 800,
    height: 600,
    media: "image",
    location: "Home / Two suites (Productivity card)",
    alt: "The productivity dashboard showing cycle times, utilization, and cost codes broken out by machine and shift",
  },

  // ---- Home / Hardware lineup + /hardware SKU cards ----------------------
  hardwareCamera: {
    id: "hardware-camera",
    bucket: "hardware",
    width: 600,
    height: 600,
    media: "image",
    location: "Home / Hardware lineup; /hardware; /hardware#camera",
    alt: "The 360-degree stereoscopic camera unit on a neutral background, showing its dual lenses and rugged housing",
  },
  hardwareEdgeComputer: {
    id: "hardware-edge-computer",
    bucket: "hardware",
    width: 600,
    height: 600,
    media: "image",
    location: "Home / Hardware lineup; /hardware; /hardware#edge-computer",
    alt: "The onboard edge computer that runs detection locally on the machine, on a neutral background",
  },
  hardwareTablet: {
    id: "hardware-tablet",
    bucket: "hardware",
    width: 600,
    height: 600,
    media: "image",
    location: "Home / Hardware lineup; /hardware; /hardware#tablet",
    alt: "The in-cabin tablet on a neutral background, showing the camera-feed interface used by the operator",
  },

  // ---- Home / How it works (optional) -----------------------------------
  systemDiagram: {
    id: "system-diagram",
    bucket: "ui",
    width: 1400,
    height: 600,
    media: "image",
    location: "Home / How it works (optional); /solution",
    alt: "A diagram of the Dozer AI system, from cameras and the edge computer on the machine to the in-cab tablet and the Command Center",
  },

  // ---- /solution : the system, end to end --------------------------------
  productIncab: {
    id: "product-incab",
    bucket: "incab",
    width: 1200,
    height: 900,
    media: "video",
    location: "/solution / Hero",
    alt: "The in-cabin tablet showing all camera feeds with people and equipment outlined, as the operator works",
  },

  // ---- /solution#safety --------------------------------------------------
  safetyIncab: {
    id: "safety-incab",
    bucket: "incab",
    width: 1200,
    height: 900,
    media: "video",
    location: "/solution#safety / Hero",
    alt: "The in-cabin tablet flagging a worker on foot in a blind spot with a distance readout and an alert",
  },
  safetyDashboard: {
    id: "safety-dashboard",
    bucket: "ui",
    width: 1400,
    height: 900,
    media: "image",
    location: "/solution#safety / Safety event dashboard",
    alt: "The safety event dashboard listing time-stamped proximity events by machine, site, and shift",
  },

  // ---- /solution#productivity -------------------------------------------
  productivityDashboard: {
    id: "productivity-dashboard",
    bucket: "ui",
    width: 1400,
    height: 900,
    media: "image",
    location: "/solution#productivity / Hero dashboard",
    alt: "The productivity dashboard showing utilization, cycle times, and cost codes by machine and shift",
  },
  productivityReport: {
    id: "productivity-report",
    bucket: "ui",
    width: 1200,
    height: 800,
    media: "image",
    location: "/solution#productivity / AI reporting",
    alt: "An automated jobsite summary in the Command Center, flagging the day's exceptions",
  },

  // ---- /platform : Command Center ---------------------------------------
  platformDashboard: {
    id: "platform-dashboard",
    bucket: "ui",
    width: 1600,
    height: 1000,
    media: "image",
    location: "/platform / Hero",
    alt: "The Command Center overview with a live site map, machine list, and a feed of flagged events",
  },
  platformMap: {
    id: "platform-map",
    bucket: "ui",
    width: 1200,
    height: 800,
    media: "image",
    location: "/platform / Live operations",
    alt: "The live operations map showing every machine's location and current activity across the site",
  },
  platformReport: {
    id: "platform-report",
    bucket: "ui",
    width: 1200,
    height: 800,
    media: "image",
    location: "/platform / Automated reporting",
    alt: "An automated daily site summary in the Command Center with utilization and exception alerts",
  },
} satisfies Record<string, AssetSpec>;

export type AssetKey = keyof typeof ASSETS;
