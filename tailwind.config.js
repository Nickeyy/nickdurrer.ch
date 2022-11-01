/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        normalBlue: '#2F74C8',
        darkBlue: '#2169A3',
        lightBlue: '#408FCE',
        lightCreme: '#E6E6E4',
        darkCreme: '#CBCBCB'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
