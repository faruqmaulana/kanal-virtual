import { useRouter } from "next/router";

export function formatDate(dateString) {
  const router = useRouter();

  const options =
    router.pathname === "/" || router.pathname !== "/[slug]"
      ? { year: "numeric", month: "long", day: "numeric" }
      : { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return new Date(dateString).toLocaleDateString("id-ID", options);
}
