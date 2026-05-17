/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue-light': '#8ecae6ff',
        'blue-green': '#219ebcff',
        'deep-space-blue': '#023047ff',
        'amber-flame': '#ffb703ff',
        'princeton-orange': '#fb8500ff',
      },
    },
  },
  plugins: [],
}
