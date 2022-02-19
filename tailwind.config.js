module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#F9FAFB',
      'constrast': '#613EEA',
      'orange-cp': '#FF7D00',
      'black-cp':'#171D33',
      'green-cp': '#10C971',
      'green-weak-cp': '#ECECFB',
      gray: {
        100: '#f7fafc',
        200: '#E0E0E1',
        300: '#C7C7C7',
        400: '#ADADAD',
        500: '#949494',
        600: '#7A7A7A',
        700: '#616161',
        800: '#474747',
        900: '#2E2E2E',
      }
    },
    fontFamily: {
      sans: ['Sarabun', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}