/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'chilli-red': '#FF1E1E',
        'chilli-dark': '#CC0000',
        'spicy-yellow': '#FFD700',
        'leaf-green': '#228B22'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};