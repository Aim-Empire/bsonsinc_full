import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand))",
          600: "hsl(var(--brand-600))",
          700: "hsl(var(--brand-700))",
          800: "hsl(var(--brand-800))",
          900: "hsl(var(--brand-900))",
          contrast: "hsl(var(--brand-contrast))",
          ink: "hsl(var(--ink))",
        },
      },
      boxShadow: { glow: "0 0 0 0 rgba(0,0,0,0), 0 0 32px -12px rgba(0,209,255,.6)" }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
