import Link from "next/link";
import { formatDate } from "../utils/utils";
import { PostTitleNews } from "./card/CardStyle";
import { TitleBoxNews } from "./news/NewsStyle";
import { FlexBoxCenter, P } from "./styledComponents/StyledComponents";

export default function News(props) {
  return (
    <>
      <Link href={`/${props.slug}`} height={60}>
        <a className="news">
          <div className="flex-shrink-0">
            <img src={props.thumbnail.url} width={"84px"} height={"79px"}></img>
          </div>
          <div class="flex-grow-1 ms-2">
            <PostTitleNews>{props.title}</PostTitleNews>
            <P fs="8px" lh="8px" m="0 0 8px 0">
              {props.headline}
            </P>
            <div className="d-flex align-items-center">
              <FlexBoxCenter
                w="48px"
                h="14px"
                jc="center"
                br="5px"
                m="0 auto 0 0"
                bg="var(--purple-200)"
              >
                <P fs="8px" lh="1px">
                  Intip
                </P>
              </FlexBoxCenter>
              <div className="d-flex align-items-center justify-content-center">
                <P fs="8px" lh="8px" color="var(--black-200)" m="0 10px 0 0">
                  {formatDate(props.published_at)}
                </P>
                <img
                  className="eye"
                  src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/eye_cfeldy.png"
                />
                <p className="count">{props.viewCount}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}
