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
        bg: '#f6f0e6',
        card: '#fdf9f2',
        tint: '#efe6d6',
        ink: '#2a221b',
        'ink-soft': '#5a4f43',
        'ink-mute': '#8a7d6e',
        accent: '#b8543c',
        'accent-deep': '#8a3c28',
        line: '#d9cdb8',
      },
      fontFamily: {
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '1320px',
      },
      fontSize: {
        'hero': 'clamp(48px, 7vw, 96px)',
        'section': 'clamp(36px, 5vw, 56px)',
      },
    },
  },
  plugins: [],
}

export default config
