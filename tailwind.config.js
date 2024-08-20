/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    animation: {
      'spin-fast': 'spin 0.3s linear infinite',
    },
  },
  plugins: [],
};
