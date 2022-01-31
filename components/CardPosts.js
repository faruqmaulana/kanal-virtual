import Link from "next/link";
import { useRouter } from "next/router";
import CardFooter, { CardPostsStyle, PostTitle } from "./card/CardStyle";
import {
  FlexCardFooter,
  FlexBoxCenter,
  P,
} from "./styledComponents/StyledComponents";

export default function CardPosts(props) {
  const router = useRouter();
  return (
    <>
      <Link href={`/${props.slug}`} height={60}>
        <a>
          <CardPostsStyle bgImg={props.thumbnail.formats.thumbnail.url}>
            <FlexBoxCenter
              w="48px"
              h="14px"
              jc="center"
              m="7px 7px 48px auto"
              br="5px"
              bg="var(--purple-200)"
            >
              <P fs="7px" lh="0">
                {props.category.name}
              </P>
            </FlexBoxCenter>
            <FlexCardFooter
              w="250px"
              p="5px 7px 7px 7px"
              jc="center"
              fd="column"
              bg="var(--white-100)"
            >
              <PostTitle
                h="28px"
                fs="12px"
                m={router.pathname !== "/" ? "0 0 5px 0" : "0 0 8px 0"}
                mw="237px"
              >
                {props.title}
              </PostTitle>
              <CardFooter
                authorName={props.author.name}
                viewPost={props.viewCount}
                publish={props.published_at}
              ></CardFooter>
            </FlexCardFooter>
          </CardPostsStyle>
        </a>
      </Link>
    </>
  );
}
