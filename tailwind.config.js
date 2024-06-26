/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Tilt: ["Tilt", "sans-serif"],
        MuolLight: ["MuolLight", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
        Permanent: ['Permanent Marker', 'cursive'],
        Monoton: ['Monoton', 'sans-serif'],
      }
    },
    fontSize: {
      // sm: '0.8rem',
      // base: '1rem',
      // xl: '1.25rem',
      // '2xl': '1.563rem',
      // '3xl': '1.953rem',
      // '4xl': '2.441rem',
      // '5xl': '3.052rem',
      mx: '1cm'
    }
  },
  plugins: [],
}