/* eslint-disable react/prop-types */
import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App({ resume }) {
  let location = useLocation();
  let linkHomePage = "/";
  let linkProjectsPage = "/projects";
  let linkCVPage = "/cv";
  let linkWorkPage = "/work";
  const [isActive, setActive] = useState(false);

  const toggleClass = () =>{
    setActive(!isActive)
    console.log('clicked');
  }
  return (
    <>
      <SetTitlePage />
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__logo">
            {location.pathname === linkHomePage ? (
              resume.basics.profiles.map((profile) => (
                <React.Fragment key={profile.network}>
                  <a href={profile.url} className="home__social-icon">
                    <i className={`bx ${profile.icon}`}></i>
                  </a>
                </React.Fragment>
              ))
            ) : (
              <a href={linkHomePage} className="home__social-icon">
                <span className="font-weight-bold">Hau&nbsp; </span>
                Doan
              </a>
            )}
          </div>
          <div className={isActive ? "nav__menu show" : "nav__menu" } id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link
                  to={linkHomePage}
                  className={`nav__link ${
                    location.pathname === linkHomePage ? "active-link" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to={linkProjectsPage}
                  className={`nav__link ${
                    location.pathname === linkProjectsPage ? "active-link" : ""
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    location.pathname === linkCVPage ? "active-link" : ""
                  }`}
                  to={linkCVPage}
                >
                  CV
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  className={`nav__link ${
                    location.pathname === linkWorkPage ? "active-link" : ""
                  }`}
                  to={linkWorkPage}
                >
                  Work
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__toggle" onClick={toggleClass} id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
function SetTitlePage() {
  useEffect(() => {
    document.title = "Hau Doan";
  }, []);
}

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };
// showMenu("nav-toggle", "nav-menu");

export default App;
