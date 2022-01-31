import TitleCategory from "../../components/TitleCategory";
import Head from "next/head";
import { FlexBoxCenter } from "../../components/styledComponents/StyledComponents";
import CardPosts from "../../components/CardPosts";
import News from "../../components/News";

export async function getServerSideProps({
  params: { category: categorySlug },
}) {
  //request category
  const reqCategory = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "categories?slug=" + categorySlug
  );
  const category = await reqCategory.json();

  //request  post
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "posts?_where[category.slug]=" +
      categorySlug
  );
  const posts = await reqPost.json();
  console.log(category);
  if (!posts.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
      category: category.length > 0 ? category[0] : {},
    },
  };
}

export default function Post({ posts, category }) {
  return (
    <>
      <Head>
        <title>{category.name}</title>
      </Head>
      <TitleCategory
        title={
          category.slug === "terkini"
            ? category.name
            : "Tulisan " + category.name
        }
      ></TitleCategory>
      <div className="container">
        <FlexBoxCenter jc="center" fd="column">
          {category.slug !== "terkini"
            ? posts.map((post) => (
                <CardPosts key={post.slug} {...post}></CardPosts>
              ))
            : posts.map((post) => <News key={post.slug} {...post}></News>)}
        </FlexBoxCenter>
      </div>
    </>
  );
}
