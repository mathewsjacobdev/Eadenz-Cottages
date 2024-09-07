import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add your meta tags, link tags, or any global styles here */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Eadanz Cottage - A Beautiful Stay in Ooty" />
        <meta name="keywords" content="Ooty, Cottage, Eadanz Cottage, Tourist Attractions, Botanical Garden, Bot House" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
