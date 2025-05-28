/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0a0a0a',
        card: {
          DEFAULT: '#f9fafb',
          foreground: '#1f2937',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        primary: {
          DEFAULT: '#0081A7',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#66CFD5',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#4ade80',
          foreground: '#064e3b',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#e5e7eb',
        input: '#d1d5db',
        ring: '#3b82f6',
        chart: {
          1: '#f87171',
          2: '#facc15',
          3: '#34d399',
          4: '#60a5fa',
          5: '#a78bfa',
        },
        sidebar: {
          DEFAULT: '#1e293b',
          foreground: '#f1f5f9',
          primary: '#0f172a',
          'primary-foreground': '#e2e8f0',
          accent: '#2563eb',
          'accent-foreground': '#dbeafe',
          border: '#334155',
          ring: '#3b82f6',
        },
      },
      borderRadius: {
        lg: 12,
        md: 8,
        sm: 4,
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
