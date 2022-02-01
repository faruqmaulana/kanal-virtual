import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { NavList, ToggleIcons, NavFooter } from "./navbar/NavbarStyle";
import { FlexBoxCenter } from "./styledComponents/StyledComponents";

export default function Navbar({ categories }) {
  const [keyword, setKeyword] = useState(false);

  function doSearch(e) {
    e.preventDefault();
    Router.push({
      pathname: "/search",
      query: {
        q: keyword,
      },
    });
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5">
            <nav className="navbar navbar-light bg-light fixed-top">
              <div className="container-fluid">
                <Link href="/">
                  <a className="navbar-brand">
                    <div className="circle"></div>
                  </a>
                </Link>
                <p className="nav-title">KANAL VIRTUAL</p>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                >
                  <ToggleIcons></ToggleIcons>
                </button>
                <div
                  className="offcanvas offcanvas-end d-flex align-items-center flex-column justify-content-center"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header">
                    <form onSubmit={doSearch} className="d-flex flex-row">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="cari disini..."
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                      <button
                        className="btn btn-outline-secondary d-flex align-items-center"
                        type="button"
                        id="button-addon2"
                        onClick={doSearch}
                        data-bs-dismiss="offcanvas"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.3779 14.3721L12.75 11.7654C13.7701 10.4935 14.2641 8.87917 14.1304 7.25425C13.9967 5.62934 13.2456 4.11739 12.0314 3.02929C10.8172 1.94119 9.23227 1.35965 7.60248 1.40425C5.97269 1.44885 4.42192 2.11619 3.26905 3.26906C2.11618 4.42193 1.44884 5.97269 1.40424 7.60249C1.35965 9.23228 1.94119 10.8172 3.02928 12.0314C4.11738 13.2456 5.62933 13.9967 7.25425 14.1304C8.87916 14.2641 10.4935 13.7701 11.7654 12.75L14.3721 15.3567C14.4379 15.4231 14.5163 15.4758 14.6026 15.5117C14.6889 15.5477 14.7815 15.5662 14.875 15.5662C14.9685 15.5662 15.0611 15.5477 15.1474 15.5117C15.2337 15.4758 15.3121 15.4231 15.3779 15.3567C15.5056 15.2246 15.5769 15.0481 15.5769 14.8644C15.5769 14.6807 15.5056 14.5042 15.3779 14.3721ZM7.79166 12.75C6.81099 12.75 5.85235 12.4592 5.03696 11.9144C4.22156 11.3695 3.58604 10.5952 3.21076 9.68914C2.83547 8.78312 2.73728 7.78617 2.9286 6.82434C3.11992 5.86252 3.59215 4.97903 4.28559 4.28559C4.97902 3.59216 5.86251 3.11992 6.82434 2.92861C7.78616 2.73729 8.78312 2.83548 9.68913 3.21076C10.5951 3.58605 11.3695 4.22157 11.9144 5.03696C12.4592 5.85236 12.75 6.811 12.75 7.79167C12.75 9.1067 12.2276 10.3679 11.2977 11.2977C10.3679 12.2276 9.10669 12.75 7.79166 12.75Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <FlexBoxCenter
                    className={"offcanvas-body"}
                    jc="between"
                    fd="column"
                  >
                    <ul className="navbar-nav flex-grow-1 ms-4">
                      <NavList categories={categories}></NavList>
                    </ul>
                    <NavFooter></NavFooter>
                  </FlexBoxCenter>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
