import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import AuthorsCard from "../components/AuthorsCard";
export async function getServerSideProps() {
  //request author
  const reqAuthors = await fetch(process.env.NEXT_PUBLIC_API_URL + "authors");
  const authors = await reqAuthors.json();

  const getTotalPost = authors.map(async (author) => {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_URL +
        "posts/count?_where[author.slug]=" +
        author.slug
    );
    const res = await req.json();

    var resData = { ...author, totalPost: res };
    return resData;
  });

  const finalData = await Promise.all(getTotalPost);

  return {
    props: {
      data: finalData,
    },
  };
}

export default function Author({ data }) {
  return (
    <>
      <Head>
        <title>Penulis</title>
      </Head>
      <TitleCategory title={"Penulis"}></TitleCategory>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {data.map((author) => (
            <AuthorsCard {...author} key={author.slug} />
          ))}
        </div>
      </div>
    </>
  );
}
