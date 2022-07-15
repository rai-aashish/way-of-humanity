module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './slices/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          20: '',
          50: '#B2EBFF',
          100: '#71D5F9',
          600: '#0194D8',
          700: '#008ED5',
          800: '#006BAF',
          900: '#003E75',
          'light-brown': '#F6D5BD',
          'light-blue': '#DDF3FF',
        },
        backdrop: {
          dark: '#321D36',
          light: '#F7F1F0',
          disabled: '#DBDBDB',
          black: {
            100: '#000000',
            90: '#1c1c1b',
            80: 'rgba(0, 0, 0, 0.8)',
            60: 'rgba(0, 0, 0, 0.6)',
            40: 'rgba(0, 0, 0, 0.4)',
            20: 'rgba(0, 0, 0, 0.2)',
            8: 'rgba(0, 0, 0, 0.08)',
            4: 'rgba(0, 0, 0, 0.04)',
          },
          white: {
            100: '#FFFFFF',
            80: ' rgba(255, 255, 255, 0.8)',
            60: ' rgba(255, 255, 255, 0.6)',
            40: ' rgba(255, 255, 255, 0.4)',
            20: ' rgba(255, 255, 255, 0.2)',
            8: ' rgba(255, 255, 255, 0.08)',
            4: ' rgba(255, 255, 255, 0.4)',
          },
        },
        content: {
          heading: '#043763',
          subtitle: '#2F4C78',
          body: '#242424',
          placeholder: '#767E92',
          disabled: '#B0B0BA',
        },
        success: {
          light: '#DEF5EC',
          base: '#60B590',
          dark: '#1A4D2E',
        },
        error: {
          light: '#FFD2D2',
          base: '#B54141',
          dark: '#4F1111',
        },
        info: {
          light: '#E6F2FF',
          base: '#5F8DC3',
          dark: '#1C334E',
        },
        warning: {
          light: '#F5F2D4',
          base: '#F0BA47',
          dark: '#463104;',
        },
        stroke: {
          default: '#C7CACC',
          focus: '#006BAF',
          divider: 'rgba(223, 227, 229, 0.94)',
        },
        icon: {
          default: '#3E3D4B',
          disabled: '#A3A3A9',
        },
        scrim: 'rgba(39, 39, 39, 0.12)',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        content: ['Rubik', 'sans-serif'],
      },
      fontSize: {
        h1: ['3.188rem', '1.2'], //51px
        h2: ['2.563rem', '1.3'], //41px
        h3: ['2.063rem', '1.3'], //33px
        h4: ['1.688rem', '1.4'], //27px
        h5: ['1.313rem', '1.4'], //21px
        h6: ['1.063rem', '1.4'], //17px
        s1: ['1.438rem', '1.3'], //23px
        s2: ['1.188px', '1.5'], //19px
        s1: ['1.063rem', '1.4'], //17px
        b1: ['1.063rem', '1.5'], //17px
        b2: ['0.938rem', '1.5'], //15px
        c1: ['0.813rem', '1.3'], //13px
        c2: ['0.75rem', '1.3'], //12px
      },
      zIndex: {
        toast: '1000',
        tooltip: '1100',
      },
      aspectRatio: {
        '1/1': '1/1',
        '3/2': '3/2',
        '4/3': '4/3',
        '16/9': '16/9',
        '16/10': '16/10',
      },
      screens: {
        xl: '1200px',
        '2xl': '1366px',
        '3xl': '1600px',
      },
      spacing: {
        13: '3.25rem', //52px
        14: '3.5rem', //56px
        15: '3.75rem', //60px
        17: '4.25rem', //68px
        18: '4.5rem', //72px
        19: '4.75ren', //76px
        21: '5.25rem', //84px
        22: '5.5rem', //88px
        23: '5.75rem', //92px
        29: '7.25rem', //116px
        30: '7.5rem', //120px
        31: '7.75rem', //124px
        37: '9.25rem', //148px
        38: '9.5rem', //152px
        39: '9.75rem', //156px
        41: '10.25rem', //164px
        43: '10.75rem', //172px
        65: '16.25rem', //260px,
        66: '16.5rem', //266px
        'gutter-lg': '1.875rem', //30px
        'gutter-md': '1.25rem', //20px
        'gutter-sm': '1.25rem', //20px
      },
      boxShadow: {
        'all-sm': '0.31rem 0.31rem 1.5rem rgba(0,0,0,0.12)',
        'all-md': '0 0 1.875rem rgba(0, 0, 0, 0.15)',
        'all-lg': '0 0 1.875rem rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
