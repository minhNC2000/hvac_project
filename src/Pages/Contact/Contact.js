import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'

import Form from "./FormSubmit/Form";
import ShowRoomSection from "./ShowRoom/ShowRoomSection";


export const Contact = () => {
  return (
    <div>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div className="breadcrumb__text">
                  <h1>Contact us</h1>
                  <div className="breadcumb__links">
                    <a href="/">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </a>
                    <span>Contact Us</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <section className="contact spad">
        <Container maxWidth="lg">
          <div className="row">
            <Form />
          </div>
        </Container>
      </section>
      <ShowRoomSection />
    </div>
  );
};
