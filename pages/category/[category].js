import TitleCategory from "../../components/TitleCategory";
import Head from "next/head";
import { FlexBoxCenter } from "../../components/styledComponents/StyledComponents";
import CardPosts from "../../components/CardPosts";
import News from "../../components/News";
import { useRouter } from "next/router";
import { capitalize } from "../../utils/utils";
import { CategoryBox } from "../../components/category/CategoryStyle";

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

export default function Post({
  posts,
  category,
  categorySlug,
  page,
  totalPage,
  limitPost,
}) {
  const router = useRouter();
  const lastPage = Math.ceil(totalPage / limitPost);
  var totalButtton = [];
  for (let index = 1; index <= lastPage; index++) {
    var array = { index };
    totalButtton.push(array);
  }
  return (
    <>
      {console.log(category)}
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
          <div className="container">
            <p className="text-center">
              Mohon maaf konten "{categorySlug}" masih "belum ada"😥
            </p>
            <p className="text-center">
              Masukkan {categorySlug} anda dan jadilah yang pertama!
            </p>
            <CategoryBox
              className={"col mt-5 m-auto d-flex align-items-center"}
              style={{ width: "150px" }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=+6283833454679"
                target="_blank"
                rel="noreferrer"
                style={{ lineHeight: 1 }}
              >
                Hubungi admin
              </a>
              <img
                className="ms-2"
                src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466484/whatsapp_syxq2k.png"
                style={{ width: "15px", heigh: "15px" }}
              />
            </CategoryBox>
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
            <FlexBoxCenter
              jc="center"
              className="mb-2 container mb-3 d-flex align-items-center m-auto"
              w="270px"
            >
              <div
                className="pagination-btn"
                onClick={() => {
                  router.push(`/category/${categorySlug}?page=${page - 1}`);
                }}
                style={{ display: `${page <= 1 ? "none" : ""}` }}
              >
                Sebelumnya
              </div>
              <div
                className={`pagination-btn ${page <= 1 ? "m-auto" : "ms-auto"}`}
                onClick={() => {
                  router.push(`/category/${categorySlug}?page=${page + 1}`);
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
                    router.push(
                      `/category/${categorySlug}?page=${total.index}`
                    );
                  }}
                >
                  {total.index}
                </div>
              ))}
            </FlexBoxCenter>
          </div>
        </>
      )}
    </>
  );
}
