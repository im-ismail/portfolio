/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark': '#121212',
        'dark1': '#1e1e1f',
        'dark2': '#202022',
        'gray': '#3f3f40',
        'gray1': '#2b2b2c',
        'gray2': 'rgba(43,43,44,0.9)',
        'jet': '#383838'
      },
      textColor: {
        'orange': '#ffdb70'
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',     /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',              /* Safari and Chrome */
        },
      }, ['responsive', 'hover']);
    }),
  ],
}