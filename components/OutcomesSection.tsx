import { Section } from "@/components/Section";

/**
 * Translates features → outcomes/ROI. The payoff line ("prevent one incident
 * and it pays for itself") is the close.
 */
const OUTCOMES = [
  {
    title: "Prevent a backover before it happens",
    body: "In-cab proximity alerts give operators a virtual spotter in every blind spot — so a worker on foot never becomes an incident.",
  },
  {
    title: "Lower your insurance exposure",
    body: "Recorded safety events and documented near-misses give your carrier and safety program objective proof that controls are working.",
  },
  {
    title: "Less downtime, more uptime",
    body: "Catch unsafe operation and contact early. Avoid the stand-down, the investigation, and the days a damaged machine sits idle.",
  },
  {
    title: "Resolve theft & disputes fast",
    body: "360° footage tagged by machine and map area settles rework claims and recovers what happened after-hours — without a he-said argument.",
  },
];

export function OutcomesSection() {
  return (
    <Section tone="white" spacing="lg" aria-labelledby="outcomes-heading">
      <div className="max-w-3xl">
        <p className="kicker">From features to ROI</p>
        <h2 id="outcomes-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
          What it actually changes on your jobsite
        </h2>
        <p className="mt-4 text-lg text-dark-grey">
          The cameras are the means. These are the outcomes equipment and safety
          managers buy them for.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {OUTCOMES.map((o) => (
          <div
            key={o.title}
            className="rounded-md border border-medium-grey/30 bg-dozer-white p-6"
          >
            <h3 className="text-lg font-medium text-darker-grey">{o.title}</h3>
            <p className="mt-2 text-dark-grey">{o.body}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 rounded-md bg-darker-grey px-6 py-5 text-center text-lg font-medium text-white">
        Prevent <span className="text-dozer-yellow">one incident</span> and the
        system pays for itself.
      </p>
    </Section>
  );
}
