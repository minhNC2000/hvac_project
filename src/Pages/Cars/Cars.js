import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./cars.scss";
export const Cars = () => {
  return (
    <div>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item lg={12}>
              <div className="breadcrumb__text">
                <h1>Car Listing</h1>
                <div className="breadcumb__links">
                  <a href="/">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                  </a>
                  <span>About</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
