import "./Qualifications.css";
import { useTranslation } from "react-i18next";

import { useState } from "react";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (
    index: number
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    setToggleState(index);
    return undefined;
  };

  const { t, i18n } = useTranslation("qualifications");

  return (
    <section className="qualification section">
      <h2 className="section__title">{t("title1")}</h2>
      <span className="section__subtitle">{t("subtitle1")}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <button
            style={{ backgroundColor: "#FAFAFA" }}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            {t("title2")}
          </button>

          <button
            style={{ backgroundColor: "#FAFAFA" }}
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            {t("title3")}
          </button>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("studies_data1")}</h3>
                <span className="qualification__subtitle">
                  {" "}
                  {t("studies_data1_subtitle")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("studies_data1_date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">{t("studies_data2")}</h3>
                <span className="qualification__subtitle">
                  {" "}
                  {t("studies_data2_subtitle")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("studies_data2_date")}
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("studies_data3")}</h3>
                <span className="qualification__subtitle">
                  {" "}
                  {t("studies_data3_subtitle")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("studies_data3_date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__line"></span>
              </div>

              <div>
                <span className="qualification__subtitle"> </span>
                <div className="qualification__calender"></div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content "
            }
          >
            <div className="qualification__data">
              <div>
                {" "}
                <div>
                  <h3 className="qualification__title">{t("works_data1")}</h3>
                  <span className="qualification__subtitle">
                    {" "}
                    {t("works_data1_subtitle")}
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i>
                    {t("works_data1_date")}
                  </div>
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">{t("works_data2")}</h3>
                <span className="qualification__subtitle">
                  {" "}
                  {t("works_data2_subtitle")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("works_data2_date")}
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">{t("works_data3")}</h3>
                <span className="qualification__subtitle">
                  {t("works_data3_subtitle")}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("works_data3_date")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
