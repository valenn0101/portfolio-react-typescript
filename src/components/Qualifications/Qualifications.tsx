import "./Qualifications.css";

import { useState } from "react";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (
    index: number
  ): React.MouseEventHandler<HTMLDivElement> | undefined => {
    setToggleState(index);
    return undefined;
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Aptitudes</h2>
      <span className="section__subtitle">Mis estudios y experiencias</span>

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
            Educacion
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
            Trabajos
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
                <h3 className="qualification__title">Programador FullStack</h3>
                <span className="qualification__subtitle">
                  {" "}
                  r/ArgentinaPrograma
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2022 - 2023
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
                <h3 className="qualification__title">
                  Ingenieria Electromecanica
                </h3>
                <span className="qualification__subtitle">
                  {" "}
                  Universidad Nacional de Santiago del Estero
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - Presente
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingles (B1)</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Centro de Servicios en Lenguas Extranjeras{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Presente
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
                <h3 className="qualification__title">Becario</h3>
                <span className="qualification__subtitle"> Fundacion YPF</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020 - 2023
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
                <h3 className="qualification__title">Atencion al Cliente</h3>
                <span className="qualification__subtitle">
                  {" "}
                  Dionisio Tienda
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
