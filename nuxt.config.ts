import { defineNuxtConfig } from '@nuxt/kit'

export default defineNuxtConfig({
  css: [
    '@/assets/main.css',
    // '@/assets/main.pcss',
  ],

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      }
    }
  }
})
