/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#fff",
        tertiary: "#3EAEB4",
        textCard: "#e3e3e3"
      },
      boxShadow: {
        card: "0px 15px 70px -15px #616060",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/wood-see.jpg')",
      },
    },
  },
  plugins: [],
};