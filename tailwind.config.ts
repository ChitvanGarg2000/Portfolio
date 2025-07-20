import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      // You can customize fonts, colors, etc., here
      colors: {
        // Example: add brand color
        brand: {
          DEFAULT: '#6366f1',
          dark: '#4f46e5',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // ShadCN uses this
  ],
}
export default config
