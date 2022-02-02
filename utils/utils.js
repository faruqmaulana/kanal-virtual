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

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
