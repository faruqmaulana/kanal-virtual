import Link from "next/link";
import { useRouter } from "next/router";
import CardFooter, { PostTitle } from "./card/CardStyle";
import {
  FlexCardFooter,
  FlexBoxCenter,
  P,
} from "./styledComponents/StyledComponents";
import Image from "next/image";

export default function CardPosts(props) {
  const router = useRouter();
  return (
    <>
      <Link href={`/post/${props.slug}`} height={60}>
        <a>
          <div
            style={{
              position: "relative",
              paddingTop: `${(750 / 1000) & 100}%`,
              height: 125,
              width: 250,
              marginBottom: 20,
            }}
          >
            <div className="position-absolute">
              <Image
                src={props.imgUrl}
                width={620}
                height={310}
                placeholder="blur"
                blurDataURL={props.baseUrlData}
                quality="100"
                objectFit="cover"
                layout="intrinsic"
              ></Image>
            </div>
            <FlexBoxCenter
              w="48px"
              h="14px"
              jc="center"
              m="7px 7px 48px auto"
              br="5px"
              bg="#cc89fa"
              right="0"
              zIndex="1"
              position="absolute"
            >
              <P fs="7px" lh="0" color="var(--black-navbar)">
                {props.category.name}
              </P>
            </FlexBoxCenter>
            <FlexCardFooter
              w="250px"
              p="5px 7px 2px 7px"
              jc="center"
              fd="column"
              bottom="0"
              zIndex="1"
              position="absolute"
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
          </div>
        </a>
      </Link>
    </>
  );
}
