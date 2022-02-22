import TitleCategory from "../../components/TitleCategory";
import Head from "next/head";
import CardPosts from "../../components/CardPosts";
import News from "../../components/News";
import Pagination from "../../components/Pagination";
import { FlexBoxCenter } from "../../components/styledComponents/StyledComponents";
import { capitalize } from "../../utils/utils";
import { HubungiAdmin } from "../../components/category/CategoryStyle";

export async function getServerSideProps({
  params: { category: categorySlug },
  query: { page: page = 1 },
}) {
  var limitPost = 5;
  const start = +page === 1 ? 0 : (+page - 1) * limitPost;
  //get total page
  const reqTotalPage = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      `posts/count?_where[category.slug]=${categorySlug}`
  );
  const totalPage = await reqTotalPage.json();

  //request category
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_where[category.slug]=" +
      categorySlug
  );
  const category = await reqCategory.json();

  //request  post
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_where[category.slug]=" +
      categorySlug +
      `&&_start=${start}&_limit=${limitPost}`
  );
  const posts = await reqPost.json();
  return {
    props: {
      posts: !posts.length ? posts.length : posts,
      category: category.length > 0 ? category[0] : {},
      categorySlug,
      page: +page,
      totalPage,
      limitPost,
    },
  };
}
// commit
export default function Post({
  posts,
  category,
  categorySlug,
  page,
  totalPage,
  limitPost,
}) {
  return (
    <>
      <Head>
        <title>{capitalize(categorySlug)}</title>
      </Head>
      <TitleCategory
        title={
          categorySlug === "terkini"
            ? capitalize(categorySlug)
            : "Tulisan " + capitalize(categorySlug)
        }
      ></TitleCategory>
      {posts === 0 ? (
        <>
          <div className="container" style={{ color: "var(--black)" }}>
            <p className="text-center">
              Mohon maaf konten "{categorySlug}" masih "belum ada"😥
            </p>
            <p className="text-center">
              Masukkan {categorySlug} anda dan jadilah yang pertama!
            </p>
            <HubungiAdmin
              className={"col mt-5 m-auto d-flex align-items-center"}
              style={{ width: "150px" }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=+6283833454679"
                target="_blank"
                style={{ lineHeight: 1, color: "var(--black-navbar)" }}
              >
                Hubungi admin
              </a>
              <img
                className="ms-2"
                src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466484/whatsapp_syxq2k.png"
                style={{ width: "15px", heigh: "15px" }}
              />
            </HubungiAdmin>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <FlexBoxCenter jc="center" fd="column">
              {category.category.slug !== "terkini"
                ? posts.map((post) => (
                    <CardPosts key={post.slug} {...post}></CardPosts>
                  ))
                : posts.map((post) => <News key={post.slug} {...post}></News>)}
            </FlexBoxCenter>
            <Pagination
              page={page}
              totalPage={totalPage}
              limitPost={limitPost}
            ></Pagination>
          </div>
        </>
      )}
    </>
  );
}
