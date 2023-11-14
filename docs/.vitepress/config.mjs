import { defineConfig } from 'vitepress'
import mkcert from 'vite-plugin-mkcert'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Full-stack From Scratch',
  description: 'Do some full-stack coding from scratch',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  vite: {
    plugins: [
      mkcert(),
      UnoCSS(),
    ],
  },
})
