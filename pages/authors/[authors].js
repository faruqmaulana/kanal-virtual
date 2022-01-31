import Head from "next/head";
import AuthorBadge from "../../components/authorBadge";
import CardPosts from "../../components/CardPosts";
import { FlexBoxCenter } from "../../components/styledComponents/StyledComponents";
import TitleCategory from "../../components/TitleCategory";

export async function getServerSideProps({ params: { authors: authorSlug } }) {
  console.log(authorSlug);
  const reqAuthors = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "posts?_where[author.slug]=" + authorSlug
  );
  const authorDetail = await reqAuthors.json();

  console.log(authorDetail);
  return {
    props: {
      author: authorDetail,
    },
  };
}

export default function AuthorDetails({ author }) {
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
      </div>
    </>
  );
}
