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
        "dark-background": "#181512",
        "dark-foreground": "#fffff2",
        "light-background": "#181512",
        "light-foreground": "#fffff2",
      },
      animation: {
        pull: "pull 0.8s ease-in-out",
      },
      keyframes: {
        pull: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(0)" },
          "70%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
