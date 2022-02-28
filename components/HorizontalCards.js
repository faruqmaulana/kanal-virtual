import Link from "next/link";
import Image from "next/image";
import { HorizontalCardsStyle, PostTitle } from "./card/CardStyle";
import { P } from "./styledComponents/StyledComponents";
import { buildUrl } from "cloudinary-build-url";
import { useEffect, useState } from "react";

export default function HorizontalCards(props) {
  const lazyImage = buildUrl(props.thumbnail.formats.thumbnail.url, {
    cloud: {
      cloudName: "dbcloud776",
    },
    transformations: {
      effect: "blur:10000",
      quality: 1,
    },
  });

  const [image, setImage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setImage(props.thumbnail.formats.thumbnail.url);
    }, 1);
  }, []);

  return (
    <>
      <Link href={"/post/" + props.slug}>
        <a>
          <HorizontalCardsStyle>
            <div
              style={{
                position: "relative",
                paddingTop: `${(750 / 1000) & 100}%`,
                background: `url(${lazyImage})`,
                backgroundRepeat: "no-repeat",
                height: 92,
                width: "100%",
                marginBottom: 15,
                backgroundSize: "cover",
              }}
            >
              {image && (
                <Image
                  src={image}
                  width={620}
                  height={350}
                  objectFit="cover"
                ></Image>
              )}
            </div>
            <PostTitle m="0 0 18px 0" fs="11px">
              {props.title}
            </PostTitle>
            <div className="d-flex align-items-center">
              <P fs="8px" m="0 0.6rem 0 0" color="var(--black)">
                Oleh
              </P>
              <P fs="8px" m="0" color="var(--black-200)">
                {props.author.name}
              </P>
              <P fs="8px" m="0 0 0 auto" color="var(--black-200)">
                {props.viewCount} x dilihat
              </P>
            </div>
          </HorizontalCardsStyle>
        </a>
      </Link>
    </>
  );
}
