/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#000235', // your original
        'primary-purple': '#9b8cf5', // the button background
        'secondary-blue': '#bed9ed', // CTA blue
        'deep-blue': '#1b103c', // background start
        'navy-blue': '#132041', // background end
        'soft-dark': '#20184b', // sections
        'testimonial-card': '#2b2359', // testimonials bg
        'light-text': '#cbd5e1', // lighter gray text
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, #1b103c, #132041)',
        'gradient-to-r': 'linear-gradient(to right, #89aaf3, #bed9ed)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optional if you want a cleaner modern font
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
