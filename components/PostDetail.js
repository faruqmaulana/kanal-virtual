import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";
import { formatDate } from "../utils/utils";
import Link from "next/link";
export default function PostDetail({
  titlePost,
  contentImg,
  contentPost,
  publish,
  authorName,
  authorAvatar,
  authorSlug,
}) {
  return (
    <>
      <P fs="20px" fw="bold" color="var(--black)" m="10px 0 10px 0">
        {titlePost}
      </P>
      <FlexBoxCenter mb="15px">
        <Link href={"/authors/" + authorSlug} key={authorSlug}>
          <a>
            <ImageSrc
              className="rounded-circle"
              width="35px"
              src={authorAvatar}
            ></ImageSrc>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)" m="0 5px">
          oleh
        </P>
        <Link href={"/authors/" + authorSlug} key={authorSlug}>
          <a>
            <P fs="13px">{authorName}</P>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)">
          &nbsp;- {formatDate(publish)}
        </P>
      </FlexBoxCenter>
      <FlexBoxCenter fd="column" jc="center" m="10px 0 13px 0">
        <ImageSrc src={contentImg} width={"-webkit-fill-available"}></ImageSrc>
      </FlexBoxCenter>
      <P lh="30px">{contentPost}</P>
    </>
  );
}
