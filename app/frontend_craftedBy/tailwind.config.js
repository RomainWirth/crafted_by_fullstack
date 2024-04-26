import daisyui from 'daisyui'
// import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
  content: ['./src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screen: {
          '2xl': '1600px'
        }
      },
      screens: {
        // iPad Pro vertical is 1024px exactly
        lg: '1025px'
      },
      height: {
        '80dvh': '80dvh'
      },
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        'tertiary-light': 'var(--tertiary-light)',
        dark: 'var(--dark)',
        'grey-light': 'var(--grey-light)',
        'grey-medium-light': 'var(--grey-medium-light)',
        grey: 'var(--grey)',
        'grey-medium-dark': 'var(--grey-medium-dark)',
        'grey-dark': 'var(--grey-dark)',
        white: 'var(--white)',
        black: 'var(--black)'
      },
      fontFamily: {}
    }
  },
  daisyui: {
    // themes: [
    //   {
    //     light: {
    //       ...require('daisyui/src/theming/themes')['light'],
    //       primary: 'primary',
    //       secondary: 'secondary',
    //       tertiary: 'tertiary'
    //     }
    //   },
    //   {
    //     dark: {
    //       ...require('daisyui/src/theming/themes')['dark']
    //     }
    //   }
    // ]
  },
  plugins: [daisyui]
}

export default config
