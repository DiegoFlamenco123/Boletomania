/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'nav-color': 'rgb( 225, 224, 217)',
        'footer-color': '#577D86',
        'quote-color': '#87CCB9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],

}
