import localFont from 'next/font/local'

// Name-only subset, served locally. License: public/fonts/anton-OFL.txt.
export const mastheadFont = localFont({
  src: '../public/fonts/anton-name.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  fallback: ['Impact', 'Arial Narrow', 'sans-serif'],
  adjustFontFallback: false,
})

// SIL Open Font License: public/fonts/tinos-OFL.txt.
export const editorialSerif = localFont({
  src: '../public/fonts/Tinos-Regular.ttf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-editorial-serif',
  fallback: ['Georgia'],
  adjustFontFallback: 'Times New Roman',
})
