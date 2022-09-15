/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}",
            "./node_modules/flowbite/**/*.{js,jsx,tsx,ts}",
            './node_modules/flowbite-react/**/*.{js,jsx,tsx,ts}'],
  
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
