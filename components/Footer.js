import { FlexBoxCenter, P } from "./styledComponents/StyledComponents";

export default function Footer() {
  return (
    <>
      <FlexBoxCenter
        h="39px"
        bg="var(--black-navbar)"
        item="center"
        jc="center"
      >
        <P fs="10px" color="var(--white-navbar)" align="center">
          Kanal 2022
        </P>
      </FlexBoxCenter>
    </>
  );
}
