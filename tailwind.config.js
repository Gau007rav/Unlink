/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        iphone6: "375px",
      },
      scale: {
        200: "2", // Add this line to extend the scale values
      },
    },
  },
  plugins: [],
};
