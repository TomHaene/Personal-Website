/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "serif"],
      },
      colors: {
        "dark-brown": "#1F1710",
        "cream": "#EADED2",
        "std-brown": "#271D16",
        "custom-gray": "#A9A3A3",
        "custom-orange": "#F9660B",
        "darker-orange": "#E05B0A",
      },
    },
  },
  plugins: [],
};
