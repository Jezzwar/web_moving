/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B2B',
          'orange-light': '#FF8F5E',
          'orange-pale': '#FFF1EB',
          navy: '#2E3444',
          'navy-700': '#3C4254',
          'navy-500': '#4A5264',
        },
        surface: {
          white: '#FFFFFF',
          'gray-50': '#F8F9FB',
          'gray-100': '#F1F3F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(15,26,46,0.08)',
        hover: '0 8px 24px rgba(15,26,46,0.14)',
        form: '0 16px 48px rgba(15,26,46,0.12)',
      },
    },
  },
  plugins: [],
}
