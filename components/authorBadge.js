import Link from "next/link";
import { useRouter } from "next/router";
import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";

import ReactMarkdown from "react-markdown";

export default function AuthorBadge(props) {
  const data = { ...props };
  const router = useRouter();
  return (
    <>
      <FlexBoxCenter
        jc="center"
        m={router.pathname !== "/authors/[authors]" ? "70px 0 30px 0" : "0"}
        fd="column"
        border={
          router.pathname !== "/authors/[authors]"
            ? "1px solid var(--border-white)"
            : ""
        }
        p="26px"
      >
        {router.pathname !== "/authors/[authors]" ? (
          <Link href={"/authors/" + data.author.slug} key={data.author.slug}>
            <a className="d-flex align-items-center flex-column">
              <ImageSrc
                className="rounded-circle"
                m="0 0 0 3px"
                width="80px"
                src={data.author.avatar.url}
              ></ImageSrc>
              <P fs="17px" fw="600" m="5px 0 0 0">
                {data.author.name}
              </P>
            </a>
          </Link>
        ) : (
          <>
            <ImageSrc
              className="rounded-circle"
              width="80px"
              src={data.author.url}
            ></ImageSrc>
            <P fs="17px" fw="600" m="5px 0 0 0" color="var(--black)">
              {data.author.name}
            </P>
          </>
        )}
        <P fontStyle="italic" color="var(--black-100)">
          {data.author.job}
        </P>
        <P
          m="10px 0 0 0"
          lh="20px"
          align="center"
          fs="14px"
          color="var(--black)"
        >
          <ReactMarkdown>{data.author.biography}</ReactMarkdown>
        </P>
      </FlexBoxCenter>
      <div className="pb-2"></div>
    </>
  );
}
