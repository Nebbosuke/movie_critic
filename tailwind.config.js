/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#FFC20E",
        },
        silver: {
          DEFAULT: "#77787B",
        },
        copper: {
          DEFAULT: "#9A6229",
        },
        netflix: {
          DEFAULT: "#101010",
        },
        side: {
          DEFAULT: "#070707",
        },
      },
      backgroundImage: {
        top: "url('/src/top.png')",
      },
    },
  },
  plugins: [],
};
