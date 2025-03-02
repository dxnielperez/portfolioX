import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        101: "1.01",
      },
      colors: {
        dark: "#27262b",
        orange: "#FB904D",
        light: "#F5F5F5",
        lighter: "#DFDBDB",
        pop: "#FB904D",
      },
      animation: {
        "slide-right": "slideInRight 0.5s forwards",
        "slide-left": "slideInLeft 0.5s forwards",
        "slide-up": "slideUp 0.5s forwards",
        "slide-down": "slideUp 0.5s forwards",
        float: "float 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        slideInRight: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideInLeft: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        slideUp: {
          from: {
            transform: "translateY(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        slideDown: {
          from: {
            transform: "translateY(0)",
            opacity: "0",
          },
          to: {
            transform: "translateY(100%)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
