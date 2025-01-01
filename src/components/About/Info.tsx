import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation("aboutMe");
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>{" "}
        <h3 className="about__title">{t("title2")}</h3>
        <span className="about__subtitle">{t("subtitle2")}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">{t("title3")}</h3>
        <span className="about__subtitle">{t("subtitle3")} </span>
      </div>

      <div className="about__box">
        <i className="bx bx-message-rounded-dots about__icon"></i>
        <h3 className="about__title">{t("title4")}</h3>
        <span className="about__subtitle">{t("subtitle4")}</span>
      </div>
    </div>
  );
};

export default Info;
