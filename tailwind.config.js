/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        brand_primary:{
          50: '#F9FAFF',
          100: '#E9EFFF',
          150: '#1D4ED8',
          200: '#D1DDFF',
          250: '#037092',
          300: '#F3FAFC'
        },
        brand_neutral:{
          50: '#FFFFFF',
          100: '#F2F2F2',
          150: '#F8F8F8',
          200: '#D9D9D9',
          250: '#9AA6AC',
          300: '#444444',
          350: '#0B0B0B',
          400: '#ECECEC',
          450: '#F3F3F4',
          500: '#EEEEEE',
        }
      },

      gridTemplateColumns: {
        // Simple 16 column grid
       'layout-home': '385px, 1fr',

        // Complex site-specific column configuration
       'footer': '200px minmax(900px, 1fr) 100px',
      },

      dropShadow: {
        'brand': ' 0px 4px 23px 0px rgba(0, 0, 0, 0.05)',
        'brand_100': '0px 4px 25px 0px rgba(29, 78, 216, 0.05)',
        'brand_150': '0px 4px 25px 0px rgba(29, 78, 216, 0.05)',
        'brand_200': '0px 4px 25px 0px rgba(141, 141, 141, 0.05);'
      }
    },
  },
  plugins: [],
}

