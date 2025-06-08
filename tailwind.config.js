// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/**/*.{js,ts,jsx,tsx}", "./src/**/**/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #facc15)',
      },
      backgroundSize: {
        '200': '200% 200%',
      },
      animation: {
        'bg-move': 'bgMove 10s ease infinite',
      },
      keyframes: {
        bgMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
