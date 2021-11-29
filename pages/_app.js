import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-ubuntu">
      <Head>
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
