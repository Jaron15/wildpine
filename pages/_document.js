import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sacramento&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Meta Tags */}
        <meta name="theme-color" content="black" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Favicon */}
        <link rel="icon" href="/logopng.png" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logopng.png" />

        {/* Android Chrome Icon */}
        <link rel="icon" href="/logopng.png" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
