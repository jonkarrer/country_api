module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["Nunito Sans", "sans-serif"],
    },
    colors: {
      dark: {
        elements: "hsl(209, 23%, 22%)",
        background: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 98%)",
      },
      light: {
        text: "hsl(200, 15%, 8%)",
        input: "hsl(0, 0%, 52%)",
        back: "hsl(0, 0%, 98%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
