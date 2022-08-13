module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Roboto Slab"', 'sans'],
      'serif': ['Montserrat', 'serif']
    },
    extend: {
      colors: {
        'myGradient': 'rgba(0, 0, 0, 0.2)',
      }
    }
  },
  plugins: [],
}
