import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#111827',
          foreground: '#F9FAFB'
        },
        accent: {
          DEFAULT: '#16a34a'
        }
      }
    }
  },
  plugins: []
}

export default config

