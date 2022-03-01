import CardPosts from "../components/CardPosts";
import HorizontalCards from "../components/HorizontalCards";
import Jumbotron from "../components/Jumbotron";
import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import Pagination from "../components/Pagination";
import { useState } from "react";
import { HorizontalScrolling } from "../components/card/CardStyle";
import { FlexBoxCenter } from "../components/styledComponents/StyledComponents";
import { buildUrl } from "cloudinary-build-url";
import { db_cloud } from "../utils/utils";

export async function getServerSideProps({ query: { page: page = 1 } }) {
  var limitPost = 5;
  const start = +page === 1 ? 0 : (+page - 1) * limitPost;

  //get total page
  const reqTotalPage = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts/count"
  );
  const totalPage = await reqTotalPage.json();

  //request post dg jumlah pembaca terbanyak
  const reqMostViewed = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_sort=viewCount:DESC&&_start=0&_limit=5"
  );
  const mostViewed = await reqMostViewed.json();

  //request new post
  const reqNewPost = await (
    await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        `posts?_sort=id:DESC&&_start=${start}&_limit=${limitPost}`
    )
  ).json();

  const newPosts = reqNewPost.map((data) => {
    const imgUrl = buildUrl(data.thumbnail.url, db_cloud);

    return { ...data, imgUrl };
  });

  return {
    props: {
      newPosts,
      mostViewed,
      page: +page,
      totalPage,
      limitPost,
    },
  };
}

export default function Home({
  newPosts,
  mostViewed: viewedPost,
  page,
  totalPage,
  limitPost,
}) {
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
      <div className="container pb-3 d-flex flex-column align-items-center">
        <FlexBoxCenter jc="center" fd="column">
          {newPosts.map((newPost) => (
            <CardPosts key={newPost.slug} {...newPost}></CardPosts>
          ))}
        </FlexBoxCenter>
        <Pagination
          page={page}
          totalPage={totalPage}
          limitPost={limitPost}
        ></Pagination>
      </div>
    </>
  );
}
