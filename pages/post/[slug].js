import AuthorBadge from "../../components/authorBadge";
import PostDetail from "../../components/PostDetail";
import Head from "next/head";

export async function getServerSideProps({ params: { slug } }) {
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts/" + slug + "/view"
  );
  const post = await reqPost.json();

  return {
    props: { post },
  };
}

export default function DetailPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container">
        <PostDetail {...post}></PostDetail>
        <AuthorBadge {...post}></AuthorBadge>
      </div>
    </>
  );
}
