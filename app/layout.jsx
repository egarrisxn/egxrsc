import './styles/global.css'
import styles from './layout.module.css'
import {GeistSans} from 'geist/font/sans'
import {GeistMono} from 'geist/font/mono'
import {ThemeProvider} from 'next-themes'
import {Analytics} from '@vercel/analytics/react'

export const dynamic = 'force-static'

export default function RootLayout({children}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <div className={styles.wrapper}>
            <main className={styles.main}>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://egxworld.net'),
  title: {
    template: '%s | EGXWORLD',
    default: 'EGXWORLD',
  },
  description: 'Full Stack Developer. Digital Product Designer.',
   referrer: 'origin-when-cross-origin',
  keywords: [
    'eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  openGraph: {
    title: 'EGXWORLD',
    url: 'https://egxworld.net',
    siteName: "EGXWORLD",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://egxworld.net/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "EGXWORLD",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'EGXWORLD',
    card: 'summary_large_image',
    creator: '@eg_xo_',
  },
  icons: {
    shortcut: 'https://egxworld.net/favicons/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
}