import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/content/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries, Heavy Equipment Safety Cameras by Trade",
  description:
    "Dozer AI on-machine cameras and proximity detection, tuned to the hazards and machines of earthwork and grading, underground utility, pipeline, paving, demolition, and mining.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  return (
    <>
      <Section tone="light" spacing="lg" aria-labelledby="industries-heading">
        <div className="max-w-3xl">
          <p className="kicker">Industries</p>
          <h1 id="industries-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
            Tuned to the hazards of your trade
          </h1>
          <p className="mt-5 text-lg text-dark-grey">
            One Dozer AI system, aimed at the specific machines and blind spots of your work. Pick your trade to see how it fits.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-7 transition-colors hover:border-dozer-yellow"
            >
              <p className="kicker">{ind.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold text-darker-grey">{ind.name}</h2>
              <p className="mt-2 flex-1 text-dark-grey">{ind.cardBlurb}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ind.machines.slice(0, 3).map((m) => (
                  <li key={m} className="rounded-full border border-medium-grey/40 px-3 py-1 text-xs text-dark-grey">
                    {m}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
                See {ind.name} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <WalkthroughCta trackId="industries_cta" />
    </>
  );
}
