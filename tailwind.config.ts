import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        // Page canvas + raised surface. Text uses zinc; accents use violet → sky → cyan.
        ink: {
          950: "#050608",
          900: "#0b0d12",
          800: "#12151c",
        },
      },
    },
  },
  plugins: [],
};

export default config;
