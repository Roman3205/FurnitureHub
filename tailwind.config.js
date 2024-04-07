/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px'
      },
      colors: {
        'bisq-hard': 'rgb(251,235,181)',
        'bisq-medium': 'rgb(255,249,229)',
        'bisq-low': 'rgb(250,244,244)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

