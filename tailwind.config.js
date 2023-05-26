/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      unbounded: ["Unbounded","cursive"],
      urbanist: ["Urbanist","sans-serif"],
    },
    screens: {
      sm: '640px',
      ms: '520px',
      mm: '700px',
      md: '768px',
      lg: '1024px',
      xl: '1025px',
      xxl: '1300px',
    },
  },
  plugins: [],
}
