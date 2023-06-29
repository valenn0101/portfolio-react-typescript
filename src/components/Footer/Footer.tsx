import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Valentin</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Proyectos
            </a>
          </li>

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/veron_caceres"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>

          <a
            href="https://www.instagram.com/valentinn.vc/?hl=es-la"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          Copyright &copy; {new Date().getFullYear()} Ramon Valentin Veron
        </span>
      </div>
    </footer>
  );
};

export default Footer;
