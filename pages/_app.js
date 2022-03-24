import App from "next/app";
import Script from "next/script";
import Layout from "../components/Layout";

import "../styles/globals.css";
import "nprogress/nprogress.css"; //styles of nprogress//Binding events.
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, categories }) {
  return (
    <>
      <Layout categories={categories}>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-D66R9L10Y4`}
        />
        <Script strategy="lazyOnload">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-D66R9L10Y4');
        `}
        </Script>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const reqCategories = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "categories"
  );
  const categories = await reqCategories.json();

  return { ...appProps, categories };
};

export default MyApp;
