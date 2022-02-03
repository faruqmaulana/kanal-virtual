import Link from "next/link";
import { FlexBoxCenter } from "./styledComponents/StyledComponents";
import { CategoryBox } from "./category/CategoryStyle";

export default function CategoryPost({ categories }) {
  const items = categories.map((category) => ({
    name: category.name,
    href: "/category/" + category.slug,
  }));
  return (
    <>
      <FlexBoxCenter jc="center" p="71px 0 0 0">
        {items.map((item) => (
          <Link href={item.href} key={item.name}>
            <CategoryBox className={"col"}>{item.name}</CategoryBox>
          </Link>
        ))}
      </FlexBoxCenter>
    </>
  );
}
