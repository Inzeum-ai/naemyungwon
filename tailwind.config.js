/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary (이미지 기반)
        'sky-light': '#B1CEDF',
        'mist': '#AECBDE',
        'mountain-mid': '#72A2C9',
        'mountain-deep': '#4A7BA7',
        'serene': '#90B6D3',
        
        // Secondary
        'cloud': '#F5F8FA',
        'haze': '#E8EEF3',
        'ink': '#2C3E50',
        'light-ink': '#4A5568',
        'warm': '#D4C5B5',
        
        // Semantic
        'success': '#38A169',
        'warning': '#B7791F',
        'error': '#C53030',

        // Additional
        'primary': '#4A7BA7',
        'background-light': '#F5F8FA',
      },
      fontFamily: {
        'display': ['Noto Sans KR', 'Pretendard', 'Manrope', 'sans-serif'],
        'serif': ['Noto Serif KR', 'Playfair Display', 'serif'],
        'sans': ['Noto Sans KR', 'Pretendard', 'Inter', 'sans-serif'],
        'en-serif': ['Playfair Display', 'serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(74, 123, 167, 0)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 15px rgba(74, 123, 167, 0.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
