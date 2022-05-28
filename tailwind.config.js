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
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#7047EB",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
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
  ],
}
