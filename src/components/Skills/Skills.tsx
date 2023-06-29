import "./Skills.css";

import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <section className="skills section" id="skill">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tecnologias que utilizo</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
