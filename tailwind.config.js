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
      },
    },
  },
  plugins: [],
};
