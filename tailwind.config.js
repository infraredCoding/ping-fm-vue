module.exports = {
  purge: ['./public/**/*.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'hsl(223, 87%, 63%)',
        secondary: 'hsl(223, 100%, 88%)',
        danger: 'hsl(354, 100%, 66%)',
        dark: 'hsl(209, 33%, 12%)',
        tgray: 'hsl(0, 0%, 59%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
