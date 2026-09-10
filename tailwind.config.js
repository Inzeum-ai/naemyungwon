/** @type {import('tailwindcss').Config} */
// Every colour here is a CSS custom property from styles/tokens.css (generated from
// design-system/sumuk.tokens.json). The site never carries a hex of its own; a ground
// (.ground-hanji) remaps the same role names, so components are ground-agnostic.
const roles = {
  transparent: 'transparent',
  current: 'currentColor',

  // surfaces
  bg: 'var(--bg)',
  'bg-deep': 'var(--bg-deep)',
  surface: 'var(--surface)',
  'surface-high': 'var(--surface-high)',
  chip: 'var(--chip-bg)',
  fill1: 'var(--fill1)',
  fill2: 'var(--fill2)',
  fill3: 'var(--fill3)',

  // lines
  line: 'var(--line)',
  'line-soft': 'var(--line-soft)',
  scrim: 'var(--scrim)',
  'scrim-soft': 'var(--scrim-soft)',

  // text — four steps, every one AA on its ground
  fg: 'var(--text-display)',
  copy: 'var(--text)',
  sub: 'var(--text-sub)',
  muted: 'var(--text-muted)',
  faint: 'var(--text-faint)',

  // action — a neutral, never the seal (ADR 0037)
  primary: 'var(--accent)',
  'primary-fg': 'var(--on-accent)',
  'primary-pressed': 'var(--accent-pressed)',
  'primary-soft': 'var(--accent-soft)',

  // the seal — 1–2 points per viewport
  brand: 'var(--brand)',
  'brand-pressed': 'var(--brand-pressed)',
  'on-brand': 'var(--on-brand)',

  // status
  positive: 'var(--positive)',
  danger: 'var(--danger)',
  'danger-fill': 'var(--danger-fill)',
  'on-danger': 'var(--on-danger)',
}

module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  // Touch devices fire :hover on tap; gate every hover: utility behind (hover: hover).
  future: { hoverOnlyWhenSupported: true },
  theme: {
    colors: roles,
    fontFamily: {
      sans: [
        '"Pretendard Variable"',
        'Pretendard',
        '"Apple SD Gothic Neo"',
        '"Noto Sans KR"',
        'system-ui',
        'sans-serif',
      ],
    },
    // The site's type ramp. Hangul display: tracking 0, leading 1.15–1.25 (measured KR pass 2026-09-06).
    fontSize: {
      meta: ['13px', { lineHeight: '1.5', fontWeight: '500' }],
      'body-sm': ['15px', { lineHeight: '1.6' }],
      body: ['17px', { lineHeight: '1.7' }],
      'body-lg': ['18px', { lineHeight: '1.75' }],
      h3: ['20px', { lineHeight: '1.4', fontWeight: '600' }],
      h2: ['24px', { lineHeight: '1.35', fontWeight: '600' }],
      h1: ['36px', { lineHeight: '1.25', fontWeight: '600' }],
      'display-sm': ['40px', { lineHeight: '1.2', fontWeight: '500' }],
      display: ['56px', { lineHeight: '1.2', fontWeight: '500' }],
      'display-xl': ['72px', { lineHeight: '1.15', fontWeight: '500' }],
      'numeric-sm': ['40px', { lineHeight: '1.1', fontWeight: '500' }],
      numeric: ['56px', { lineHeight: '1.1', fontWeight: '500' }],
    },
    letterSpacing: { normal: '0' },
    borderRadius: {
      none: '0',
      sm: 'var(--radius-sm)',
      md: 'var(--radius-md)',
      lg: 'var(--radius-lg)',
      full: '9999px',
    },
    // Depth on ink is a surface step plus a hairline. No shadows.
    boxShadow: { none: 'none' },
    extend: {
      // A viewport tall enough for the proof numbers to sit along the ridge inside the first
      // viewport (home). Stacks with md: → `md:tall:block`.
      screens: { tall: { raw: '(min-height: 900px)' } },
      borderColor: { DEFAULT: 'var(--line)' },
      spacing: {
        gutter: '24px',
        'gutter-lg': '48px',
        hit: '44px',
        button: '52px',
        row: '56px',
        header: '64px',
      },
      maxWidth: {
        measure: '34em',
        content: '720px',
        page: '1440px',
      },
      transitionTimingFunction: {
        settle: 'var(--ease-settle)',
        standard: 'var(--ease-standard)',
      },
      transitionDuration: {
        150: '150ms',
        450: '450ms',
      },
      zIndex: {
        raised: '1',
        header: '2',
        overlay: '3',
        modal: '4',
      },
    },
  },
  plugins: [],
}
