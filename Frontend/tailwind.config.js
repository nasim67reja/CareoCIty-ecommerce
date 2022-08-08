/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131921",
        secondary: "#232f3e",
        outline: "#febd69",
      },
      outlineWidth: {
        5: "5px",
        6: "6px",
      },
    },
  },
  plugins: [],
};
