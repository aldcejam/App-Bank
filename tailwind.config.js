module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#DEDEDE',
      'secondary': '#FFFFFF',
      'constrast': '#613EEA',
      'orange-cp': '#FF7D00',
      'black-cp': '#171D33',
      'green-cp': '#10C971',
      'transparent': '#FFFFFF00',
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
    screens: {
      'sm': {
        'max': '370px'
      }
    },
    fontFamily: {
      sans: ['Sarabun', 'sans-serif']
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '2x2': '20px'
    },
    extend: {
      boxShadow: {
        'md': '0px -10px 0px 0 #DEDEDE',

      },
      spacing: {
        '3/5': '60%',
        '1/4': '25%'
      }
    },
  },
  plugins: [],
}