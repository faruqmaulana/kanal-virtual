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

export async function getBase64ImageUrl(imageId) {
  const response = await fetch(imageId);
  const buffer = await response.arrayBuffer();
  const data = Buffer.from(buffer).toString("base64");
  return `data:image/webp;base64,${data}`;
}

export const db_cloud = {
  cloud: {
    cloudName: "dbcloud776",
  },
  transformations: {
    quality: 10,
  },
};
