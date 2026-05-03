import type { Config } from "tailwindcss";

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: color("background"),
        foreground: color("foreground"),
        primary: color("primary"),
        secondary: color("secondary"),
        accent: color("accent"),
        card: color("card"),
        muted: color("muted"),
        "muted-foreground": color("muted-foreground"),
        border: color("border"),
        destructive: color("destructive"),
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "8px 8px 20px #e8ddd1, -8px -8px 20px #ffffff",
        "soft-sm": "4px 4px 10px #e8ddd1, -4px -4px 10px #ffffff",
        "soft-inset":
          "inset 4px 4px 8px #e8ddd1, inset -4px -4px 8px #ffffff",
        glow: "0 12px 40px -8px rgba(196, 168, 130, 0.35)",
      },
      letterSpacing: {
        widest2: "0.32em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 1s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
