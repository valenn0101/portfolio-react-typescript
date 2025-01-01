import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("header");

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Valentin</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              {t("menu.home")}
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              {t("menu.about")}
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              {t("menu.portfolio")}
            </a>
          </li>
        </ul>

        <span className="footer__copy">
          Copyright &copy; {new Date().getFullYear()} Ramon Valentin Veron
        </span>
      </div>
    </footer>
  );
};

export default Footer;
