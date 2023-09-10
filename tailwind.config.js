/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        geek: {
          50: '#f0f5ff',
          100: '#d6e4ff',
          200: '#adc6ff',
          300: '#85a5ff',
          400: '#597ef7',
          500: '#2f54eb',
          600: '#1d39c4',
          700: '#10239e',
          800: '#061178',
          900: '#030852',
        },
        gracepurple: {
          50: '#f9f0ff',
          100: '#efdbff',
          200: '#d3adf7',
          300: '#b37feb',
          400: '#9254de',
          500: '#722ed1',
          600: '#531dab',
          700: '#391085',
          800: '#22075e',
          900: '#120338',
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  }
}
