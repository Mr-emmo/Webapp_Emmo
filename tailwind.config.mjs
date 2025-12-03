/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B8A9", // main teal
        emmo: {
          teal: "#00B8A9",
          dark: "#062C30",
          light: "#E6FFFB"
        }
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        // use built-in shadow-xl in most places, but keep one custom if you want
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
