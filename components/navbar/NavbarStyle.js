import Link from "next/link";
import styled from "styled-components";
import { FlexBoxCenter, P } from "../styledComponents/StyledComponents";

const navList = [
  { text: "Tentang Kanal", href: "/about" },
  { text: "Bio Penulis", href: "/author" },
  { text: "Bergabung menjadi kontributor", href: "#" },
];

const navIcons = [
  {
    icon: "https://res.cloudinary.com/dbcloud776/image/upload/v1643466484/whatsapp_syxq2k.png",
    href: "https://api.whatsapp.com/send?phone=+62%20895-1432-0975",
  },
  {
    icon: "https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/youtube_gwjvui.png",
    href: "https://www.youtube.com/channel/UCbmhaVa31tCdkAeM2imHN5Q",
  },
  {
    icon: "https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/instagram_ndo91z.png",
    href: "https://www.instagram.com/perpuskanal/",
  },
  {
    icon: "https://res.cloudinary.com/dbcloud776/image/upload/v1643466483/email_gmknvx.png",
    href: "mailto: perpuskanal@gmail.com",
  },
];

// Styled components

const Strip = styled.div`
  width: 29px;
  height: 4px;
  background-color: var(--purple-100);
  margin-bottom: 4px;
  &:nth-child(3) {
    margin-bottom: 0;
  }
`;

const IconsLink = styled.img`
  margin-bottom: 0;
  margin-right: ${({ mr }) => mr};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
`;

export function NavList({ categories }) {
  const items = categories.map((category) => ({
    name: category.name,
    href: "/category/" + category.slug,
  }));

  return (
    <>
      {items.map((item) => (
        <li
          key={item.name}
          className="nav-item d-flex justify-content-end"
          data-bs-dismiss="offcanvas"
        >
          <Link href={item.href}>
            <a className="nav-link">
              {item.name !== "Terkini" ? "Tulisan " + item.name : item.name}
            </a>
          </Link>
        </li>
      ))}
      {navList.map(({ text, href }) => (
        <li
          key={text}
          className="nav-item d-flex justify-content-end"
          data-bs-dismiss="offcanvas"
        >
          <Link href={href}>
            <a className="nav-link">{text}</a>
          </Link>
        </li>
      ))}
    </>
  );
}

export function ToggleIcons() {
  return (
    <>
      {
        <FlexBoxCenter fd="column">
          <Strip></Strip>
          <Strip></Strip>
          <Strip></Strip>
        </FlexBoxCenter>
      }
    </>
  );
}

export function NavFooter() {
  return (
    <>
      <FlexBoxCenter fd="column">
        <FlexBoxCenter mb="30px" jc="center">
          {navIcons.map(({ icon, href }) => (
            <a href={href} target="_blank" key={icon} rel="noreferrer">
              <IconsLink
                src={icon}
                mr={icon == "assets/icons/email.png" ? "0" : "6px"}
                w={icon == "assets/icons/email.png" ? "25px" : "30px"}
                h={icon == "assets/icons/email.png" ? "25px" : "30px"}
              ></IconsLink>
            </a>
          ))}
        </FlexBoxCenter>
        <P fs="12px" align="center">
          Kanal 2022
        </P>
      </FlexBoxCenter>
    </>
  );
}
