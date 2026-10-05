import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { AssetSlot } from "@/components/AssetSlot";
import { CtaLink } from "@/components/CtaLink";
import { SpecSheetGate } from "@/components/SpecSheetGate";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { ProductJsonLd } from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { ASSETS } from "@/content/assets";
import { HARDWARE } from "@/content/hardware";

export const metadata: Metadata = buildMetadata({
  title: "Hardware, Cameras, Edge Computer, and Tablet for Heavy Equipment",
  description:
    "The Dozer AI hardware on one page: a 360-degree stereoscopic camera, an onboard edge computer, and an in-cabin tablet. Rugged, IP-rated, OEM agnostic, installed in under an hour.",
  path: "/hardware",
});

export default function HardwarePage() {
  return (
    <>
      {HARDWARE.map((sku) => (
        <ProductJsonLd
          key={sku.slug}
          name={`Dozer AI ${sku.name}`}
          description={sku.metaDescription}
          path={`/hardware#${sku.slug}`}
        />
      ))}

      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="hardware-heading">
        <div className="max-w-3xl">
          <p className="kicker">The hardware</p>
          <h1 id="hardware-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
            One install. Three rugged pieces.
          </h1>
          <p className="mt-5 text-lg text-dark-grey">
            The same three pieces go on any machine in under an hour: the cameras that see, the edge computer that decides, and the tablet the operator watches. All IP-rated for dust, water, and impact, and OEM agnostic.
          </p>
          <div className="mt-8">
            <CtaLink href="/demo" variant="primary" trackId="hardware_hero_demo">
              Book a walkthrough
            </CtaLink>
          </div>
        </div>

        {/* Jump links */}
        <ul className="mt-10 flex flex-wrap gap-3">
          {HARDWARE.map((sku) => (
            <li key={sku.slug}>
              <a
                href={`#${sku.slug}`}
                className="inline-block rounded-md border border-medium-grey/40 bg-white px-4 py-2 text-sm text-darker-grey transition-colors hover:border-dozer-yellow"
              >
                {sku.name}
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* One section per SKU, all content inline */}
      {HARDWARE.map((sku, i) => (
        <Section
          key={sku.slug}
          id={sku.slug}
          tone={i % 2 === 0 ? "white" : "light"}
          spacing="lg"
          aria-labelledby={`${sku.slug}-heading`}
          className="reveal scroll-mt-24"
        >
          {/* Overview + media */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className="kicker">Hardware</p>
              <h2 id={`${sku.slug}-heading`} className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
                {sku.name}
              </h2>
              <p className="mt-4 text-lg text-dark-grey">{sku.overview}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {sku.highlights.map((h) => (
                  <div key={h.title}>
                    <h3 className="text-sm font-bold text-darker-grey">{h.title}</h3>
                    <p className="mt-1 text-sm text-dark-grey">{h.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-dozer-white p-8">
                <AssetSlot {...ASSETS[sku.asset]} className="object-contain" />
              </div>
            </div>
          </div>

          {/* Spec table + spec sheet */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-medium-grey">Specifications</p>
              <dl className="mt-4 divide-y divide-medium-grey/30 border-y border-medium-grey/30">
                {sku.specTable.map((row) => (
                  <div key={row.label} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-2">
                    <dt className="font-mono text-xs uppercase tracking-wide text-medium-grey">{row.label}</dt>
                    <dd className="text-darker-grey">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="lg:pt-10">
              {/* TODO: replace the placeholder PDF in /public/spec-sheets with the real file */}
              <SpecSheetGate pdfUrl={sku.specSheet} sheetName={sku.name} />
            </div>
          </div>
        </Section>
      ))}

      <WalkthroughCta trackId="hardware_cta" />
    </>
  );
}
