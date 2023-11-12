/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'pastel1': '#F3EEEA',
        'pastel2': '#EBE3D5',
        'pastel3': '#B0A695',
        'pastel4': '#776B5D',
        'pastel5': '#4D4032',
      },
    },
  },
  plugins: [],
}

