import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playball&family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta property="og:image" content="/pierrewhite.jpg" />  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
