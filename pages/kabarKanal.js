import News from "../components/news";
import TitleCategory from "../components/TitleCategory";
import Head from "next/head";

export default function KabarKanal() {
  return (
    <>
      <Head>
        <title>Kabar Kanal</title>
      </Head>
      <TitleCategory title={"Kabar Kanal"}></TitleCategory>
      <div className="container">
        <News></News>
      </div>
    </>
  );
}
