/**
 * Trust bar logos for the homepage. Named customer logos plus Smith Denison.
 *
 * TODO: drop approved logo files into /public/logos and set `logoSrc`. Until a
 * logo is approved, leave `logoSrc` undefined and the trust bar renders the
 * customer name set in Share Tech Mono as a placeholder chip (no invented
 * logos, no stock marks).
 */

export interface TrustLogo {
  /** Customer name, also the placeholder text until a logo is dropped in. */
  name: string;
  /** Approved logo file under /public/logos, e.g. "/logos/smith-denison.svg". */
  logoSrc?: string;
  /** Descriptive alt for the real logo. */
  alt: string;
}

export const TRUST_LOGOS: TrustLogo[] = [
  {
    name: "Smith Denison Construction",
    alt: "Smith Denison Construction logo",
    // logoSrc: "/logos/smith-denison.svg", // TODO: drop approved logo file
  },
  // TODO: add the remaining approved customer logos below.
  { name: "Customer Two", alt: "" },
  { name: "Customer Three", alt: "" },
  { name: "Customer Four", alt: "" },
  { name: "Customer Five", alt: "" },
];
