import "./Projects.css";
import { useTranslation } from "react-i18next";

import Works from "./Works";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">{t("portfolio_title")}</h2>
      <span className="section__subtitle">{t("portfolio_subtitle")}</span>

      <Works />
    </section>
  );
};

export default Projects;
