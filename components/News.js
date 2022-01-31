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
          <FlexBoxCenter m="0 0 20px 0">
            <img src={props.thumbnail.url} width={"84px"} height={"79px"}></img>
            <TitleBoxNews m="0 5px 0 8px" className="col">
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
                  m="0 158px 0 0"
                  bg="var(--purple-200)"
                >
                  <P fs="8px" lh="1px">
                    Intip
                  </P>
                </FlexBoxCenter>
                <P fs="8px" lh="8px" color="var(--black-200)">
                  {formatDate(props.published_at)}
                </P>
                <div className="ms-auto d-flex align-items-center justify-content-center">
                  <img
                    className="eye"
                    src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/eye_cfeldy.png"
                  />
                  <p className="count">{props.viewCount}</p>
                </div>
              </div>
            </TitleBoxNews>
          </FlexBoxCenter>
        </a>
      </Link>
    </>
  );
}
