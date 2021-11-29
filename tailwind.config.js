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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
