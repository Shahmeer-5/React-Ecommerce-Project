/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",               // Root HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // All React components
  ],
  theme: {
    extend: {}, // Customizations ke liye
  },
  plugins: [],
};