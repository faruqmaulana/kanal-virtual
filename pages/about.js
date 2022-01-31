import PostDetail from "../components/PostDetail";
import TitleCategory from "../components/TitleCategory";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang</title>
      </Head>
      <TitleCategory title={"Tentang Kanal"}></TitleCategory>
      <div className="container">
        <PostDetail></PostDetail>
      </div>
    </>
  );
}
