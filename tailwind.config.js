/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        "light-green":'#00ff00'
      }
    },
  },
  plugins: [
    "@tailwindcss/forms",
  ],
}

