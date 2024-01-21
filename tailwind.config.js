/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'banner-background' : "url('/images/banner.png')",}
    },
  },
  plugins: [],
}