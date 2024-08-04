/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      screens: {
        'iphone6': '375px',
      },
    },
  },
  plugins: [],
}

