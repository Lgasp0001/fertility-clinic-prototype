import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        berry: {
          DEFAULT: '#5D3E63',
          50: '#F5F2F7',
          100: '#EBE5EF',
          200: '#D7CADF',
          300: '#C2B0CF',
          400: '#AE95C0',
          500: '#5D3E63',
          600: '#523758',
          700: '#462F4C',
          800: '#3B2740',
          900: '#2F1F33',
        },
        rose: {
          DEFAULT: '#F4B8B8',
          50: '#FFF7F7',
          100: '#FFEDED',
          200: '#FEDADA',
          300: '#FDC6C6',
          400: '#FBB3B3',
          500: '#F4B8B8',
          600: '#DBA6A6',
          700: '#C39393',
          800: '#AA8181',
          900: '#926E6E',
        },
        champagne: {
          DEFAULT: '#F5E6DA',
          50: '#FDFBFA',
          100: '#FBF7F5',
          200: '#F7EDEA',
          300: '#F3E4DF',
          400: '#EFDAD5',
          500: '#F5E6DA',
          600: '#DDD0C4',
          700: '#C4B8AE',
          800: '#ABA199',
          900: '#918983',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #5D3E63 0%, #724E7A 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(93, 62, 99, 0.15)',
        'glass-hover': '0 12px 48px 0 rgba(93, 62, 99, 0.25)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
