import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";
import { formatDate, getBase64ImageUrl } from "../utils/utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import buildUrl from "cloudinary-build-url";
import { useState, useEffect, lazy } from "react";
import Image from "next/image";

export default function PostDetail(props) {
  const [font, setFont] = useState(16);
  const [image, setImage] = useState();

  const lazyImage = buildUrl(props.post.thumbnail.url, {
    cloud: {
      cloudName: "dbcloud776",
    },
    transformations: {
      effect: "blur:10000",
      quality: 1,
      resize: {
        type: "scale",
        width: 1,
        height: 1,
      },
    },
  });
  console.log(lazyImage);
  useEffect(async () => {
    setTimeout(() => {
      setImage(props.post.thumbnail.url);
    }, 1);
  }, []);
  return (
    <>
      {console.log(image)}
      <P fs="20px" fw="bold" color="var(--black)" m="10px 0 10px 0">
        {props.post.title}
      </P>
      <FlexBoxCenter mb="15px">
        <Link href={"/authors/" + props.post.author.slug}>
          <a>
            <ImageSrc
              className="rounded-circle"
              width="35px"
              src={props.post.author.avatar.url}
            ></ImageSrc>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)" m="0 5px">
          oleh
        </P>
        <Link href={"/authors/" + props.post.author.slug}>
          <a>
            <P fs="13px">{props.post.author.name}</P>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)">
          &nbsp;- {formatDate(props.post.updated_at)}
        </P>
        <div className="dropdown ms-auto">
          <P className="dropbtn">
            A<span style={{ fontSize: 18 }}>A</span>
          </P>
          <div className="dropdown-content">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <div className="d-flex" style={{ borderBottom: "groove" }}>
                <P
                  style={{
                    borderRight: "groove",
                    cursor: `${font !== 12 ? "pointer" : "auto"}`,
                    color: `${font !== 12 ? "#5eb2ef" : "var(--black-100"}`,
                  }}
                  onClick={
                    font > 12
                      ? () => {
                          setFont(font - 1);
                        }
                      : () => {}
                  }
                >
                  A
                </P>
                <P
                  style={{
                    cursor: `${font !== 20 ? "pointer" : "auto"}`,
                    color: `${font !== 20 ? "#5eb2ef" : "var(--black-100"}`,
                  }}
                  onClick={
                    font < 20
                      ? () => {
                          setFont(font + 1);
                        }
                      : () => {}
                  }
                >
                  A
                </P>
              </div>
              <P
                onClick={() => {
                  setFont(16);
                }}
              >
                Reset
              </P>
            </div>
          </div>
        </div>
      </FlexBoxCenter>
      <div
        style={{
          position: "relative",
          paddingTop: `${(750 / 1000) & 100}%`,
          background: `url(${lazyImage})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          marginBottom: 20,
          backgroundSize: "cover",
        }}
      >
        {image && (
          <Image
            src={props.post.thumbnail.url}
            width={620}
            height={330}
            layout="responsive"
            placeholder="blur"
            blurDataURL={image}
            quality={100}
          ></Image>
        )}
      </div>
      <div
        className="post-content"
        style={{ fontSize: `${font}px`, marginTop: 10 }}
      >
        <ReactMarkdown>{props.post.content}</ReactMarkdown>
      </div>
    </>
  );
}
