/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        volt: {
          50: '#f9ffd0',
          100: '#f0ff9e',
          200: '#e1ff44',
          300: '#cdff00',
          400: '#bdf000',
          500: '#a5da00',
          600: '#80ab00',
          700: '#618200',
          800: '#4d6605',
          900: '#405609',
        },
        darkslate: {
          900: '#0B0F19',
          950: '#070a10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
