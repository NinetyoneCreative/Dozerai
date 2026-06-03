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
        DEFAULT: "0.25rem",
        md: "0.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
