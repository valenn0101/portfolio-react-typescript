import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>{" "}
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">Junior Advance</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Practica</h3>
        <span className="about__subtitle">
          Proyectos profesionales y Universidad
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-message-rounded-dots about__icon"></i>
        <h3 className="about__title">Disponible</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
