import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        elev: 'var(--bg-elev)',
        raise: 'var(--bg-raise)',
        fg: 'var(--fg)',
        muted: 'var(--fg-muted)',
        dim: 'var(--fg-dim)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        accent: 'var(--accent)',
        'accent-dim': 'var(--accent-dim)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        frame: '1120px',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
