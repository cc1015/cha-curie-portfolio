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
        'dark-background': "#181512",
        'dark-foreground': "#fffff2",
        'light-background': "#181512",
        'light-foreground': "#fffff2",
      },
    },
  },
  plugins: [],
};
export default config;
