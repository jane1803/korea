import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f7fb",
          100: "#eef0f7",
          200: "#d7dced",
          300: "#b3bddc",
          400: "#8696c5",
          500: "#6376ad",
          600: "#4d5d93",
          700: "#3f4b77",
          800: "#343e61",
          900: "#2d3550",
          950: "#1b2035"
        },
        brand: {
          50: "#eefcff",
          100: "#d7f6ff",
          200: "#aeeeff",
          300: "#75e2ff",
          400: "#2fd2ff",
          500: "#00b7f0",
          600: "#0094c7",
          700: "#0076a1",
          800: "#046083",
          900: "#0a506e",
          950: "#063149"
        }
      },
      boxShadow: {
        soft: "0 12px 30px rgba(10, 20, 40, 0.12)",
        hairline: "0 0 0 1px rgba(255,255,255,0.08) inset"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;

