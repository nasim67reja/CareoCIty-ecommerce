/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131921",
        secondary: "#232f3e",
        tertiary: "#37475a",
        outline: "#febd69",
        ovarlay: "#13192199",
        backg: "#EAEDED",
        gradientTo: "#f0c14b",
        gradientFrom: "#f7dfa5",
        loginBorder: "#adb1b8",
      },
      outlineWidth: {
        5: "5px",
      },
    },
  },
  plugins: [],
};
