import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
        <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true' />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap" rel="stylesheet" crossOrigin='true'/>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" crossOrigin='true' />
    <link href="https://cdn.jsdelivr.net/gh/mi-dexigner/Venus-Handicrafts-eProject@main/assets/css/all.min.css" rel="stylesheet" crossOrigin='true' />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mi-dexigner/Venus-Handicrafts-eProject@main/assets/css/styles.css" crossOrigin='true' />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument