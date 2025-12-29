/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#2a2a2a',
        },
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        accent: {
          purple: '#a855f7',
          cyan: '#06b6d4',
        },
        nebula: {
          pink: '#FF69B4',
          magenta: '#E91E63',
          orange: '#FF6B35',
          coral: '#FF8C42',
          red: '#E63946',
          rose: '#F72585',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
