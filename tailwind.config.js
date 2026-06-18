/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medGreen: {
          50: '#f0fdf4',   // Ultra light mint background ke liye
          100: '#dcfce7',
          600: '#16a34a',  // Pharmacy primary green
          700: '#15803d',
          900: '#14532d',  // Deep corporate green for text
        },
        medTeal: {
          50: '#f0fdfa',   // Nursing/Medical soft background
          600: '#0d9488',  // Compassion/Care teal-green
          700: '#0f766e',
        },
        medText: '#1e293b', // Slate 800 crisp dark text for readability
      }
    },
  },
  plugins: [],
}