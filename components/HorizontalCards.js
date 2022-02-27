import Link from "next/link";
import Image from "next/image";
import {
  HorizontalCardsStyle,
  ImgHorizontal,
  PostTitle,
} from "./card/CardStyle";
import { P } from "./styledComponents/StyledComponents";

export default function HorizontalCards(props) {
  return (
    <>
      <Link href={"/post/" + props.slug}>
        <a>
          <HorizontalCardsStyle>
            {/* <Image
              src={props.thumbnail.formats.thumbnail.url}
              width={600}
              height={350}
              placeholder="blur"
              layout="responsive"
            ></Image> */}
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
