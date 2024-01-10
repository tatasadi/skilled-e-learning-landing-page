import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(234, 25%, 52%, 1)',
        dark: 'hsla(234, 53%, 16%, 1)',
        gray: 'hsla(233, 10%, 56%, 1)',
        secondary: 'hsla(341, 92%, 62%, 1)',
        'secondary-bright': 'hsla(341, 100%, 83%, 1)',
        pink: 'hsl(322, 87%, 55%)',
        orange: 'hsl(13, 100%, 64%)',
        blue: 'hsl(237, 100%, 64%)',
      },
    },
    fontFamily: {
      'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
