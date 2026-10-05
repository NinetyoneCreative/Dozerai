import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { INDUSTRIES } from "@/content/industries";

const routes = [
  { path: "/", priority: 1 },
  { path: "/solution", priority: 0.9 },
  { path: "/hardware", priority: 0.8 },
  { path: "/platform", priority: 0.8 },
  { path: "/industries", priority: 0.8 },
  ...INDUSTRIES.map((i) => ({ path: `/industries/${i.slug}`, priority: 0.8 })),
  { path: "/pilot", priority: 0.9 },
  { path: "/company", priority: 0.5 },
  { path: "/demo", priority: 0.95 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-09");
  return routes.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
