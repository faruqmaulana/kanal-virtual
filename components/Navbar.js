import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { NavList, ToggleIcons, NavFooter } from "./navbar/NavbarStyle";
import { FlexBoxCenter } from "./styledComponents/StyledComponents";

export default function Navbar({ categories }) {
  const [keyword, setKeyword] = useState(false);

  const [darkTheme, setDarkTheme] = useState("");

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== "") {
      if (darkTheme) {
        // Set value of  darkmode to dark
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        // Set value of  darkmode to light
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "dark");
  }, []);

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
                <div>
                  <form action="#">
                    <label className="switch">
                      <div className="d-flex justify-content-end">
                        {darkTheme ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-moon-stars"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-sun"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                          </svg>
                        )}
                      </div>
                      <input
                        type="checkbox"
                        checked={darkTheme}
                        onChange={handleToggle}
                      />
                      <span className="slider round"></span>
                    </label>
                  </form>
                </div>
                <Link href="/">
                  <a>
                    <p className="nav-title">KANAL VIRTUAL</p>
                  </a>
                </Link>
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
