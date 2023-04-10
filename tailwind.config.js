/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'chivo':['Chivo Mono','sans-serif'],
        libre:['Libre Baskerville'],
        pixels:['Rubik Pixels','cursive']
      }
    },
  },
  plugins: [],
}

