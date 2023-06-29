/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#950a1d",
        secondary: "#f8a44e",
        brownish: "#756969",
        whiteish: "#fafafa",
        grayish: "#464541",
        blackish: "#181818",
        darkish: "#1e1e1e",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        licorice: ["Licorice", "cursive"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};