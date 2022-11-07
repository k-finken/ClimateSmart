/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      themeDark: '#1FAB89',
      themeMedium: '#62D2A2',
      themeLight: '#9DF3C4',
      themeLightest: 'D7FBE8'
    },}
  },
  plugins: [],
}
