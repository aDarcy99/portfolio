import Document, { Html, Head, Main, NextScript } from 'next/document';

class _Document extends Document {
  render() {
    return (
      <Html lang='en' className='theme--dark'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
