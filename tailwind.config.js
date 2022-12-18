/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-black": "#0c0c0c",
        "txt-white": "#e5e5e5",
        "border-gray": "#2f3336",
        "dazzled-blue": "#305B9C",
        "onhover-blue": "#0A1720",
        "onhover-green": "#071A14",
        "onhover-red": "#210914",
        "twit-blue": "#1A8CD9",
        "twit-green": "#00A970",
        "twit-red": "#F91880",
      },
    },
  },
  plugins: [],
};
