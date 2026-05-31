import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      animation: {
        'codion-shimmer': 'codionShimmer 4.5s ease-in-out infinite',
      },
      keyframes: {
        codionShimmer: {
          '0%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 0 rgba(255,255,255,0))',
          },
          '50%': {
            filter: 'brightness(1.12) drop-shadow(0 0 6px rgba(255,255,255,0.35))',
          },
        },
      },
    },
  },
};

export default config;
