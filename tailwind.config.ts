import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js",
    // './node_modules/@nextui-org/theme/dist/components/(navbar|image).js'
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "background-pulse": "pulse 2s ease-in-out infinite",
        "floating-effect": "float 3s ease-in-out infinite",
        "slide-left": "slide-left 25s linear infinite",
        "slide-left-fast": "slide-left 15s linear infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
