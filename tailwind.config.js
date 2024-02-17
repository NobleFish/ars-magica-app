/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-eerie": "#1A1A1D",
        "gray-davys": "#4A4A50",
        "red-wine": "#6F2232",
        "red-claret": "#950740",
        "red-ncs" : "#C3073F",
        "white-almond": "#E7D7C1",
        "green-hunter": "#3E5E33",
        "white-smoke" : "#F2F4F3",

      }
    },
  },
  plugins: [],
}

