/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGradient1 : '#F0D9C4',
        customGradient2 : '#FF9797'
      },
      
      fontFamily: {
        lexend: ['Lexend', 'sans-serif']
      },

      backgroundImage: {
        'logo': "url('/src/Images/AskAtEase.png')"
      }
    },
    
    
  },
  plugins: [],
}
