module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1920px',
      // => @media (min-width: 1936px) { ... }
    },
    extend: {
      height: {
        '128': '32rem',
        '150': '50rem',
      },
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
