/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-zoom': 'spin-zoom 0.3s linear infinite',
        'fade-out': 'fade-out 0.1s ease-out forwards',
        'fade-in': 'fade-in 0.1s ease-in forwards',
      },
      keyframes: {
        'spin-zoom': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg) scale(1.25)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [],
};
