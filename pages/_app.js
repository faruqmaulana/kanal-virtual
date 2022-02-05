import App from "next/app";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps, categories }) {
  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
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
