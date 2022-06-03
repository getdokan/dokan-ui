module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  purge: false,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
          "300": "var(--gray-300)",
        }
      },
      variables: {
        DEFAULT: {
          primary: {
            "50": "#EEF2FF",
            "100": "#E0E7FF",
            "200": "#C7D2FE",
            "300": "#A5B4FC",
            "400": "#818CF8",
            "500": "#7047EB",
            "600": "#4F46E5",
            "700": "#4338CA",
            "800": "#3730A3",
            "900": "#312E81"
          },
          danger: {
            "50": "#FEE2E2",
            "100": "#FECACA",
            "200": "#FCA5A5",
            "300": "#F87171",
            "400": "#F87171",
            "500": "#EF4444",
            "600": "#B91C1C",
            "700": "#991B1B",
            "800": "#7F1D1D",
            "900": "#DC2626",
          },
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
