import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&family=Satisfy&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags */}
        <meta name="theme-color" content="black" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/wildpinelogo.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
