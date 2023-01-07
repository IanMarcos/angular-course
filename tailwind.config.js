/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand', defaultTheme.fontFamily.sans],
      'title': ['Contrail One', defaultTheme.fontFamily.sans],
      'patua': ['Patua One', defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        'blackjack-table': "radial-gradient(circle, rgba(28,74,8,1) 0%, rgba(34,106,16,1) 74%, rgba(45,125,26,1) 100%)",
        'paper-line': "url('src/assets/imgs/todo-list/paper-line.webp')"
      },
    },
  },
  plugins: [],
}
