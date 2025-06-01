/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
         'custom-lg-range': {'min': '1024px', 'max': '1165px'},
         'custom-sm-range': {'min': '375px', 'max': '639px'},

      }
    },
  },
  plugins: [],
}

