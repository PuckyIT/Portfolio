import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kodeMono: ['Kode Mono', 'monospace'],
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        bounceIn: "bounceIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;