import Link from "next/link";
import { Section } from "@/components/Section";
import { INDUSTRIES } from "@/lib/industries";

/**
 * Industry segmentation grid, derived from lib/industries so it stays in sync
 * as verticals are added. Each card links to its dedicated landing page.
 */
export function UseCaseGrid() {
  return (
    <Section tone="light" spacing="lg" aria-labelledby="usecase-heading">
      <div className="max-w-3xl">
        <p className="kicker">Built for how you work</p>
        <h2 id="usecase-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
          One system, tuned to your environment
        </h2>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INDUSTRIES.map((ind) => (
          <Link
            key={ind.slug}
            href={`/industries/${ind.slug}`}
            className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-6 transition-colors hover:border-dozer-yellow"
          >
            <h3 className="text-lg font-medium text-darker-grey">{ind.name}</h3>
            <p className="mt-2 flex-1 text-sm text-dark-grey">{ind.gridBlurb}</p>
            <span className="mt-4 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
