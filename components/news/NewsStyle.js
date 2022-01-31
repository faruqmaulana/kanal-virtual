import styled from "styled-components";

export const TitleBoxNews = styled.div.attrs(({ className }) => className)`
  display: flex;
  flex-direction: column;
  align-items: ${({ item }) => item};
  margin: ${({ m }) => m};
`;
