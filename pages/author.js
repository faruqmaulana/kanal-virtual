import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import Link from "next/link";
import AuthorsCard from "../components/AuthorsCard";
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
  return (
    <>
      <Head>
        <title>Penulis</title>
      </Head>
      <TitleCategory title={"Penulis"}></TitleCategory>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {authors.map((author) => (
            <AuthorsCard
              key={author.slug}
              name={author.name}
              job={author.job}
              avatar={author.avatar.url}
              slug={author.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
