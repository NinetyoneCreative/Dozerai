/**
 * The three hardware SKUs. Shared by the homepage lineup, the /hardware grid,
 * and the /hardware/<slug> detail pages. None of these units are photographed
 * yet, so every card renders the hardware AssetSlot as a placeholder.
 *
 * Specs are the real published figures: 30m detection range, under 150ms edge
 * AI, under one hour install, IP-rated for dust/water/impact, OEM agnostic.
 * No price anywhere. No em dashes.
 */
import type { AssetKey } from "@/content/assets";

export interface SpecRow {
  label: string;
  value: string;
}

export interface HardwareSku {
  slug: "camera" | "edge-computer" | "tablet";
  name: string;
  /** One-line description for the lineup card. */
  tagline: string;
  /** Three short spec lines for the lineup card, in Share Tech Mono. */
  specs: string[];
  /** Slot handle in /content/assets.ts. */
  asset: AssetKey;
  href: string;
  /** SEO. */
  title: string;
  metaDescription: string;
  /** Detail-page opening paragraph. */
  overview: string;
  /** What it does, three points. */
  highlights: { title: string; body: string }[];
  /** Full spec table for the detail page. */
  specTable: SpecRow[];
  /** Gated spec-sheet PDF (placeholder until real files land). */
  specSheet: string;
}

export const HARDWARE: HardwareSku[] = [
  {
    slug: "camera",
    name: "360° Stereoscopic Camera",
    tagline: "Captures critical events happening around the machine.",
    specs: ["360° coverage", "30m detection range", "IP-rated: dust, water, impact"],
    asset: "hardwareCamera",
    href: "/hardware#camera",
    title: "360° Stereoscopic Camera for Heavy Equipment",
    metaDescription:
      "The Dozer AI 360-degree stereoscopic camera mounts on any heavy machine and measures the distance to people and objects up to 30 meters, IP-rated for dust, water, and impact.",
    overview:
      "The camera is how Dozer sees. Rugged stereoscopic units mount around the machine and use depth, not a single-lens guess, to measure how far away a person or object really is, out to 30 meters and in a full circle around the equipment.",
    highlights: [
      { title: "Stereoscopic depth", body: "Two lenses measure true distance, so the system tells a person apart from a dirt pile." },
      { title: "360-degree coverage", body: "Units cover every side of the machine, including the blind spots the mirrors miss." },
      { title: "Built for the field", body: "IP-rated housings take dust, water, and impact and keep working." },
    ],
    specTable: [
      { label: "Detection range", value: "Up to 30 meters" },
      { label: "Coverage", value: "360 degrees around the machine" },
      { label: "Depth sensing", value: "Stereoscopic, centimeter accurate" },
      { label: "Environmental rating", value: "IP-rated for dust, water, and impact" },
      { label: "Compatibility", value: "OEM agnostic, any make or model" },
      { label: "Install time", value: "Part of the under-one-hour install" },
    ],
    specSheet: "/spec-sheets/camera.pdf",
  },
  {
    slug: "edge-computer",
    name: "Onboard Edge Computer",
    tagline: "Runs the AI locally on the machine for real-time decisions.",
    specs: ["Under 150ms edge AI", "Runs on-machine, no cell needed", "Classifies people, machines, objects"],
    asset: "hardwareEdgeComputer",
    href: "/hardware#edge-computer",
    title: "Onboard Edge Computer for On-Machine AI",
    metaDescription:
      "The Dozer AI onboard edge computer runs detection locally on the machine in under 150 milliseconds, with no cell service required, classifying people, machines, and objects.",
    overview:
      "The edge computer is the brain on the machine. It runs the AI locally, so detection and in-cab alerts happen in under 150 milliseconds and keep working with no cell service at all. When the machine reaches coverage, events sync to the Command Center.",
    highlights: [
      { title: "Real-time on the machine", body: "Classification and alerts run under 150 milliseconds, fast enough to matter in the seat." },
      { title: "No connection required", body: "The AI runs on-machine, so a remote corridor with no signal is not a problem." },
      { title: "People, machines, objects", body: "The model separates workers from equipment and objects, so alerts fire on what counts." },
    ],
    specTable: [
      { label: "Inference latency", value: "Under 150 milliseconds" },
      { label: "Connectivity", value: "Runs fully on-machine, syncs when connected" },
      { label: "Classification", value: "People, machines, and objects" },
      { label: "Environmental rating", value: "IP-rated for dust, water, and impact" },
      { label: "Compatibility", value: "OEM agnostic, any make or model" },
      { label: "Install time", value: "Part of the under-one-hour install" },
    ],
    specSheet: "/spec-sheets/edge-computer.pdf",
  },
  {
    slug: "tablet",
    name: "In-Cabin Tablet",
    tagline: "Gives the operator real-time proximity alerts in the cab.",
    specs: ["FRONT / RIGHT / REAR feeds", "Audio and visual alerts", "Under one hour install"],
    asset: "hardwareTablet",
    href: "/hardware#tablet",
    title: "In-Cabin Tablet with Real-Time Proximity Alerts",
    metaDescription:
      "The Dozer AI in-cabin tablet shows FRONT, RIGHT, and REAR camera feeds with people and objects outlined and gives the operator audible and visual proximity alerts.",
    overview:
      "The tablet is what the operator sees. It shows the camera feeds around the machine with people, trucks, and equipment outlined and their distance on screen, and it warns the operator with sound and a clear visual the instant a hazard enters a blind spot.",
    highlights: [
      { title: "Every angle at once", body: "FRONT, RIGHT, and REAR feeds on one screen, so the operator does not choose which blind spot to watch." },
      { title: "Alerts that reach the seat", body: "Audible and visual warnings fire in the cab while there is still time to stop." },
      { title: "Fast to fit", body: "Mounts in the cab as part of the under-one-hour install, no drilling required." },
    ],
    specTable: [
      { label: "Feeds", value: "FRONT, RIGHT, and REAR on one screen" },
      { label: "Alerts", value: "Audible and visual, in the cab" },
      { label: "On-screen data", value: "Object outlines and distance readouts" },
      { label: "Environmental rating", value: "Built for the cab environment" },
      { label: "Compatibility", value: "OEM agnostic, any make or model" },
      { label: "Install time", value: "Under one hour, no drilling into the cab" },
    ],
    specSheet: "/spec-sheets/tablet.pdf",
  },
];

export function getHardware(slug: string): HardwareSku | undefined {
  return HARDWARE.find((h) => h.slug === slug);
}
