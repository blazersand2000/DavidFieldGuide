/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
   theme: {
      extend: {},
   },
   plugins: [
      require('@tailwindcss/typography'),
      function ({ addBase }) {
         addBase({
            // 'h1': { '@apply text-4xl font-bold': {} },
            // 'h2': { '@apply text-3xl font-semibold': {} },
            // 'h3': { '@apply text-2xl font-semibold': {} },
            // 'p': { '@apply text-base leading-relaxed': {} },
            // 'ul': { '@apply list-disc pl-5': {} },
            // 'ol': { '@apply list-decimal pl-5': {} },
         });
      },
      require('daisyui'),
   ],
   daisyui: {
      themes: [
         'light', // Default light theme
         'dark',  // Default dark theme
         'cupcake', // Example of another built-in theme
         // Add more themes as needed
      ],
   },
}