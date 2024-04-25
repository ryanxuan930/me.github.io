/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'common': ['Geologica', 'Noto Sans TC', 'sans-serif'],
      }
    }
  },
  plugins: [],
};
