import { Project, ProjectNav } from "@/models/someInterfaces";

import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work4.png";
import work4 from "../../assets/work5.png";
import work5 from "../../assets/work6.png";
import work7 from "../../assets/work7.png";

export const projectsData: Project[] = [
  {
    id: 1,
    image: work1,
    title: "Tic tac toe",
    skills: "JavaScript, CSS, Bootstrap",
    category: ["Frontend"],
    url: "https://valenn0101.github.io/Ta-Te-Ti/",
  },
  {
    id: 2,
    image: work2,
    title: "Memo-text",
    skills: "JavaScript, CSS, Bootstrap",
    category: ["Frontend"],
    url: "https://valenn0101.github.io/Memo-Test-Demo/",
  },
  {
    id: 3,
    image: work3,
    title: "Exchange-App",
    skills: "JavaScript, CSS, Bootstrap",
    category: ["Frontend"],
    url: "https://valenn0101.github.io/DEMO-Exchange-App/",
  },
  {
    id: 4,
    image: work4,
    title: "Pokedex APP",
    skills: "JavaScript, CSS, Bootstrap",
    category: ["Frontend"],
    url: "https://valenn0101.github.io/DEMO-Pokedex/",
  },
  {
    id: 5,
    image: work5,
    title: "CRUD Futbol",
    skills: "Node.JS, Express, Handlebars",
    category: ["Backend"],
    url: "https://crud-premier-league-football.onrender.com/api/v1/clubs",
  },
  {
    id: 6,
    image: work7,
    title: "CRUD Ecommerce",
    skills: "MySQL, ORM, React, Login, Swagger, Cloudinary",
    category: ["Backend", "Frontend"],
    url: "https://ecommerce-st.vercel.app/",
  },
];

export const projectsNav: ProjectNav[] = [
  {
    name: "all",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
];