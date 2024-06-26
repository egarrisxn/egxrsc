export function getMetadata({
  title,
  description,
  image,
  hidden,
  date,
  lastModified,
  author = 'Ethan G',
  path,
}) {
  const domain =
    process.env.NODE_ENV === 'production'
      ? 'https://egxrsc.vercel.app'
      : process.env.NEXT_PUBLIC_VERCEL_URL
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
        : 'http://localhost:3000'

  return (
    <>
      {title.indexOf('Showcase') > -1 ? (
        <title>{title}</title>
      ) : (
        <title>{`${title} - ${author}`}</title>
      )}
      <meta name='og:title' content={title} />

      {/* Description */}
      <meta name='description' content={description} />
      <meta name='og:description' content={description} />

      {/* Image */}
      <meta name='twitter:image' content={`${domain}${image}`} />
      <meta name='og:image' content={`${domain}${image}`} />

      {/* URL */}
      <meta name='og:url' content={`${domain}${path}`} />

      {/* General */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='Content-Language' content='en' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='Showcase' />
      <meta property='og:site_name' content='Showcase' />
      <meta name='apple-mobile-web-app-title' content='Showcase' />
      <meta name='author' content={author} />
      <meta property='og:type' content='website' />
      <meta charSet='utf-8' />
      <meta property='og:locale' content='en' />

      {/* Favicons */}
      <link rel='manifest' href='/favicon/manifest.json' />
      <meta name='theme-color' content='#000000' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link
        rel='icon'
        type='image/svg+xml'
        href='/favicon/favicon-32x32.png'
        key='dynamic-favicon'
      />

      {date && <meta name='date' content={date} />}
      {lastModified && <meta name='last-modified' content={lastModified} />}
      {hidden && <meta name='robots' content='noindex' />}
    </>
  )
}
