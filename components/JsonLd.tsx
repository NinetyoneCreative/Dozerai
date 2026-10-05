import { SITE, SOCIAL_LINKS } from "@/lib/site";
import type { FaqItem } from "@/content/faq";

/**
 * JSON-LD structured data. Organization is rendered site-wide; Product is
 * rendered per product page. Both lean on heavy-equipment-safety language so
 * search engines separate Dozer.ai (safety cameras) from the unrelated data
 * platform of the same name.
 */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dozer AI",
    alternateName: ["Dozer.ai", "Dozer"],
    url: SITE.url,
    logo: SITE.url + "/dozer-logo-public.png",
    description: SITE.description,
    // TODO: replace "#" social URLs in lib/site.ts before launch.
    sameAs: SOCIAL_LINKS.map((s) => s.href).filter((h) => h !== "#"),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQPage structured data for the homepage FAQ. */
export function FaqPageJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** VideoObject structured data for the Smith Denison testimonial. */
export function VideoObjectJsonLd({
  videoId,
  name,
  description,
}: {
  videoId: string;
  name: string;
  description: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`],
    embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    uploadDate: "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: "Dozer AI",
      logo: { "@type": "ImageObject", url: SITE.url + "/dozer-logo-public.png" },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: "Dozer AI" },
    category: "Heavy Equipment Safety Camera System",
    url: `${SITE.url}${path}`,
    // No price published anywhere on the site; pricing is scoped per fleet.
    // Point buyers at the walkthrough instead of an Offer with a price.
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/demo`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
