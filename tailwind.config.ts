import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "museo-moderno": ["MuseoModerno", "sans-serif"],
      },
      colors: {
        "dark-brown": "#1F1710",
        'cream': "#EADED2",
        "std-brown": "#271D16",
        "custom-gray": "#A9A3A3",
        "custom-orange": "#F9660B",
      },
      flex: {
        "card-custom-lg": "0 0 calc(33.3% - 20px)",
        "card-custom-md": "0 0 calc(50% - 20px)",
        "card-custom-sm": "0 0 100%",
      },
      padding: {
        "10p": "10%", // custom padding value
        "14p": "14%", // custom padding value
      },
      objectPosition: {
        physicsAward: "0% 75%",
        bball: "0% 50%",
      },
      listStyleType: {
        square: "square",
      },
      width:{
        'custom-accordion': '90vw'
      }
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
