/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4E4C1',
        offwhite: '#F9F7F4',
        espresso: '#3E2723',
        charcoal: '#2C2C2C',
        gold: '#D4AF37',
        berry: '#E91E63',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Lora', 'serif'],
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(62, 39, 35, 0.25)',
      },
    },
  },
  plugins: [],
};
