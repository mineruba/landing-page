import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          "50": "#fffcf2",
          "100": "#fff8e3",
          "200": "#ffefc0",
          "300": "#ffe18d",
          "400": "#ffd166",
          "500": "#f9ba2d",
          "600": "#e8a311",
          "700": "#c27e10",
          "800": "#9c6415",
          "900": "#7f5217",
          "950": "#472c0a",
        },
        luxe: {
          light: "#f9e3b1",
          DEFAULT: "#d4af37",
          dark: "#9e7c23",
          gradient: "linear-gradient(135deg, #f9e3b1 0%, #d4af37 50%, #9e7c23 100%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["'Noto Serif JP'", "serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f9e3b1 0%, #d4af37 50%, #9e7c23 100%)",
        "gold-shimmer":
          "linear-gradient(90deg, rgba(212,175,55,0.5) 0%, rgba(249,227,177,1) 25%, rgba(212,175,55,1) 50%, rgba(249,227,177,1) 75%, rgba(212,175,55,0.5) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
