import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      'after-mobile': { min: '768px' },
      tablet: { min: '768px', max: '1439px' },
      'before-desktop': { max: '1439px' },
      desktop: { min: '1440px' },
    },
  },
  plugins: [],
}
export default config
