/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'hsl(217.9, 10.6%, 88.9%)',
        customGrayDark: 'hsl(217.9, 10.6%, 64.9%)',
        customDarkBlue: 'hsl(224, 71.4%, 4.1%)'
      },
    },
  },
  plugins: [],
}