/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
  plugins: [
    require('tailwindcss-debug-screens')
  ],
}