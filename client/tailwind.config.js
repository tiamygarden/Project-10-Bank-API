/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark': '#12002b;',
        'abgreen': '#00bc77',
        'abgray' : '#E0E6ED'
      }
    },
  },
  plugins: [],
}