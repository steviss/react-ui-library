/** @type {import('tailwindcss').Config} */

const config = {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx,cjs}'],
  darkMode: 'class',
  theme: {
    extend: {
      flex: {
        100: '1 1 100%',
      },
      container: {
        screens: {
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/nesting'), require('daisyui')],
}

module.exports = config
