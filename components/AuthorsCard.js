import Link from "next/link";
import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";

export default function AuthorsCard(props) {
  return (
    <>
      <FlexBoxCenter
        fd="column"
        m="5px 10px 33px 10px"
        w="88px"
        h="170px"
        key={props.slug}
      >
        <ImageSrc
          className="rounded-circle"
          width="80px"
          src={props.avatar.url}
        ></ImageSrc>
        <P fontStyle="italic" m="auto 0 0 0" color="var(--black-100)" fs="12px">
          {props.job}
        </P>
        <P fs="13px" fw="600" m="2px 0 0 0" align="center" color="var(--black)">
          {props.name}
        </P>
        <FlexBoxCenter
          bg="var(--purple-200)"
          mt="auto"
          p="2px 15px 2px 15px"
          br="5px"
        >
          <Link href={"/authors/" + props.slug} key={props.slug}>
            <a className="intip" style={{ color: "var(--black-navbar)" }}>
              Intip profil
            </a>
          </Link>
        </FlexBoxCenter>
      </FlexBoxCenter>
    </>
  );
}
