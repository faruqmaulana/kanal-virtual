import CardPosts from "../components/CardPosts";
import HorizontalCards from "../components/HorizontalCards";
import Jumbotron from "../components/Jumbotron";
import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import { useState } from "react";
import { HorizontalScrolling } from "../components/card/CardStyle";
import { FlexBoxCenter } from "../components/styledComponents/StyledComponents";
import { useRouter } from "next/router";

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
  const reqNewPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `posts?_sort=id:DESC&&_start=${start}&_limit=${limitPost}`
  );
  const newPosts = await reqNewPost.json();

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
  newPosts: postTerbaru,
  mostViewed: viewedPost,
  page,
  totalPage,
  limitPost,
}) {
  const [mostViewed, setMostViewed] = useState(viewedPost);
  const router = useRouter();
  const lastPage = Math.ceil(totalPage / limitPost);

  //   var circlePagination = <div className="circle-pagination"></div>;
  var totalButtton = [];
  for (let index = 1; index <= lastPage; index++) {
    var array = { index };
    totalButtton.push(array);
  }
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
      <div className="container mb-3 d-flex flex-column align-items-center">
        <FlexBoxCenter jc="center" fd="column">
          {postTerbaru.map((newPost) => (
            <CardPosts key={newPost.slug} {...newPost}></CardPosts>
          ))}
        </FlexBoxCenter>
        <FlexBoxCenter jc="center" className="mb-2" w="250px">
          <div
            className="pagination-btn"
            onClick={() => {
              router.push(`/posts?page=${page - 1}`);
            }}
            style={{ display: `${page <= 1 ? "none" : ""}` }}
          >
            Sebelumnya
          </div>
          <div
            className={`pagination-btn ${page <= 1 ? "m-auto" : "ms-auto"}`}
            onClick={() => {
              router.push(`/posts?page=${page + 1}`);
            }}
            style={{ display: `${page >= lastPage ? "none" : ""}` }}
          >
            Selanjutnya
          </div>
        </FlexBoxCenter>
        <FlexBoxCenter
          jc="center"
          style={{ display: `${totalButtton.length == 1 ? "none" : ""}` }}
        >
          {totalButtton.map((total) => (
            <div
              key={total.index}
              value={total.index}
              className="circle-pagination"
              onClick={() => {
                router.push("/posts?page=" + total.index);
              }}
            >
              {total.index}
            </div>
          ))}
        </FlexBoxCenter>
      </div>
    </>
  );
}
