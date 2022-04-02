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
    quality: 50,
  },
};

export const img_blur = {
  cloud: {
    cloudName: "dbcloud776",
  },
  transformations: {
    effect: "blur:9999",
    quality: 20,
    resize: {
      width: 300,
      height: 150,
    },
  },
};

export const getSmallBase64 = {
  cloud: {
    cloudName: "dbcloud776",
  },
  transformations: {
    quality: 5,
    resize: {
      width: 250,
      height: 110,
    },
  },
};
