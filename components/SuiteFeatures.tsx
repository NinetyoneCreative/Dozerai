import { Section } from "@/components/Section";
import { SuiteIcon } from "@/components/SuiteIcon";
import type { Suite } from "@/lib/suites";

/**
 * Renders a suite's feature categories as cards (icon + category name +
 * feature list). Coming-soon suites get a subtle "in development" treatment
 * but the same structure, so the roadmap reads consistently.
 */
export function SuiteFeatures({ suite }: { suite: Suite }) {
  const comingSoon = suite.status === "coming-soon";
  return (
    <Section tone="white" spacing="lg" aria-label={`${suite.name} capabilities`}>
      <div className="grid gap-6 md:grid-cols-2">
        {suite.categories.map((cat) => (
          <div
            key={cat.key}
            id={cat.key}
            className="scroll-mt-28 rounded-md border border-medium-grey/30 bg-dozer-white p-6 sm:p-7"
          >
            <div className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${
                  comingSoon ? "bg-white text-dark-grey" : "bg-dozer-yellow/15 text-darker-grey"
                }`}
              >
                <SuiteIcon name={cat.icon} />
              </span>
              <h3 className="text-xl font-bold text-darker-grey">{cat.name}</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {cat.features.map((f) => (
                <li key={f.name} className="border-l-2 border-dozer-yellow/60 pl-4">
                  <p className="font-medium text-darker-grey">{f.name}</p>
                  <p className="mt-0.5 text-sm text-dark-grey">{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
