import type { Config } from "tailwindcss";

/**
 * Brand tokens mirror styles/tokens.css and were extracted verbatim from the
 * live dozer.ai CSS bundle (042fb76698679e6b.css). Do not "improve" these —
 * the redesign must read as the same company.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dozer-yellow": "rgb(253 172 19 / <alpha-value>)", // #FDAC13 primary accent
        "dozer-white": "rgb(244 247 249 / <alpha-value>)", // #F4F7F9 light bg
        "darker-grey": "rgb(77 82 96 / <alpha-value>)", // #4D5260 dark section / ink
        "dark-grey": "rgb(92 99 116 / <alpha-value>)", // #5C6374 body text
        "medium-grey": "rgb(167 170 177 / <alpha-value>)", // #A7AAB1 borders / muted

        // Semantic aliases from the 2026 brief (same values, brief-facing names).
        yellow: "rgb(253 172 19 / <alpha-value>)", // --yellow
        page: "rgb(244 247 249 / <alpha-value>)", // --page
        heading: "rgb(77 82 96 / <alpha-value>)", // --heading
        body: "rgb(92 99 116 / <alpha-value>)", // --body
        muted: "rgb(167 170 177 / <alpha-value>)", // --muted

        // New surfaces + accents the redesign adds.
        card: "rgb(255 255 255 / <alpha-value>)", // --card
        "surface-dark": "rgb(28 32 41 / <alpha-value>)", // #1C2029 dark bands behind UI
        "surface-deep": "rgb(18 21 28 / <alpha-value>)", // #12151C hero background
        alert: "rgb(240 90 40 / <alpha-value>)", // #F05A28 detection box accent
        ok: "rgb(47 182 124 / <alpha-value>)", // #2FB67C positive delta
      },
      fontFamily: {
        // Gotham powers headings + body; var set by next/font in layout.tsx.
        sans: ["var(--font-gotham)", "Gotham", "ui-sans-serif", "system-ui", "sans-serif"],
        gotham: ["var(--font-gotham)", "Gotham", "sans-serif"],
        mono: ["var(--font-share-tech-mono)", "shareTechMono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1440px", // matches live site main container
        wide: "2200px",
      },
      borderRadius: {
        // The brief mandates one 8px radius everywhere. 0.5rem = 8px, so both
        // `rounded` and `rounded-md` resolve to 8px.
        DEFAULT: "0.5rem",
        md: "0.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        // Fade-and-rise on section entry, 300ms (prefers-reduced-motion honored
        // globally in globals.css). Apply on scroll-in during page work.
        "fade-up": "fade-up 0.3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
