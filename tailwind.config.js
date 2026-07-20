/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'papal-red': '#7B1113',    // Rojo tipo vino (más oscuro)
        'papal-gold': '#FBC02D',   // Dorado papal
        'papal-white': '#F4F2EC',  // Blanco más opaco/cálido
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
