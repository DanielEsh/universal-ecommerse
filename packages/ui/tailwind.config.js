/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--primary-500)',
          400: 'var(--primary-400)',
          300: 'var(--primary-300)',
          200: 'var(--primary-200)',
          100: 'var(--primary-100)',
        },
        secondary: {
          500: 'var(--secondary-500)',
          400: 'var(--secondary-400)',
          300: 'var(--secondary-300)',
          200: 'var(--secondary-200)',
          100: 'var(--secondary-100)',
        },
        highlight: {
          500: 'var(--highlight-500)',
          400: 'var(--highlight-400)',
          300: 'var(--highlight-300)',
          200: 'var(--highlight-200)',
          100: 'var(--highlight-100)',
        },
        surface: {
          500: 'var(--surface-500)',
          400: 'var(--surface-400)',
          300: 'var(--surface-300)',
          200: 'var(--surface-200)',
          100: 'var(--surface-100)',
        },
        brand: {
          500: 'var(--brand-500)',
          400: 'var(--brand-400)',
          300: 'var(--brand-300)',
          200: 'var(--brand-200)',
          100: 'var(--brand-100)',
        },
        success: {
          500: 'var(--success-500)',
          400: 'var(--success-400)',
          300: 'var(--success-300)',
          200: 'var(--success-200)',
          100: 'var(--success-100)',
        },
        error: {
          500: 'var(--error-500)',
          400: 'var(--error-400)',
          300: 'var(--error-300)',
          200: 'var(--error-200)',
          100: 'var(--error-100)',
        },
        warning: {
          500: 'var(--warning-500)',
          400: 'var(--warning-400)',
          300: 'var(--warning-300)',
          200: 'var(--warning-200)',
          100: 'var(--warning-100)',
        },
        link: {
          500: 'var(--link-500)',
          400: 'var(--link-400)',
          300: 'var(--link-300)',
          200: 'var(--link-200)',
          100: 'var(--link-100)',
        },
      },
      keyframes: {
        ripple: {
          '100%': {
            opacity: 0,
            transform: 'scale(2.5)',
          },
        },
      },
      animation: {
        ripple: 'ripple 0.4s linear',
      },
    },
  },
  plugins: [],
}

module.exports = tailwindConfig
