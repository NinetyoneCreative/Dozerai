import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section tone="light" spacing="lg" aria-labelledby="nf-heading">
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="kicker">404</p>
        <h1 id="nf-heading" className="mt-3 text-4xl font-bold">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-4 text-dark-grey">
          The page may have moved. Head back home or book a quick intro.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-dozer-yellow px-6 py-3 font-medium text-black hover:bg-[rgb(230_154_12)]"
          >
            Back home
          </Link>
          <Link
            href="/demo"
            className="rounded-md border border-medium-grey/60 px-6 py-3 font-medium text-darker-grey hover:bg-white"
          >
            Book a 15-min intro
          </Link>
        </div>
      </div>
    </Section>
  );
}
