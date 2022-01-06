import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-ubuntu">
      <Head>
        <meta
          name="description"
          content="Azam max website clone build out of admiration for the site."
        />
        <meta
          property="og:description"
          content="Azam max website clone build out of admiration for the site."
        />
        <meta
          name="twitter:description"
          content="Azam max website clone build out of admiration for the site."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />

        <meta
          name="twitter:image:src"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />
        <meta name="twitter:site" content="@adzam" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="adzam" />

        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/51880591?v=4?s=400"
        />
        <meta
          property="og:image:alt"
          content="Azam max website clone build out of admiration for the site."
        />
        <meta property="og:site_name" content="adzam" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="adzam " />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
