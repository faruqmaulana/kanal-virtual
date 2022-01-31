import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import { FlexBoxCenter } from "../components/styledComponents/StyledComponents";
import CardPosts from "../components/CardPosts";

export async function getServerSideProps({ query: { q } }) {
  //request  post
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts?title_contains=" + q
  );
  const posts = await reqPost.json();
  return {
    props: {
      posts,
      q,
    },
  };
}

export default function Search({ posts, q }) {
  return (
    <>
      <Head>
        <title>{"Hasil Pencarian"}</title>
      </Head>
      {!posts.length ? (
        <>
          <TitleCategory
            title={`Menampilkan hasil dengan kata kunci : "${q}"`}
          ></TitleCategory>
          <div className="container">
            <p className="text-center">
              Mohon maaf kata kunci "{q}" yang anda cari tidak ada 😥
            </p>
          </div>
        </>
      ) : (
        <>
          <TitleCategory
            title={`Menampilkan hasil dengan kata kunci : "${q}"`}
          ></TitleCategory>
          <div className="container">
            <FlexBoxCenter jc="center" fd="column">
              {posts.map((Post) => (
                <CardPosts key={Post.slug} {...Post}></CardPosts>
              ))}
            </FlexBoxCenter>
          </div>
        </>
      )}
    </>
  );
}
