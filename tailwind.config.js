/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./docs/*.html"],
  theme: {
    extend: {
      colors: {
        'github-dark': '#0d1117',
        'github-gray': '#3d444d',
      }
    },
  },
  plugins: [],
}

