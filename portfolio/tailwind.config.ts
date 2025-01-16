import type { Config } from 'tailwindcss'

const config: Config = {
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
        'main': '#2e2f34',
        'pink': '#f50559',
        'black': '#2b2b33',
        'secondSlide': '#34353a',
      },
      fontSize: {
        'small': '10px',
        'medium':'16px',
        'large': '20px',
      },
      screens: {
        'sm': '480px',
        'laptop': '1024px',  
        'desktop': '1280px',
      },
      fontFamily: {
        sans: ['"Press Start 2P"', 'cursive', 'system-ui'],
      },
    },
  },
  plugins: [],
}
export default config
