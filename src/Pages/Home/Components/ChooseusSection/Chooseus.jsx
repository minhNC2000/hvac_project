import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./chooseus.scss";
import { Button, Container, Grid } from "@mui/material";
import ReactPlayer from "react-player";
const Chooseus = () => {
  return (
    <section className="chooseus spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid item sm={5} md={5} lg={5}>
            <div className="chooseus__text">
              <div className="section-title">
                <h2>Why People Choose Us</h2>
                <p>
                  Duis aute irure dolorin reprehenderits volupta velit dolore
                  fugiat nulla pariatur excepteur sint occaecat cupidatat.
                </p>
              </div>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} /> Integer et nisl et
                  massa tempor ornare vel id orci.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} /> Nunc consectetur
                  ligula vitae nisl placerat tempus.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} /> Curabitur quis ante
                  vitae lacus varius pretium.
                </li>
              </ul>
              <Button variant="contained">
                <a href="/gioi-thieu">About Us</a>
              </Button>
            </div>
          </Grid>
        </Grid>

        <div className="chooseus__video  ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Xd0Ok-MkqoE"
            width="100%"
            height="100%"
            
          />
        </div>
      </Container>
    </section>
  );
};

export default Chooseus;
