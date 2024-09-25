import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
<meta name="theme-color" content="black"></meta>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />

<link rel="icon" type="image/svg+xml" href="/wildpinelogo.svg" />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
