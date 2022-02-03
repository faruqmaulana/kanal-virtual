import styled from "styled-components";

//Flex
export const FlexBoxCenter = styled.div.attrs(({ className }) => className)`
  display: flex;
  align-items: center;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  border-radius: ${({ br }) => br};
  background-color: ${({ bg }) => bg};
  border: ${({ border }) => border};
  position: ${({ position }) => position};
  bottom: ${({ bottom }) => bottom};
`;

export const FlexCardFooter = styled.div`
  display: flex;
  justify-content: ${({ jc }) => jc};
  flex-direction: ${({ fd }) => fd};
  width: ${({ w }) => w};
  padding: ${({ p }) => p};
  background-color: ${({ bg }) => bg};
  box-shadow: var(--shadow-black);
`;

// Text
export const P = styled.p`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  font-style: ${({ fontStyle }) => fontStyle};
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  margin: ${({ m }) => m};
  line-height: ${({ lh }) => lh};
`;

export const ImageSrc = styled.img.attrs(({ className }) => className)`
  width: ${({ width }) => width};
  margin: ${({ m }) => m};
`;
