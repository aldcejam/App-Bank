module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FFFFFF',
      'secondary': '#DEDEDE',
      'constrast': '#613EEA',
      'orange-cp': '#FF7D00',
      'black-cp': '#171D33',
      'green-cp': '#10C971',
      'transparent': '#FFFFFF00',
      cardgreen: {
        left: '#7BED8E',
        right: '#7EFB93'
      },
      cardblack: {
        left: '#171D33',
        right: '#212946'
      },
      cardpink: {
        left: '#FB7EDB',
        right: '#F38AD9'
      },
      cardred: {
        left: '#FB7E7E',
        right: '#F68787'
      },
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
      'ssm': '380px',
      'sm': {
        'max': '370px'
      },
      'msm': '450px'
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
    minWidth: {
      '52': '13rem',
    },
    maxWidth: {
      '16': '64px',
      'sm': '420px',
      'md': '450px'
    },
    extend: {
      width: {
        '9/10': '90vw',
        '9/10%': '90%',
      },
      boxShadow: {
        'md': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        'inner': 'rgba(50, 50, 93, 0.1) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'

      },
      spacing: {
        '3/5': '63%',
        '1/4': '25%',
        '7/20': '35%',
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}