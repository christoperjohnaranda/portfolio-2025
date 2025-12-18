import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Neon Green Theme
        neonGreen: "#39FF14",
        neonGreenDark: "#2ECC40",
        darkBg: "#0A0E0D",
        darkCard: "#0F1C14",
        darkAccent: "#1A2B1D",
        lightGreen: "#CCFFCC",
        mediumGreen: "#1FFF1F",
      },
    },
  },
  plugins: [],
};
export default config;
