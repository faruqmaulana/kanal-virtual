import Head from "next/head";
import AuthorBadge from "../../components/authorBadge";
import CardPosts from "../../components/CardPosts";
import Pagination from "../../components/Pagination";
import TitleCategory from "../../components/TitleCategory";
import { FlexBoxCenter } from "../../components/styledComponents/StyledComponents";
import buildUrl from "cloudinary-build-url";
import {
  db_cloud,
  getBase64ImageUrl,
  getSmallBase64,
  img_blur,
} from "../../utils/utils";

export async function getServerSideProps({
  params: { authors: authorSlug },
  query: { page: page = 1 },
}) {
  var limitPost = 3;
  const start = +page === 1 ? 0 : (+page - 1) * limitPost;
  //get total page
  const reqTotalPage = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `posts/count?_where[author.slug]=${authorSlug}`
  );
  const totalPage = await reqTotalPage.json();

  const reqAuthors = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_where[author.slug]=" +
      authorSlug +
      `&&_start=${start}&_limit=${limitPost}`
  );
  const authorDetail = await reqAuthors.json();

  const newPosts = await Promise.all(
    authorDetail.map(async (data) => {
      const imgUrl = buildUrl(data.thumbnail.url, db_cloud);
      const lazyImg = buildUrl(data.thumbnail.url, getSmallBase64);
      const baseUrlData = await getBase64ImageUrl(lazyImg);

      return { ...data, imgUrl, baseUrlData };
    })
  );

  return {
    props: {
      author: newPosts,
      page: +page,
      totalPage,
      limitPost,
    },
  };
}

export default function AuthorDetails({ author, page, totalPage, limitPost }) {
  return (
    <>
      <Head>
        <title>{author[0].author.name}</title>
      </Head>
      <div className="coba"></div>
      <AuthorBadge
        authorName={author[0].author.name}
        authorJob={author[0].author.job}
        authorBio={author[0].author.biography}
        authorAvatar={author[0].author.avatar.url}
      ></AuthorBadge>
      <TitleCategory title={"Tulisan oleh " + author[0].author.name} />
      <div className="container">
        <FlexBoxCenter jc="center" fd="column" mt="20px">
          {author.map((authorPost) => (
            <CardPosts key={authorPost.slug} {...authorPost}></CardPosts>
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
