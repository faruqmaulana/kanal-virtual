import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import AuthorsCard from "../components/AuthorsCard";
import { useEffect, useState } from "react";
export async function getServerSideProps() {
  //request author
  const reqAuthors = await fetch(process.env.NEXT_PUBLIC_API_URL + "authors");
  const authors = await reqAuthors.json();

  return {
    props: {
      authors,
    },
  };
}

export default function Author({ authors }) {
  const [authorPosts, setAuthorPost] = useState([]);

  useEffect(() => {
    authors.map((author) => {
      async function getTotalPost() {
        const req = await fetch(
          process.env.NEXT_PUBLIC_API_URL +
            "posts/count?_where[author.slug]=" +
            author.slug
        );
        const res = await req.json();
        var resData = { slug: author.slug, totalPost: res };
        setAuthorPost((arr) => [...arr, resData]);
      }
      getTotalPost();
    });
  }, []);

  return (
    <>
      {authorPosts.map((res) => {
        return (
          <>
            <li key={res.slug}>{res.totalPost + "tulisan"}</li>
          </>
        );
      })}
      <Head>
        <title>Penulis</title>
      </Head>
      <TitleCategory title={"Penulis"}></TitleCategory>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {authors.map((author) => (
            <AuthorsCard {...author} />
          ))}
        </div>
      </div>
    </>
  );
}
