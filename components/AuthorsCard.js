import Link from "next/link";
import {
  FlexBoxCenter,
  ImageSrc,
  P,
} from "./styledComponents/StyledComponents";

export default function AuthorsCard({ name, job, avatar, slug }) {
  return (
    <>
      <FlexBoxCenter
        fd="column"
        m="0 20px"
        w="90px"
        h="170px"
        mb="20px"
        key={slug}
      >
        <ImageSrc
          className="rounded-circle"
          width="80px"
          src={avatar}
        ></ImageSrc>
        <P fontStyle="italic" m="auto 0 0 0" color="var(--black-100)" fs="12px">
          {job}
        </P>
        <P fs="13px" fw="600" m="2px 0 0 0" align="center">
          {name}
        </P>
        <FlexBoxCenter
          bg="var(--purple-200)"
          mt="auto"
          p="2px 15px 2px 15px"
          br="5px"
        >
          <Link href={"/authors/" + slug} key={slug}>
            <a className="intip" key={slug}>
              Intip profil
            </a>
          </Link>
        </FlexBoxCenter>
      </FlexBoxCenter>
    </>
  );
}
