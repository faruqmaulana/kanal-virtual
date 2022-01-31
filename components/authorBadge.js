import { useRouter } from "next/router";
import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";

export default function AuthorBadge({
  authorName,
  authorJob,
  authorBio,
  authorAvatar,
}) {
  const router = useRouter();
  return (
    <>
      <FlexBoxCenter
        jc="center"
        m={router.pathname !== "/authors/[authors]" ? "70px 0 30px 0" : "0"}
        fd="column"
        border={
          router.pathname !== "/authors/[authors]" ? "1px solid #eee" : ""
        }
        p="26px"
      >
        <ImageSrc
          className="rounded-circle"
          width="80px"
          src={authorAvatar}
        ></ImageSrc>
        <P fs="17px" fw="600" m="5px 0 0 0">
          {authorName}
        </P>
        <P fontStyle="italic" color="var(--black-100)">
          {authorJob}
        </P>
        <P m="10px 0 0 0" lh="20px" align="center" fs="14px">
          {authorBio}
        </P>
      </FlexBoxCenter>
    </>
  );
}
