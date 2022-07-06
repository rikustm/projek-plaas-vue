/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'plaas-nav': 'rgb(100, 180, 100)',
        'plaas-background': 'rgb(206, 220, 206)',
      },
    },
  },
  plugins: [],
};
