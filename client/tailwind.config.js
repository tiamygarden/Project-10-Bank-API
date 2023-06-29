/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html', './src/**/*.html', './src/assets/**/*.{jpeg,jpg,png,gif,svg}'],
  theme: {
    extend: {},
    screens: {
      s: '425px',
      // => @media (max-width:425px)
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}

