module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "Ubuntu",
      },
      colors: {
        primary: {
          DEFAULT: "#050F1E",
          50: "#1F5EBB",
          100: "#1C55AA",
          200: "#164387",
          300: "#113264",
          400: "#0B2041",
          500: "#050F1E",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        secondary: {
          DEFAULT: "#EF233C",
          50: "#FBCED4",
          100: "#FABBC3",
          200: "#F795A1",
          300: "#F56F7F",
          400: "#F2495E",
          500: "#EF233C",
          600: "#CB0F26",
          700: "#970B1C",
          800: "#630712",
          900: "#2E0309",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
