
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        'primary': '#F7931F',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}