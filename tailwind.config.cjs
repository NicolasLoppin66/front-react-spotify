/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Ici on redéfinit des couleur personnalisée
      colors: {
        black: 'rgba(24, 24, 24, 1)',
        black_05: 'rgba(24, 24, 24, 0.5)',
        green: 'rgba(30, 215, 96, 1)',
        green_06: 'rgba(30, 215, 96, 0.6)',
        green_08: 'rgba(30, 215, 96, 0.8)',
        green_top: 'rgba(26, 173, 78, 1)',
        white: 'rgba(245, 245, 245, 1)',
        white_01: 'rgba(255, 255, 255, 0.1)',
        white_05: 'rgba(255, 255, 255, 0.5)',
      },
      animation: {

      },
      keyframes: {

      },
    },
  },
  plugins: [],
}
