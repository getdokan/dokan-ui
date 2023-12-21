import type { Config } from 'tailwindcss';

const themeColors = {
  primary: {
    50: '#EFEAFF',
    100: '#CEBEFC',
    200: '#AB92F6',
    300: '#997AF3',
    400: '#8460EF',
    500: '#7047EB',
    600: '#5B32DA',
    700: '#461ACA',
    800: '#370EB1',
    900: '#2D0B8D',
  },
  danger: {
    '50': '#F8E3E6',
    '100': '#F0C5C9',
    '200': '#E2A1A9',
    '300': '#E68F99',
    '400': '#DE6F7A',
    '500': '#E64B5F',
    '600': '#CD414C',
    '700': '#B92F37',
    '800': '#9F2225',
    '900': '#7F191C',
  },
  gray: {
    '50': '#F8F9F8',
    '100': '#F1F1F4',
    '200': '#E9E9E9',
    '300': '#D3D3D3',
    '400': '#A5A5AA',
    '500': '#828282',
    '600': '#5B5B60',
    '700': '#575757',
    '800': '#393939',
    '900': '#25252D',
  },
  yellow: {
    '50': '#FAEDCD',
    '100': '#F7E5B6',
    '200': '#F3DCA3',
    '300': '#F1D690',
    '400': '#EDCD7E',
    '500': '#EBC569',
    '600': '#EFBB40',
    '700': '#E4B54C',
    '800': '#DBA940',
    '900': '#D29E37',
  },
  green: {
    '50': '#D4FBEF',
    '100': '#B0EDDB',
    '200': '#9AE8D0',
    '300': '#88E2C5',
    '400': '#75D8B6',
    '500': '#68D1AB',
    '600': '#5CC49B',
    '700': '#00BC8B',
    '800': '#479E7A',
    '900': '#3D8869',
  },
  red: {
    '50': '#F8E3E6',
    '100': '#F0C5C9',
    '200': '#E2A1A9',
    '300': '#E68F99',
    '400': '#DE6F7A',
    '500': '#E64B5F',
    '600': '#CD414C',
    '700': '#B92F37',
    '800': '#9F2225',
    '900': '#7F191C',
  },
  blue: {
    '50': '#EFF6FF',
    '100': '#DBEAFE',
    '200': '#BFDBFE',
    '300': '#93C5FD',
    '400': '#60A5FA',
    '500': '#3B82F6',
    '600': '#2563EB',
    '700': '#1D4ED8',
    '800': '#2947BF',
    '900': '#1E3A8A',
  },
  pink: {
    '50': '#FDF2F8',
    '100': '#FCE7F3',
    '200': '#FBCFE8',
    '300': '#F9A8D4',
    '400': '#ECA6C0',
    '500': '#EC4899',
    '600': '#DB2777',
    '700': '#BE185D',
    '800': '#9D174D',
    '900': '#831843',
  },
}

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.scss',
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '5px',
      },
      colors: themeColors,
      variables: {
        DEFAULT: themeColors,
      },
    },
  },
  variants: {
    extend: {
      variables: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@mertasan/tailwindcss-variables'),
  ],
} satisfies Config;
