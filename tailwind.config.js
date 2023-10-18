/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text: 'text 5s ease-in-out infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      fontFamily: {
        poppins: 'Poppins',
        cormorant: 'Cormorant Garamond',
      },
      boxShadow: {
        'custom': 'inset 0 0 9px rgb(255 255 255 / 70%)'
      },
      debugScreens: {
        position: ['top', 'left'],
        style: {
          backgroundColor: '#000',
          color: 'white',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('tailwindcss-debug-screens')
  ],
}