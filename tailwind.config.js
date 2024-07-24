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
      spacing: {
        '160': '40rem',
      },
      boxShadow: {
        'custom': '1px 4px 12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'banner-about': "url('/banner-about.png')",
        'banner-brief': "url('/banner-brief.png')",      
      },
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

