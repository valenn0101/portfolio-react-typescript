/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck

import { useEffect, useState } from "react";

import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(project => {
        return project.category.includes(item.name);
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filter">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            className={`${active === index ? "active-work" : ""} work__item`}
            onClick={e => {
              handleClick(e, index);
            }}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map(item => (
          <WorksItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
