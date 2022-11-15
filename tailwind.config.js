/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{html,js}',
    './src//components/**/*.{html,js}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'purple': 'linear-gradient(90deg, #A02279 11.45%, #A02279 11.45%)',
    },
    fontFamily: {
      sans: ['Red-Rose', 'normal'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [], 
}