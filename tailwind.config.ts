import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        accent: '#2FA500',
        default_text: "#4B4B4B",
        accentBg: "#fbf9fa"
      },
      container: {
        center: true, 
        padding: '100px'
      }
    },
  },
  plugins: [],
};
export default config;
