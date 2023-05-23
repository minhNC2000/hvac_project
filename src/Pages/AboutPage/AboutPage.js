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
export const AboutPage = () => {
  return (
    <>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div className="breadcrumb__text">
                  <h1>About Us</h1>
                  <div className="breadcumb__links">
                    <a href="/">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </a>
                    <span>About us</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <About />
      <Call />
      <Team />
      <TestimonialSection />
      <CounterSection />
      <ClientSection />
    </>
  );
};
