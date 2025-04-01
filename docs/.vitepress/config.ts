export default {
  title: 'Tech Docs',
  description: 'Documentation for the Tech Docs project',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API Reference', link: '/api/reference' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'Reference', link: '/api/reference' },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [],
}