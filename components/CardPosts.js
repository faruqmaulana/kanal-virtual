import Link from "next/link";
import { useRouter } from "next/router";
import CardFooter, { CardPostsStyle, PostTitle } from "./card/CardStyle";
import {
  FlexCardFooter,
  FlexBoxCenter,
  P,
} from "./styledComponents/StyledComponents";
import { buildUrl } from "cloudinary-build-url";
import { useEffect, useState } from "react";

export default function CardPosts(props) {
  const lazyImage = buildUrl(props.thumbnail.formats.thumbnail.url, {
    cloud: {
      cloudName: "dbcloud776",
    },
    transformations: {
      effect: "blur:10000",
      quality: 1,
      resize: {
        type: "scale",
        width: 500,
        height: 500,
      },
    },
  });
  const [image, setImage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setImage(props.thumbnail.formats.thumbnail.url);
    }, 1);
  }, []);

  const router = useRouter();
  return (
    <>
      <Link href={`/post/${props.slug}`} height={60}>
        <a>
          <div
            style={{
              position: "relative",
              paddingTop: `${(750 / 1000) & 100}%`,
              background: `url(${lazyImage})`,
              backgroundRepeat: "no-repeat",
              height: 125,
              width: 240,
              marginBottom: 20,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {image && (
              <CardPostsStyle bgImg={image} className="cards">
                <FlexBoxCenter
                  w="48px"
                  h="14px"
                  jc="center"
                  m="7px 7px 48px auto"
                  br="5px"
                  bg="#cc89fa"
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
            )}
          </div>
        </a>
      </Link>
    </>
  );
}
