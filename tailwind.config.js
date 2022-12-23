/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'paper-line': "url('src/assets/imgs/todo-list/paper-line.webp')"
      }
    },
  },
  plugins: [],
}
