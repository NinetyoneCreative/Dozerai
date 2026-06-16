import { Section } from "@/components/Section";
import type { LegalDocument } from "@/lib/legal";

/** Renders a Terms / Privacy legal document with the site's styling. */
export function LegalDoc({ doc }: { doc: LegalDocument }) {
  return (
    <Section tone="white" spacing="lg" aria-labelledby="legal-heading">
      <div className="mx-auto max-w-3xl">
        <p className="kicker">Legal</p>
        <h1 id="legal-heading" className="mt-3 text-4xl font-bold">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-medium-grey">
          Effective Date: {doc.effectiveDate}
        </p>

        <div className="mt-8 space-y-5 text-dark-grey">
          {doc.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-xl font-medium text-darker-grey">{section.heading}</h2>
            <div className="mt-3 space-y-4 text-dark-grey">
              {section.blocks.map((block, i) => {
                switch (block.type) {
                  case "p":
                    return <p key={i}>{block.text}</p>;
                  case "h3":
                    return (
                      <h3 key={i} className="font-medium text-darker-grey">
                        {block.text}
                      </h3>
                    );
                  case "ul":
                    return (
                      <ul key={i} className="list-disc space-y-1.5 pl-5">
                        {block.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  case "lines":
                    return (
                      <address key={i} className="not-italic leading-relaxed">
                        {block.lines.map((line, j) => (
                          <span key={j} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </section>
        ))}

        {doc.closing && <p className="mt-10 text-dark-grey">{doc.closing}</p>}
      </div>
    </Section>
  );
}
