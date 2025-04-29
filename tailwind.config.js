/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        // Color Pallette
        blue_1: "#C3D7FF",
        blue_2: "#8BB1FF",
        blue_3: "#1080FF",
        orange_1: "#FFDABA",
        orange_2: "#FEC17B",
        orange_3: "#FC7B20",


        light_1: "#f8f8f8",
        light_2: "#f0f0f0",
        light_3: "#ededed",
        // TODO: Adjust the Dark Colors for Dark Mode Features
        dark_1: "#121212",
        dark_2: "#171717",
        dark_3: "#1a1a1a",
        dark_4: "#202020",
        // TODO: Adjust this color
        offwhite: "#D0DFFF",
      }
    }
  },
  plugins: []
};
