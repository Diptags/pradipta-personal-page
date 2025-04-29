const { blue_1, blue_2, blue_3, orange_1, orange_2, orange_3, offwhite, light_1, light_2, light_3, dark_1, dark_2, dark_3 } = require('./constants/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "false",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-bold": ["Poppins-Bold", "sans"],
        "poppins-light": ["Poppins-Light", "sans"],
        "poppins-medium": ["Poppins-Medium", "sans"],
        "poppins-regular": ["Poppins-Regular", "sans"],
      },
      colors: {
        blue_1,
        blue_2,
        blue_3,
        orange_1,
        orange_2,
        orange_3,
        offwhite,
        light_1,
        light_2,
        light_3,
        dark_1,
        dark_2,
        dark_3,
      }
    }
  },
  plugins: []
};
