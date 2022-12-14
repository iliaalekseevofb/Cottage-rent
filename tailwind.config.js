module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'esm': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'short': { 'raw': '(max-height: 800px)' },
    },
    fontFamily: {
      'sans': ['"Roboto Slab"', 'sans'],
      'serif': ['Montserrat', 'serif']
    },
    extend: {
      colors: {
        'myGradient': 'rgba(0, 0, 0, 0.2)',
        'myBackground': 'rgba(0, 0, 0, 0.4)'
      },
    }
  },
  plugins: [],
}
