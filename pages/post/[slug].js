import AuthorBadge from "../../components/authorBadge";
import PostDetail from "../../components/PostDetail";
import Head from "next/head";

export async function getServerSideProps({ params: { slug } }) {
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts/" + slug + "/view"
  );
  const post = await reqPost.json();

  return {
    props: post,
  };
}

export default function DetailPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container">
        <PostDetail
          titlePost={post.title}
          contentImg={post.thumbnail.url}
          contentPost={post.content}
          publish={post.published_at}
          authorName={post.author.name}
          authorAvatar={post.author.avatar.url}
          authorSlug={post.author.slug}
        ></PostDetail>
        <AuthorBadge
          authorName={post.author.name}
          authorJob={post.author.job}
          authorBio={post.author.biography}
          authorAvatar={post.author.avatar.url}
          authorSlug={post.author.slug}
        ></AuthorBadge>
      </div>
    </>
  );
}
