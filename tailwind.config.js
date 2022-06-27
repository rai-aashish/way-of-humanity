module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './slices/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#FFE8DE',
          100: '#EFC4BA',
          600: '#B68073',
          700: '#7D433A',
          800: '#5E2B29',
          900: '#4F1E1F',
          'light-brown': '#E9D6C5',
          'light-blue': '#DDF3FF',
          'light-green': '#E1F0BD',
          'light-pink': '#EEE9F1',
        },
        backdrop: {
          dark: '#321D36',
          light: '#F7F1F0',
          disabled: '#DBDBDB',
          black: {
            100: '#000000',
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
          heading: '#321D36',
          subtitle: 'rgba(50, 29, 54, 0.84)',
          body: 'rgba(50, 29, 54, 0.74)',
          placeholder: 'rgba(50, 29, 54, 0.58)',
          disabled: 'rgba(50, 29, 54, 0.4)',
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
          focus: '#321D36',
          divider: 'rgba(223, 227, 229, 0.94)',
        },
        icon: {
          default: '#3E3D4B',
          disabled: '#A3A3A9',
        },
        scrim: 'rgba(39, 39, 39, 0.1)',
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        content: ['Rubik', 'sans-serif'],
        'heading-calligraphy': ['Dancing Script', 'cursive'],
      },
      fontSize: {
        h1: ['51px', '1.2'],
        h2: ['41px', '1.3'],
        h3: ['33px', '1.3'],
        h4: ['27px', '1.4'],
        h5: ['21px', '1.4'],
        h6: ['17px', '1.4'],
        s1: ['23px', '1.3'],
        s2: ['19px', '1.5'],
        s1: ['17px', '1.4'],
        b1: ['17px', '1.5'],
        b2: ['15px', '1.5'],
        c1: ['13px', '1.3'],
        c2: ['11px', '1.3'],
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
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '2rem',
          '2xl': '6rem',
        },
      },
      spacing: {
        15: '3.75rem', //60px
        17: '4.25rem', //68px
        21: '5.25rem', //84px
        lgGutter: '1.875rem',
        mdGutter: '1.25rem',
      },
      boxShadow: {
        'all-md': '0.31rem 0.31rem 1.5rem rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
};
