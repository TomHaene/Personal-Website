import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'museo-moderno' : ['MuseoModerno', 'sans-serif'],
      },
      colors: {
        'dark-brown' : '#1F1710',
        'cream' : "#EADED2",
        'std-brown' : '#271D16',
      }
    },
  },
  plugins: [],
} satisfies Config

