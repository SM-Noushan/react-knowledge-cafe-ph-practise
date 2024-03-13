/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'cusBlue': '#6047EC',
      'cusBlack': '#111111',
    },
    fontFamily: {
      exo2: ['exo2', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

