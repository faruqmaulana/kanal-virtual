import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";
import { formatDate } from "../utils/utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function PostDetail({
  titlePost,
  contentImg,
  contentPost,
  publish,
  authorName,
  authorAvatar,
  authorSlug,
}) {
  const [font, setFont] = useState(16);
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
        <P fs="12px" color="var(--black-100)" m="0 5px">
          oleh
        </P>
        <Link href={"/authors/" + authorSlug} key={authorName}>
          <a>
            <P fs="12px">{authorName}</P>
          </a>
        </Link>
        <P fs="12px" color="var(--black-100)">
          &nbsp;- {formatDate(publish)}
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
      <FlexBoxCenter fd="column" jc="center" m="10px 0 13px 0">
        <ImageSrc src={contentImg} width={"-webkit-fill-available"}></ImageSrc>
      </FlexBoxCenter>
      <div className="post-content" style={{ fontSize: `${font}px` }}>
        <ReactMarkdown>{contentPost}</ReactMarkdown>
      </div>
    </>
  );
}
