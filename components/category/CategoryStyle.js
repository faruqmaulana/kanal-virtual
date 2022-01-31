import styled from "styled-components";

export const CategoryBox = styled.a.attrs(({ ClassName }) => ClassName)`
  display: flex;
  justify-content: center;
  height: 19px;
  margin-right: 5px;
  border-radius: 5px;
  background-color: var(--purple-200);
  margin-bottom: 9px;
  &:first-child {
    margin-left: 22px;
  }
  &:last-child {
    margin-right: 22px;
  }
  &:hover {
    cursor: pointer;
    transition: 0.5s;
    background-color: #cc89fa;
  }
`;
