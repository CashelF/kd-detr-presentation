/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slide: {
          bg: 'rgb(var(--slide-bg) / <alpha-value>)',
          surface: 'rgb(var(--slide-surface) / <alpha-value>)',
          border: 'rgb(var(--slide-border) / <alpha-value>)',
          text: 'rgb(var(--slide-text) / <alpha-value>)',
          muted: 'rgb(var(--slide-muted) / <alpha-value>)',
          accent: 'rgb(var(--slide-accent) / <alpha-value>)',
          green: 'rgb(var(--slide-green) / <alpha-value>)',
          amber: 'rgb(var(--slide-amber) / <alpha-value>)',
          red: 'rgb(var(--slide-red) / <alpha-value>)',
          purple: 'rgb(var(--slide-purple) / <alpha-value>)',
          teal: 'rgb(var(--slide-teal) / <alpha-value>)',
          stone: 'rgb(var(--slide-stone) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [],
}
