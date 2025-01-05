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
          DEFAULT: "#60A5FA", // Bright stellar blue
          dark: "#3B82F6",
          light: "#93C5FD",
        },
        accent: {
          DEFAULT: "#8B5CF6", // Deep cosmic purple
          dark: "#7C3AED",
          light: "#A78BFA",
        },
        space: {
          darker: "#030711", // True space black
          dark: "#0F172A", // Deep space
          nebula: "#1E1B4B",
          stars: "#F8FAFC",
          aurora: "#38BDF8",
          cosmic: "#4F46E5",
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
            rgba(96, 165, 250, 0.08) 0%,
            rgba(139, 92, 246, 0.05) 35%,
            rgba(3, 7, 17, 1) 80%
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
