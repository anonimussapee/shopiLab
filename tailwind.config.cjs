/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'ss': '320px',
      // => @media (min-width: 3200px) { ... }

      'xs': '420px',
      // => @media (min-width: 420px){ ... }

      'sm': '600px',
      // => @media (min-width: 600px) { ... }
      'smMax':{'max': '600px'}
      ,
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
