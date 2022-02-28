import styled from "styled-components";
import { P } from "../styledComponents/StyledComponents";
import { useRouter } from "next/router";
import { formatDate } from "../../utils/utils";

//Horizaontal card

export const HorizontalScrolling = styled.div.attrs(
  ({ className }) => className
)`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const HorizontalCardsStyle = styled.div`
  /*float: left;*/
  max-width: 187px;
  padding: 0 0.75rem 0 0.75rem;
  margin-bottom: 1.1rem;
  border: 0;
  flex-basis: 42.333%;
  flex-grow: 0;
  flex-shrink: 0;
  background: url("${({ lazyImage }) => lazyImage}");
`;

export const ImgHorizontal = styled.div`
  /*float: left;*/
  max-width: 187px;
  padding: 0 0.75rem 0 0.75rem;
  margin-bottom: 1.1rem;
  border: 0;
  flex-basis: 42.333%;
  flex-grow: 0;
  flex-shrink: 0;
  background: url("${({ lazyImage }) => lazyImage}");
`;

//Vertical Cards
export const CardPostsStyle = styled.div`
  width: 250px;
  height: 125px;
  background: url("${({ bgImg }) => bgImg}");
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 23px;
  padding-top: 1px;
  background-position: center;
`;

export const PostTitle = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: ${({ mw }) => mw};
  height: ${({ h }) => h};
  font-size: ${({ fs }) => fs};
  margin: ${({ m }) => m};
  line-height: 14px;
`;

export const PostTitleNews = styled.span`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  font-weight: 600;
  margin: 0 0 7px 0;
  height: 31px;
  -webkit-box-orient: vertical;
  font-size: 11px;
  line-height: 14px;
`;

export default function CardFooter({ authorName, viewPost, publish }) {
  const router = useRouter();

  return (
    <>
      <div className="d-flex align-items-center">
        <P fs="8px" m="0 0.6rem 0 0" color="var(--black)">
          Oleh
        </P>
        <P fs="8px" m="0" color="var(--black-200)">
          {authorName}
        </P>
        {router.pathname !== "/" ? (
          <>
            <div className="ms-auto d-flex align-items-center justify-content-center">
              <img
                className="eye"
                src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/eye_cfeldy.png"
                alt=""
              />
              <P fs="8px" m="0 0 0 auto" color="var(--black-200)">
                {viewPost}
              </P>
            </div>
          </>
        ) : (
          <>
            <P fs="8px" m="0 0 0 auto" color="var(--black-200)">
              {formatDate(publish)}
            </P>
          </>
        )}
      </div>
    </>
  );
}
