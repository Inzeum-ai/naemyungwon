import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 내명원 브랜드 컬러 - 산과 하늘을 연상시키는 차분한 블루-그레이
        'nm-sky': {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        'nm-mist': '#b8c5d0',
        'nm-mountain': '#6b7d8a',
        'nm-deep': '#1e3a5f',
      },
      fontFamily: {
        'display': ['Noto Serif KR', 'Georgia', 'serif'],
        'body': ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-mountain': 'linear-gradient(180deg, #d9e2ec 0%, #b8c5d0 50%, #6b7d8a 100%)',
        'gradient-sky': 'linear-gradient(180deg, #f0f4f8 0%, #d9e2ec 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
