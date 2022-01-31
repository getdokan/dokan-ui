module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './stories/*'],
  purge: false,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './stories/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
