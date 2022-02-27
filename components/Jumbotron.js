import styled from "styled-components";
import Image from "next/image";
import jumbotronImage from "../public/beranda.png";
import { FlexBoxCenter, P } from "./styledComponents/StyledComponents";

const ImageIndexs = styled.img`
  width: -webkit-fill-available;
`;

export default function Jumbotron() {
  return (
    <>
      <Image
        src={jumbotronImage}
        width={600}
        height={350}
        placeholder="blur"
        layout="responsive"
      ></Image>
      <FlexBoxCenter>
        <P
          w="196px"
          h="36px"
          m="13px auto 45px auto"
          fs="10px"
          lh="23px"
          align="center"
          color="var(--black)"
        >
          Yang virtual medianya, srawungnya sama. Blablablaaaaaaa...
        </P>
      </FlexBoxCenter>
    </>
  );
}
