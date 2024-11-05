/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["arabic-font", "sans-serif"],
      },
      colors: {
        "blue-10": "#79C6CE",
        "blue-20": "#32C4B69",

        // "blue-30": "#32C4B69",
        "green-10": "#B3E0C5",
        "gray-10": "#5F5F5F",
        "black-10": "#151F29",
        "orange-10": "#FF7F01",
        "white-10": "#F9FEFF",
        "white-20": "#FF7F01",
        "white-30": "#FFFDFB",
      },
      backgroundImage: {
        "gradient-greenblue":
          "linear-gradient(45deg, rgba(179,224,197,1) 25%, rgba(121,198,206,1) 93%)",
        "gradient-greenblue-light":
          "linear-gradient(45deg, rgba(179,224,197,0.5831466375612745) 25%, rgba(121,198,206,0.48230630142682074) 93%)",
        "mobile-home": "url('./assets/hero.png')",
      },
      content: {
        vectorImage: "url('./assets/vector.png')",
        spinnerImg: "url('./assets/spinner.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
