import Head from 'next/head'

const Meta = ({ title, description,shareImage}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
       {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

{shareImage && (
        <>
          <meta property="og:image" content={shareImage} />
          <meta name="twitter:image" content={shareImage} />
          <meta name="image" content={shareImage} />
        </>
      )}
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Celebrities Jackets',
  shareImage: '/public/vercel.svg',
  description: 'Get the latest news in web dev',
}

export default Meta