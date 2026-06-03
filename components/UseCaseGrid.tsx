import Link from "next/link";
import { Section } from "@/components/Section";

/**
 * Use-case segmentation grid. Each card links to its dedicated vertical
 * landing page (/industries/<slug>). Kept as a curated list (not derived from
 * lib/industries) so the homepage blurbs can stay short and punchy.
 */
const USE_CASES = [
  {
    id: "heavy-civil",
    name: "Heavy Civil",
    body: "Grading, earthmoving, and site work where ground crews and machines share tight space.",
  },
  {
    id: "aggregates",
    name: "Aggregates",
    body: "Quarries and pits with constant haul-truck traffic, loaders, and pinch points.",
  },
  {
    id: "demolition",
    name: "Demolition",
    body: "High-hazard teardown with falling debris, spotters, and shifting exclusion zones.",
  },
  {
    id: "mining-landfill",
    name: "Mining / Landfill",
    body: "Large fleets, long sightlines, and 24/7 operation where blind spots are deadly.",
  },
];

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
        {USE_CASES.map((u) => (
          <Link
            key={u.id}
            href={`/industries/${u.id}`}
            id={u.id}
            className="group flex flex-col rounded-md border border-medium-grey/30 bg-white p-6 transition-colors hover:border-dozer-yellow"
          >
            <h3 className="text-lg font-medium text-darker-grey">{u.name}</h3>
            <p className="mt-2 flex-1 text-sm text-dark-grey">{u.body}</p>
            <span className="mt-4 text-sm font-medium text-dark-grey group-hover:text-darker-grey">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
