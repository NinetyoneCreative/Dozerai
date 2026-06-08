import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { CtaBand } from "@/components/CtaBand";
import { buildMetadata } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries, Heavy Equipment Safety Cameras by Vertical",
  description:
    "Dozer.ai blind-spot cameras and proximity detection, tuned to your environment: heavy civil, aggregates, demolition, and mining & landfill operations.",
  path: "/industries",
});

export default function IndustriesIndexPage() {
  return (
    <>
      <Section tone="light" spacing="lg" aria-labelledby="industries-heading">
        <div className="max-w-3xl">
          <p className="kicker">Industries</p>
          <h1
            id="industries-heading"
            className="mt-4 text-4xl font-bold leading-[1.1] text-darker-grey sm:text-5xl"
          >
            Built for how your crews actually work
          </h1>
          <p className="mt-5 text-lg text-dark-grey">
            The same Dozer system, cameras, AI, and dashboards, pointed at the
            specific hazards of your site. Pick your operation to see how it fits.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-7 transition-colors hover:border-dozer-yellow"
            >
              <p className="kicker">{ind.heroKicker}</p>
              <h2 className="mt-3 text-2xl font-bold text-darker-grey">{ind.name}</h2>
              <p className="mt-2 flex-1 text-dark-grey">{ind.heroSub}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {ind.equipment.slice(0, 3).map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-medium-grey/40 px-3 py-1 text-xs text-dark-grey"
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
                See {ind.name} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand location="industries_index" />
    </>
  );
}
