import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";
import { formatDate } from "../utils/utils";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import Image from "next/image";

export default function PostDetail({ props }) {
  const data = { ...props };
  const [font, setFont] = useState(16);

  return (
    <>
      <P fs="20px" fw="bold" color="var(--black)" m="10px 0 10px 0">
        {data.title}
      </P>
      <FlexBoxCenter mb="15px">
        <Link href={"/authors/" + data.author.slug}>
          <a>
            <ImageSrc
              className="rounded-circle"
              width="35px"
              src={data.author.avatar.url}
            ></ImageSrc>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)" m="0 5px">
          oleh
        </P>
        <Link href={"/authors/" + data.author.slug}>
          <a>
            <P fs="13px">{data.author.name}</P>
          </a>
        </Link>
        <P fs="13px" color="var(--black-100)">
          &nbsp;- {formatDate(data.updated_at)}
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
      <Image
        src={data.thumbnail.url}
        alt={data.title}
        width={620}
        height={330}
        layout="responsive"
        placeholder="blur"
        blurDataURL={data.baseUrlData}
        quality={100}
        objectFit="cover"
      ></Image>
      <div
        className="post-content"
        style={{ fontSize: `${font}px`, marginTop: 10 }}
      >
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
    </>
  );
}
