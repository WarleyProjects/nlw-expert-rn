/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      heading: 'Inter_600SemiBold',
      sutitle: 'Inter_500Medium',
      body: 'Inter_400Regular',
      bold: 'Inter_700Bold'
    },
  },
  plugins: [],
}

