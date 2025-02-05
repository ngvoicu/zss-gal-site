import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '1rem', // Add padding if needed
        screens: {
          '2xl': '1280px', // Custom smaller width for extra-large screens
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require("@designbycode/tailwindcss-text-stroke"),],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["corporate"],
          // "background-color": "#ffffff",
          // "base-100": "#ffffff",
        }
      }
    ],
  }
} satisfies Config;

