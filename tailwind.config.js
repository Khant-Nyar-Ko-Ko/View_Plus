/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Prompt", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#E50914",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

