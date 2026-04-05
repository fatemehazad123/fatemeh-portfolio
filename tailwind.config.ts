import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#4FA6A1', light: '#e8f4f3' },
        slate: { DEFAULT: '#2E2E2C' },
        offwhite: { DEFAULT: '#F4F6F4' },
        terra: { DEFAULT: '#C96A4A', light: '#f5ede9' },
        sage: { DEFAULT: '#BFCFC6', light: '#edf2f0' },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        'fade-up': { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-up': 'fade-up 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
export default config
