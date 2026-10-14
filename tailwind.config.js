
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { brand: '#A9B432', accent: '#01416F' },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.15)' }
    }
  },
  plugins: []
}
