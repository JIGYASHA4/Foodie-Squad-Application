/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#EFC3A4",
        darkbrown: "#4B1F0E",
        lightbrown: "#BE7656",
        brown: "#794028",
        black: "#0E0504",
      },
    },
  },
  plugins: [require("daisyui")],
};
