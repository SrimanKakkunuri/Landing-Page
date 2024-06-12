/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/src/assests/bg-desktop.svg')",
        'mobile': "url('/src/assests/bg-mobile.svg')",
      }
    },
  },  
  plugins: [],
}

