/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        primaryDark: '#060914',
        primaryLight: '#1e293b',
        secondary: '#38bdf8',
        accent: '#f472b6',
        textPrimary: '#f8fafc',
        textSecondary: '#94a3b8',
        buttonHover: 'rgba(56, 189, 248, 0.1)',
        glass: 'rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'shine': 'shine 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'aurora': 'aurora 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        aurora: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.2)',
          },
          '100%': {
            transform: 'rotate(360deg) scale(1)',
          }
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
        'grid-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.shadow-neon': {
          'box-shadow': `0 0 5px ${theme('colors.secondary')}, 0 0 20px ${theme('colors.secondary')}`
        },
        '.shadow-glass': {
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
        }
      }
      addUtilities(newUtilities, ['hover'])
    }
  ],
}
