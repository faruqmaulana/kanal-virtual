import CardPosts from "../components/CardPosts";
import HorizontalCards from "../components/HorizontalCards";
import Jumbotron from "../components/Jumbotron";
import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import { useState } from "react";
import { HorizontalScrolling } from "../components/card/CardStyle";
import { FlexBoxCenter } from "../components/styledComponents/StyledComponents";

export async function getServerSideProps() {
  //request post dg jumlah pembaca terbanyak
  const reqMostViewed = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_sort=viewCount:DESC&&_start=0&_limit=5"
  );
  const mostViewed = await reqMostViewed.json();

  //request new post
  const reqNewPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts?_sort=id:DESC"
  );
  const newPosts = await reqNewPost.json();

  return { props: { newPosts, mostViewed } };
}

export default function Home({
  newPosts: postTerbaru,
  mostViewed: viewedPost,
}) {
  const [newPosts, setNewPosts] = useState(postTerbaru);
  const [mostViewed, setMostViewed] = useState(viewedPost);

  return (
    <>
      <Head>
        <title>Beranda</title>
      </Head>
      <Jumbotron></Jumbotron>
      <TitleCategory title={"Sorotan"} />
      <div className="container">
        <HorizontalScrolling className={"row"}>
          {mostViewed.map((viewedPost) => (
            <HorizontalCards
              key={viewedPost.slug}
              {...viewedPost}
            ></HorizontalCards>
          ))}
        </HorizontalScrolling>
      </div>
      <TitleCategory title={"Terbaru"} />
      <div className="container">
        <FlexBoxCenter jc="center" fd="column">
          {newPosts.map((newPost) => (
            <CardPosts key={newPost.slug} {...newPost}></CardPosts>
          ))}
        </FlexBoxCenter>
      </div>
    </>
  );
}
