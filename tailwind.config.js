module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        space: ['var(--font-space)'],
      },
      colors: {
        indigo: {
          50: '#eef2ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        gray: {
          50: '#f9fafb',
          300: '#d1d5db',
          400: '#9ca3af',
          700: '#1c1c24',
          800: '#13131a',
          900: '#0a0a0f',
        },
      },
    },
  },
  plugins: [],
}
