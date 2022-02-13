import { useRouter } from "next/router";
import { FlexBoxCenter } from "./styledComponents/StyledComponents";

export default function Pagination(page, totalPage, limitPost) {
  const router = useRouter();

  //handle page variabel
  var totalPage = page.totalPage;
  var limitPost = page.limitPost;
  var page = page.page;
  var lastPage = Math.ceil(totalPage / limitPost);
  var categorySlug = router.query.category;
  var authorSlug = router.query.authors;

  //getTotalButton
  var totalButtton = [];
  for (let index = 1; index <= lastPage; index++) {
    var array = { index };
    totalButtton.push(array);
  }

  //get dinamic path value
  var pathSlug =
    router.pathname === "/category/[category]" ? categorySlug : authorSlug;

  //set dinamic routing
  var pageRouter = router.pathname === "/" ? "/" : pathSlug;

  return (
    <>
      {totalButtton.length > 1 && (
        <>
          <FlexBoxCenter
            jc="center"
            className="mb-2 container mb-3 d-flex align-items-center m-auto"
            w="270px"
          >
            {page > 1 && (
              <div
                className="pagination-btn"
                onClick={() => {
                  router.push(`${pageRouter}?page=${page - 1}`);
                }}
              >
                Sebelumnya
              </div>
            )}
            {page < lastPage && (
              <div
                className={`pagination-btn ${page <= 1 ? "m-auto" : "ms-auto"}`}
                onClick={() => {
                  router.push(`${pageRouter}?page=${page + 1}`);
                }}
              >
                Selanjutnya
              </div>
            )}
          </FlexBoxCenter>
          <FlexBoxCenter jc="center">
            {totalButtton.map((total) => (
              <div
                key={total.index}
                value={total.index}
                className={`circle-pagination ${
                  total.index == page && "active"
                }`}
                onClick={() => {
                  router.push(`${pageRouter}?page=${total.index}`);
                }}
              >
                {total.index}
              </div>
            ))}
          </FlexBoxCenter>
        </>
      )}
    </>
  );
}
