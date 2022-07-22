/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        gurutheme: {
          primary: "#1480be",
          secondary: "#106698",
          accent: "#f3f6fD",
          neutral: "#333333",
          white: "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}