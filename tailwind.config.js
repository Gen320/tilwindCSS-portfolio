/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        "selected-text": "#6495ed",
        theme: "#00008b",
      },
    },
    fontFamily: {
      Dela: ["Dela Gothic One", "sans-serif"],
    },
  },
  plugins: [],
};
