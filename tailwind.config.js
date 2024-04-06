/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-light": "#202124",
        "gray-dark": "#35363A",
        "blue-sky": "#8EB5FE",
        "green-lawn": "#0C9A56",
        "blue-navy": "#1768EC",
        "blue-dark": "#1C64EC",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
