import TitleCategory from "../components/TitleCategory";
import Head from "next/head";
import { HubungiAdmin } from "../components/category/CategoryStyle";

export default function About() {
  return (
    <>
      <Head>
        <title>Tentang</title>
      </Head>
      <TitleCategory title={"Tentang Kanal"}></TitleCategory>
      <div className="container text-center" style={{ color: "var(--black)" }}>
        Konten belum tersedia
        <HubungiAdmin
          className={"col mt-5 m-auto d-flex align-items-center"}
          style={{ width: "150px" }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=+6283833454679"
            target="_blank"
            style={{ lineHeight: 1, color: "var(--black-navbar)" }}
          >
            Hubungi admin
          </a>
          <img
            className="ms-2"
            src="https://res.cloudinary.com/dbcloud776/image/upload/v1643466484/whatsapp_syxq2k.png"
            style={{ width: "15px", heigh: "15px" }}
          />
        </HubungiAdmin>
      </div>
    </>
  );
}
