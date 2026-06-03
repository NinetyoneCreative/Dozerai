import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";

const routes = [
  { path: "/", priority: 1 },
  { path: "/cameras", priority: 0.9 },
  { path: "/intelligence", priority: 0.9 },
  { path: "/dashboards", priority: 0.9 },
  { path: "/industries", priority: 0.8 },
  ...INDUSTRIES.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.8 })),
  { path: "/demo", priority: 0.95 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static build date; bump on meaningful content changes.
  const lastModified = new Date("2026-06-03");
  return routes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
