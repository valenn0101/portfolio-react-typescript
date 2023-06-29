import "./styles/Header.css";

import { useState } from "react";

const Header = () => {
  const [Toggle, showMenu] = useState<boolean>(false);

  const [activeNav, setActiveNav] = useState("#home");

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          (cambio de idioma)
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skill"
                className={
                  activeNav === "#skill" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#skill")}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <button
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></button>
        </div>

        <button className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
