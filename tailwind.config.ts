import type { Config } from "tailwindcss";

export default {
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
        primary: {
          DEFAULT: "#2563eb", // Softer blue
          dark: "#1d4ed8",
          light: "#60a5fa",
        },
        accent: {
          DEFAULT: "#6d28d9", // Gentle purple
          dark: "#5b21b6",
          light: "#8b5cf6",
        },
        space: {
          darker: "#030712", // Rich space black
          dark: "#0f172a",
          nebula: "#1e293b",
          stars: "#e2e8f0",
          aurora: "#3b82f6",
          cosmic: "#6366f1",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#1E1B4B",
          darker: "#0F172A",
        },
      },
      backgroundImage: {
        "space-gradient": `
          radial-gradient(
            circle at center,
            rgba(37, 99, 235, 0.05) 0%,
            rgba(109, 40, 217, 0.03) 35%,
            rgba(3, 7, 18, 1) 85%
          )
        `,
        "nebula-pattern": `
          radial-gradient(
            1200px circle at 50% 50%,
            rgba(56, 189, 248, 0.1) 0%,
            rgba(79, 70, 229, 0.08) 40%,
            transparent 70%
          )
        `,
        "aurora-glow": `
          linear-gradient(
            to bottom,
            rgba(0, 198, 255, 0.15),
            rgba(14, 165, 233, 0.08) 30%,
            transparent 70%
          )
        `,
      },
      boxShadow: {
        "glow-xl": "0 0 70px -12px rgba(79, 70, 229, 0.35)",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
