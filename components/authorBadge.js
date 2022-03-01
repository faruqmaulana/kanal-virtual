import Link from "next/link";
import { useRouter } from "next/router";
import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";

import ReactMarkdown from "react-markdown";

export default function AuthorBadge({
  authorName,
  authorSlug,
  authorAvatar,
  authorJob,
  authorBio,
}) {
  const router = useRouter();
  const validate = router.pathname !== "/authors/[authors]";
  return (
    <>
      <FlexBoxCenter
        jc="center"
        m={validate ? "70px 0 30px 0" : "0"}
        fd="column"
        border={validate ? "1px solid var(--border-white)" : ""}
        p="26px"
      >
        {validate ? (
          <Link href={"/authors/" + authorSlug} key={authorSlug}>
            <a className="d-flex align-items-center flex-column">
              <ImageSrc
                className="rounded-circle"
                m="0 0 0 3px"
                width="80px"
                src={authorAvatar}
              ></ImageSrc>
              <P fs="17px" fw="600" m="5px 0 0 0">
                {authorName}
              </P>
            </a>
          </Link>
        ) : (
          <>
            <ImageSrc
              className="rounded-circle"
              width="80px"
              src={authorAvatar}
            ></ImageSrc>
            <P fs="17px" fw="600" m="5px 0 0 0" color="var(--black)">
              {authorName}
            </P>
          </>
        )}
        <P fontStyle="italic" color="var(--black-100)">
          {authorJob}
        </P>
        <P
          m="10px 0 0 0"
          lh="20px"
          align="center"
          fs="14px"
          color="var(--black)"
        >
          <ReactMarkdown>{authorBio}</ReactMarkdown>
        </P>
      </FlexBoxCenter>
      <div className="pb-2"></div>
    </>
  );
}
