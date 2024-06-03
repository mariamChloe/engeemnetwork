/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/preline/preline.js"],
  theme: {
    fontFamily: {
      "roboto-condensed": ["Roboto Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-turquoise": "#2BBED0",
        "brand-turquoise-transparent": "rgba(43,190,208,0.1)",
        "brand-old-blue": "#324B63",
        "brand-old-gray": "#3D3D3D",
        "brand-old-red": "#C71D1D",
        "brand-new-gray": "#737373",
        "brand-light-yellow": "#FFFBF2",

        "brand-green-turquoise": "#1AC2C2",
        "brand-turquoise-variance": "#EDF9FC",
        "brand-gray": "#F3F3F3",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        blob: "blob 7s infinite ",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: " translateY(-80px) translateX(-15px)  scale(1.1)",
          },
          "66%": {
            transform: "  translateY(20px) translateX(-20px) scale(0.7)   ",
          },
          "100%": {
            transform: "scale(1) ",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("preline/plugin"),
  ],
};
