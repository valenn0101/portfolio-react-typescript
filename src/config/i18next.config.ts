/* eslint-disable import/no-unresolved */
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import enHeader from "../locale/en/header.json";
import esHeader from "../locale/es/header.json";

import enHome from "../locale/en/home.json";
import esHome from "../locale/es/home.json";

import enAboutMe from "../locale/en/about-me.json";
import esAboutMe from "../locale/es/about-me.json";

import enQualifications from "../locale/en/qualifications.json";
import esQualifications from "../locale/es/qualifications.json";

import enProjects from "../locale/en/projects.json";
import esProjects from "../locale/es/projects.json";

import enContact from "../locale/en/contact.json";
import esContact from "../locale/es/contact.json";

i18next.use(initReactI18next).init({
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      header: enHeader,
      data: enHome,
      aboutMe: enAboutMe,
      qualifications: enQualifications,
      projects: enProjects,
      contact: enContact,
    },
    es: {
      header: esHeader,
      data: esHome,
      aboutMe: esAboutMe,
      qualifications: esQualifications,
      projects: esProjects,
      contact: esContact,
    },
  },
  ns: ["header", "data", "aboutMe", "qualifications", "projects", "contact"],
  defaultNS: "header",
});
