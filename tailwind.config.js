/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-light": "#202124",
        "gray-dark": "#35363A",
        "gray-light": "#9B9B9B",
        "gray-mild" : "#3E3F43",
        "blue-sky": "#8EB5FE",
        "green-lawn": "#0C9A56",
        "blue-navy": "#1768EC",
        "blue-dark": "#1C64EC",
        "white-dark": "#F4F4F4",
      },
      scrollBar: {
        height: "200px",
        "overflow-y": "scroll",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
