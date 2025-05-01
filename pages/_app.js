import "@/styles/globals.css";
import { Header } from "@/components";
import Head from "next/head";
import { site_metadata } from "@/constants";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/context";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // TODO: Enable this when everything is already fixed + Enable Other Tech Stacks
  // useVisitorCount(router?.pathname || "unknown", router?.asPath);

  return (
    <>
      <Head>
        {/*Metadata for Open Graph and Twitter*/}
        <meta property="og:title" content={site_metadata?.title} />
        <meta property="og:description" content={site_metadata?.desc} />
        <meta property="og:image" content="https://pradipta.xyz/og-image.png" />

        {/* <meta name="google-site-verification" content="" /> */}

        {/*<meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="731" />
        */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site_metadata?.hostname} />
        <meta property="og:site_name" content={site_metadata?.title} />
        <meta property="og:locale" content="en_US" />

        {/*Additional Metadata*/}
        <meta name="keywords" content={site_metadata?.keywords} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="hostname" content={site_metadata?.hostname} />
        <meta name="author" content={site_metadata?.author} />
        <title>{site_metadata?.title}</title>
        <meta name="description" content={site_metadata?.desc} />
        <meta name="theme-color" content={site_metadata?.theme} />

        {/*Link and Canonical Tags*/}
        <link rel="canonical" href={site_metadata?.hostname} />
        <link rel="author" href="/humans.txt" />
        <link rel="icon" href="/favicon.ico" sizes="128x128" />
        <link rel="icon" href="/favicon.ico" sizes="256x256" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Ads */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5974347816252396"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
      <main className="mx-4 my-16 pt-6 md:flex md:justify-center md:items-center">
        <Component {...pageProps} />
      </main>
      <Toaster />
    </>
  );
}
