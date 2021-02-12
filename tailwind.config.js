module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      'news':['Notable','sans-serif'],
      'new':['Bebas Neue','cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
