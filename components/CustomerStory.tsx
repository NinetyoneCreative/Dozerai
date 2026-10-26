import { Section } from "@/components/Section";
import { YouTubeLite } from "@/components/YouTubeLite";

/** Smith Denison customer video, shared by the home page and every industry page. */
export function CustomerStory({ location }: { location: string }) {
  return (
    <Section tone="white" spacing="lg" aria-labelledby={`story-${location}`}>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="kicker">Customer story</p>
          <h2 id={`story-${location}`} className="mt-3 text-3xl font-bold sm:text-4xl">
            Hear it from a Dozer customer
          </h2>
          <p className="mt-4 text-lg text-dark-grey">
            From out in the field to in the office, Smith Denison has transformed
            how they handle safety and productivity.
          </p>
        </div>
        <YouTubeLite
          id="LniqXy8HlL0"
          title="Smith Denison on using Dozer for safety and productivity"
          trackId={`${location}_customer_story`}
        />
      </div>
    </Section>
  );
}
