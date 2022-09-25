/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {

      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',

      },
      height: {
        '128': '38rem',
      }
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('flowbite/plugin')
    ],
  }
}
