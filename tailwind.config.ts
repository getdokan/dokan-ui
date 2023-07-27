import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

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
      colors: {
        primary: {
          '50': 'var(--primary-50)',
          '100': 'var(--primary-100)',
          '200': 'var(--primary-200)',
          '300': 'var(--primary-300)',
          '400': 'var(--primary-400)',
          '500': 'var(--primary-500)',
          '600': 'var(--primary-600)',
          '700': 'var(--primary-700)',
          '800': 'var(--primary-800)',
          '900': 'var(--primary-900)',
        },
        danger: {
          '50': 'var(--danger-50)',
          '100': 'var(--danger-100)',
          '200': 'var(--danger-200)',
          '300': 'var(--danger-300)',
          '400': 'var(--danger-400)',
          '500': 'var(--danger-500)',
          '600': 'var(--danger-600)',
          '700': 'var(--danger-700)',
          '800': 'var(--danger-800)',
          '900': 'var(--danger-900)',
        },
        gray: {
          '50': 'var(--gray-50)',
          '100': 'var(--gray-100)',
          '200': 'var(--gray-200)',
          '300': 'var(--gray-300)',
          '400': 'var(--gray-400)',
          '500': 'var(--gray-500)',
          '600': 'var(--gray-600)',
          '700': 'var(--gray-700)',
          '800': 'var(--gray-800)',
          '900': 'var(--gray-900)',
        },
        yellow: {
          '50': 'var(--yellow-50)',
          '100': 'var(--yellow-100)',
          '200': 'var(--yellow-200)',
          '300': 'var(--yellow-300)',
          '400': 'var(--yellow-400)',
          '500': 'var(--yellow-500)',
          '600': 'var(--yellow-600)',
          '700': 'var(--yellow-700)',
          '800': 'var(--yellow-800)',
          '900': 'var(--yellow-900)',
        },

        green: {
          '50': 'var(--green-50)',
          '100': 'var(--green-100)',
          '200': 'var(--green-200)',
          '300': 'var(--green-300)',
          '400': 'var(--green-400)',
          '500': 'var(--green-500)',
          '600': 'var(--green-600)',
          '700': 'var(--green-700)',
          '800': 'var(--green-800)',
          '900': 'var(--green-900)',
        },

        red: {
          '50': 'var(--red-50)',
          '100': 'var(--red-100)',
          '200': 'var(--red-200)',
          '300': 'var(--red-300)',
          '400': 'var(--red-400)',
          '500': 'var(--red-500)',
          '600': 'var(--red-600)',
          '700': 'var(--red-700)',
          '800': 'var(--red-800)',
          '900': 'var(--red-900)',
        },

        blue: {
          '50': 'var(--blue-50)',
          '100': 'var(--blue-100)',
          '200': 'var(--blue-200)',
          '300': 'var(--blue-300)',
          '400': 'var(--blue-400)',
          '500': 'var(--blue-500)',
          '600': 'var(--blue-600)',
          '700': 'var(--blue-700)',
          '800': 'var(--blue-800)',
          '900': 'var(--blue-900)',
        },

        pink: {
          '50': 'var(--pink-50)',
          '100': 'var(--pink-100)',
          '200': 'var(--pink-200)',
          '300': 'var(--pink-300)',
          '400': 'var(--pink-400)',
          '500': 'var(--pink-500)',
          '600': 'var(--pink-600)',
          '700': 'var(--pink-700)',
          '800': 'var(--pink-800)',
          '900': 'var(--pink-900)',
        },
      },
      variables: {
        DEFAULT: {
          primary: {
            '50': '#EFEAFF',
            '100': '#CEBEFC',
            '200': '#BFACF9',
            '300': '#AB92F6',
            '400': '#997AF3',
            '500': '#8460EF',
            '600': '#7047EB',
            '700': '#5B32DA',
            '800': '#461aca',
            '900': '#370eb1',
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
          while: colors.white,
        },
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
