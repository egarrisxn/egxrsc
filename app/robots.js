export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://egxrsc.vercel.app/sitemap.xml',
    host: 'https://egxrsc.vercel.app',
  }
}
