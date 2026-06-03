import { SITE, SOCIAL_LINKS } from "@/lib/site";

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
    name: "Dozer.ai",
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
    brand: { "@type": "Brand", name: "Dozer.ai" },
    category: "Heavy Equipment Safety Camera System",
    url: `${SITE.url}${path}`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      // Flexible per-unit pricing; start with one machine. Exact price on request.
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
