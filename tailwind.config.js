/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        costum: " 2.5px 2.5px 0px 0px",
      },
      linearGradientColors: (theme) => ({
        "custom-gradient": [
          "90deg",
          theme("colors.blue.200"),
          theme("colors.blue.800"),
        ],
      }),
      colors: {
        primary: "#BED9DD",
        secondry: "#DEEBEC",
        primarytext: "#005354",
        secondarytext: "#B19149",
        gradiantprimary: "#B6D2D7",
      },
    },
  },
  plugins: [],
};
