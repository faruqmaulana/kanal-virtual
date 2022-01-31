import styled from "styled-components";

const CatTitle = styled.p.attrs(({ className }) => className)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  border-radius: 5px;
  background-color: var(--purple-300);
  margin-bottom: 18px;
  font-size: 12px;
  color: var(--white);
`;

export default function TitleCategory({ title }) {
  return (
    <>
      <div className="container">
        <CatTitle className={"col"}>{title}</CatTitle>
      </div>
    </>
  );
}
