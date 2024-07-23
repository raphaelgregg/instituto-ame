/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      backgroundImage: {
        'banner-header': "url('/public/banner.png')",      },
      colors: {
        'azure-50': '#EFFAFF',
        'azure-100': '#DEF3FF',
        'azure-200': '#B6EAFF',
        'azure-300': '#75DCFF',
        'azure-400': '#2CCBFF',
        'azure-500': '#00AFEF',
        'azure-600': '#0091D4',
        'azure-700': '#0073AB',
        'azure-800': '#00618D',
        'azure-900': '#065174',
        'azure-950': '#04334D',
        'torch-500': '#ED3237'
      }

    },
  },
  plugins: [],
}

