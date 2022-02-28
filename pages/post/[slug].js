import AuthorBadge from "../../components/authorBadge";
import PostDetail from "../../components/PostDetail";
import Head from "next/head";
import { getBase64ImageUrl } from "../../utils/utils";
import buildUrl from "cloudinary-build-url";
export async function getServerSideProps({ params: { slug } }) {
  const reqPost = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts/" + slug + "/view"
  );

  const posts = await reqPost.json();
  const lazyImage = buildUrl(posts.post.thumbnail.url, {
    cloud: {
      cloudName: "dbcloud776",
    },
    transformations: {
      effect: "blur:10000",
      quality: 3,
      resize: {
        type: "scale",
        width: 250,
        height: 110,
      },
    },
  });

  const baseUrlData = await getBase64ImageUrl(lazyImage);

  return {
    props: {
      data: { ...posts.post, baseUrlData },
    },
  };
}

export default function DetailPost({ data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className="container">
        <PostDetail props={data}></PostDetail>
        <AuthorBadge {...data}></AuthorBadge>
      </div>
    </>
  );
}
