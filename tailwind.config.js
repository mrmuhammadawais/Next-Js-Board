/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: '#4A4A4A',
        fontFamily: {
          satoshi: ['var(--font-satoshi)', 'sans-serif'], // Use the font loaded in your layout
          geistSans: ['var(--font-geist-sans)', 'sans-serif'],
          geistMono: ['var(--font-geist-mono)', 'monospace'],
        },
      },
    },
  },
  plugins: [],
};
