/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        eggshell: "#F4F1DE",
        terra: "#E07A5F",
        independence: "#3D405B",
        "green-sheen": "#81B29A",
        "deep-champagne": "#F2CC8F",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addComponents, theme }) {
      addComponents({});
    },
  ],
  daisyui: {
    base: false,
    theme: ["dark"],
  },
};
