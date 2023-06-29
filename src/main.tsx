import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home2 from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Qualifications from "./components/Qualifications/Qualifications";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Skills from "./components/Skills/Skills";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
    />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <Header />
    <main className="main">
      <Home2 />
      <About />
      <Skills />
      <Qualifications />
      <Projects />
      <Contact />
    </main>
    <Footer />
    <ScrollUp />
  </StrictMode>
);
