import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">HTML & CSS</h3>
              <span className="skills_level">
                <i className="bx bxl-html5"></i>
                <i className="bx bxl-css3"></i>
              </span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <i className="bx bxl-javascript"></i>{" "}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tailwind.css</h3>
              <i className="bx bxl-tailwind-css"></i>{" "}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Cypress & Jest</h3>
              <span className="skills_level">Testing</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">React</h3>
              <i className="bx bxl-react"></i>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Next.js</h3>
              <i className="bx bxl-next"></i>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tanstack</h3>
              <span className="skills_level">Table, Query, Form</span>
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Redux</h3>
              <i className="bx bxl-redux"></i>{" "}
            </div>
          </div>

          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">TypeScript</h3>
              <i className="bx bxl-typescript"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
