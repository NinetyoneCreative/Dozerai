import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * Per-route metadata builder. Every page gets a unique, keyword-led title +
 * description + canonical + Open Graph, fixing the live site's reuse of one
 * generic meta everywhere. Keywords lead with buyer language and disambiguate
 * from the unrelated "Dozer" data-platform company.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Optional OG image override. */
  ogImage?: string;
}): Metadata {
  const url = `${SITE.url}${opts.path === "/" ? "" : opts.path}`;
  const ogImage = opts.ogImage ?? SITE.url + "/dozer-logo-public.png";
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Dozer.ai: Heavy Equipment Safety Cameras",
      title: opts.title,
      description: opts.description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage],
    },
  };
}
