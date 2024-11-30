/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        header: "#1A1A1A",
        customGradient1: "#F0D9C4",
        customGradient2: "#FF9797",
        button: "#380303",
        underline: "#FF0000",
        gradiantfull: "#FF9797",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },

      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },

      backgroundImage: {
        logo: "url('/src/Images/AskAtEase.png')",
      },
    },
  },
  plugins: [],
};
