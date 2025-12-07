module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-red': '#CD291E',
        'accent-yellow': '#FDB912',
        'light-white': '#FFF9EE',
        'custom-grey': '#231F20',
        'dark-green': '#316131',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-40px) translateX(-10px)' },
          '75%': { transform: 'translateY(-20px) translateX(10px)' },
        },
      },
      animation: {
        'float': 'float 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}; 