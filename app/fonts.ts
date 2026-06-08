import localFont from "next/font/local";

/**
 * Self-hosted brand fonts, downloaded from the live dozer.ai site so the
 * redesign matches exactly:
 *  - Gotham (Book/Medium/Bold), headings + body
 *  - Share Tech Mono, monospace accent / kicker labels
 */
export const gotham = localFont({
  src: [
    { path: "../public/fonts/Gotham/Gotham-Book.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Gotham/Gotham-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/Gotham/Gotham-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-gotham",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const shareTechMono = localFont({
  src: [
    { path: "../public/fonts/ShareTechMono/ShareTechMono-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-share-tech-mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
