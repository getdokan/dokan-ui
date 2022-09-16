module.exports = {
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
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
          "500": "var(--primary-500)",
          "600": "var(--primary-600)",
          "700": "var(--primary-700)",
          "800": "var(--primary-800)",
          "900": "var(--primary-900)"
        },
        danger: {
          "50": "var(--danger-50)",
          "100": "var(--danger-100)",
          "200": "var(--danger-200)",
          "300": "var(--danger-300)",
          "400": "var(--danger-400)",
          "500": "var(--danger-500)",
          "600": "var(--danger-600)",
          "700": "var(--danger-700)",
          "800": "var(--danger-800)",
          "900": "var(--danger-900)"
        },
        gray: {
          "50": "var(--gray-50)",
          "100": "var(--gray-100)",
          "200": "var(--gray-200)",
          "300": "var(--gray-300)",
          "400": "var(--gray-400)",
          "500": "var(--gray-500)",
          "600": "var(--gray-600)",
          "700": "var(--gray-700)",
          "800": "var(--gray-800)",
          "900": "var(--gray-900)"
        }
      },
      variables: {
        DEFAULT: {
          primary: {
            "50": "#EFEAFF",
            "100": "#CEBEFC",
            "200": "#BFACF9",
            "300": "#AB92F6",
            "400": "#997AF3",
            "500": "#8460EF",
            "600": "#7047EB",
            "700": "#5B32DA",
            "800": "#461aca",
            "900": "#370eb1"
          },
          danger: {
            "50": "#F8E3E6",
            "100": "#F0C5C9",
            "200": "#E2A1A9",
            "300": "#E68F99",
            "400": "#DE6F7A",
            "500": "#E64B5F",
            "600": "#CD414C",
            "700": "#B92F37",
            "800": "#9F2225",
            "900": "#7F191C",
          },
          gray: {
            "50": "#F8F9F8",
            "100": "#F1F1F4",
            "200": "#E9E9E9",
            "300": "#D3D3D3",
            "400": "#A5A5AA",
            "500": "#828282",
            "600": "#5B5B60",
            "700": "#575757",
            "800": "#393939",
            "900": "#25252D",
          }
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
}
