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
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        "fluid-xs": "var(--text-xs)",
        "fluid-sm": "var(--text-sm)",
        "fluid-base": "var(--text-base)",
        "fluid-lg": "var(--text-lg)",
        "fluid-xl": "var(--text-xl)",
        "fluid-2xl": "var(--text-2xl)",
        "fluid-3xl": "var(--text-3xl)",
        "fluid-display": "var(--text-display)",
      },
      letterSpacing: {
        "tightest-x": "-0.03em",
        "eyebrow": "0.2em",
        "label": "0.18em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "8px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        hairline: "0 0 0 1px rgb(0 0 0 / 0.06)",
      },
      maxWidth: {
        prose: "52ch",
        quote: "40ch",
        sub: "46ch",
      },
    },
  },
  plugins: [],
};

export default config;
