/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#7f54b3',
        lightText: '#646970',
        cardGray: '#f7f6f6',
        cardPurple: '#f6f5ff',
      },
    },
  },
  plugins: [],
};
