import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { WalkthroughCta } from "@/components/WalkthroughCta";
import { buildMetadata } from "@/lib/seo";
import { COMPANY } from "@/content/company";

export const metadata: Metadata = buildMetadata({
  title: "Company, The Team Behind Dozer AI",
  description:
    "Dozer AI builds on-machine perception for heavy job sites: rugged cameras and depth sensors that keep crews safe and turn busy sites into more productive operations.",
  path: "/company",
});

/** Two-letter monogram from a name (team photos do not fit the asset buckets). */
function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <Section tone="light" spacing="lg" aria-labelledby="company-heading">
        <div className="max-w-3xl">
          <p className="kicker">{COMPANY.eyebrow}</p>
          <h1 id="company-heading" className="mt-5 text-4xl font-bold leading-[1.05] text-darker-grey sm:text-5xl">
            {COMPANY.h1}
          </h1>
          <p className="mt-5 text-lg text-dark-grey">{COMPANY.opening}</p>
        </div>
      </Section>

      {/* Mission */}
      <section className="bg-surface-dark py-20 sm:py-28" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <p className="kicker">Why we build it</p>
          <h2 id="mission-heading" className="mt-5 text-2xl font-bold text-white sm:text-3xl">
            {COMPANY.mission}
          </h2>
        </div>
      </section>

      {/* Leadership */}
      <Section tone="light" spacing="lg" aria-labelledby="team-heading" className="reveal">
        <div className="max-w-3xl">
          <p className="kicker">Leadership</p>
          <h2 id="team-heading" className="mt-4 text-3xl font-bold text-darker-grey sm:text-4xl">
            Who is behind Dozer AI
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {COMPANY.leadership.map((person) => (
            <div key={person.name} className="flex gap-5 rounded-md border border-medium-grey/30 bg-white p-6">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-dozer-yellow font-mono text-xl font-bold text-black"
                aria-hidden="true"
              >
                {initials(person.name)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-darker-grey">{person.name}</h3>
                <p className="font-mono text-xs uppercase tracking-wide text-medium-grey">{person.role}</p>
                <p className="mt-3 text-sm text-dark-grey">{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section tone="white" spacing="lg" aria-labelledby="values-heading" className="reveal">
        <h2 id="values-heading" className="sr-only">
          What we value
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {COMPANY.values.map((v) => (
            <div key={v.title} className="rounded-md border border-medium-grey/30 bg-white p-6">
              <h3 className="text-lg font-bold text-darker-grey">{v.title}</h3>
              <p className="mt-2 text-sm text-dark-grey">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <WalkthroughCta trackId="company_cta" />
    </>
  );
}
