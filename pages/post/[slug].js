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
        {/* prettier-ignore-start */}
        <title>{data.title}</title>
        <meta name="description" content={data.content} />
        <meta property="og:description" content={data.content} />
        <meta name="author" content={data.author.name} />
        {/* prettier-ignore */}
        <link rel="canonical" href={`https://kanal-virtual.vercel.app/post/${data.slug}`}/>
        {/* prettier-ignore */}
        <link rel="amphtml" href={`https://kanal-virtual.vercel.app/post/${data.slug}`} data-component-name="amp:html:link"></link>

        {/* middle seo */}
        <meta property="og:type" content={data.category.name} />
        <meta property="og:site_name" content="Kanal Virtual" />
        {/* prettier-ignore */}
        <meta property="article:publisher" content="https://www.instagram.com/perpuskanal/"/>
        <meta property="article:published_time" content={data.published_at} />
        <meta property="article:modified_time" content={data.updated_at} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.content} />
        {/* prettier-ignore */}
        <meta property="og:url" content={`https://kanal-virtual.vercel.app/post/${data.slug}`}
        />

        {/* twitter tag seo */}
        <meta name="twitter:site" content="@kanal_virtual" />
        {/* prettier-ignore */}
        <meta name="twitter:creator" content={`@${data.author.slug.replace("-", "")}`}/>
        <meta name="twitter:card" content={data.thumbnail.url} />
        <meta name="twitter:url" content="@perpuskanal" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.content} />
        <meta name="twitter:image" content={data.thumbnail.url} />
        <meta name="twitter:label1" content="Written by" />
        {/* prettier-ignore */}
        <meta name="twitter:data1" content={`"akanal virtual | "${data.title}`}/>
        <meta name="twitter:label2" content="Est. reading time" />
        <meta name="twitter:data2" content="1 minute" />
      </Head>
      <div className="container">
        <PostDetail props={data}></PostDetail>
        <AuthorBadge
          authorName={data.author.name}
          authorSlug={data.author.slug}
          authorJob={data.author.job}
          authorBio={data.author.biography}
          authorAvatar={data.author.avatar.url}
        ></AuthorBadge>
      </div>
    </>
  );
}
