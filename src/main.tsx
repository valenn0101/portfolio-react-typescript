import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home2 from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Qualifications from "./Qualifications/Qualifications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Componente que queremos cargar
    errorElement: <Error />,
  },
]);

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
      <Contact />
      <Footer />
    </main>
  </StrictMode>
);
