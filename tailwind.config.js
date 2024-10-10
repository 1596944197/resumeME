/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      tBlue: 'rgb(22,119,255)',
      tTitle: 'rgb(64,64,65)',
      tRed: 'rgb(248 113 113);'
    }
  },
  plugins: []
}
