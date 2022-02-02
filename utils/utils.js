export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // router.pathname === "/" || router.pathname !== "/[slug]"
  //   ? { year: "numeric", month: "long", day: "numeric" }
  //   : { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return new Date(dateString).toLocaleDateString("id-ID", options);
}
