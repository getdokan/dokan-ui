import type { Config } from 'tailwindcss';
import { extendedThemeColorsUsingVariables, themeColors } from './src/utils';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: extendedThemeColorsUsingVariables,
      variables: {
        DEFAULT: {
          colors: themeColors,
        },
      },
      borderRadius: {
        DEFAULT: '5px',
      },
    },
  },
  variants: {
    extend: {
      variables: {},
      keyframes: {
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right-fade': {
          '0%': { opacity: '0', transform: 'translateX(-2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left-fade': {
          '0%': { opacity: '0', transform: 'translateX(2px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-up-fade': 'slide-up-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        'slide-down-fade': 'slide-down-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        'slide-right-fade': 'slide-right-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
        'slide-left-fade': 'slide-left-fade 300ms cubic-bezier(0.16, 0, 0.13, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@mertasan/tailwindcss-variables')],
} satisfies Config;
