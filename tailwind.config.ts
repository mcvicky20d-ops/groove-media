import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the studio logo: deep production-house green,
        // film-reel gold, and a warm cream base.
        forest: {
          50: "#eef6f0",
          100: "#d4e9da",
          200: "#a9d3b6",
          300: "#74b489",
          400: "#3f8d5d",
          500: "#1f6b46",
          600: "#155538",
          700: "#0f4530",
          800: "#0c3826",
          900: "#082b1d",
        },
        gold: {
          50: "#fef9e8",
          100: "#fdf0c2",
          200: "#fbe188",
          300: "#f7cd47",
          400: "#f0bb24",
          500: "#e0a615",
          600: "#bd820f",
          700: "#975e11",
          800: "#7c4a15",
          900: "#683e16",
        },
        cream: "#faf7f0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
