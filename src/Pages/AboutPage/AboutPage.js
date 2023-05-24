import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import About from "./About/About";
import Call from "./Call/CallSection";
import Team from "./Team/TeamSection";
import TestimonialSection from "./Testimonial/TestimonialSection";
import CounterSection from "./Counter/CounterSection";
import ClientSection from "./Client/ClientSection";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

export const AboutPage = () => {
  return (
    <>
      <Breadcrumbs currentPath={"about us"} />

      <About />
      <Call />
      <Team />
      <TestimonialSection />
      <CounterSection />
      <ClientSection />
    </>
  );
};
