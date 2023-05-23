import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./chooseus.scss";
const Chooseus = () => {
  return (
    <section className="chooseus spad">
      <Container className="lg">
        <div className="row">
          <Grid container spacing={1}>
            <Grid item lg={5}>
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
                    <FontAwesomeIcon icon={faCircleCheck} /> Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit.
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
                <Button variant="contained">About Us</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div
        className="chooseus__video set-bg"
        style={{ backgroundImage: 'url("undefined")' }}
      >
        <img src="https://preview.colorlib.com/theme/hvac/img/chooseus-video.png" alt="" />
        <a
          href="https://www.youtube.com/watch?v=Xd0Ok-MkqoE"
          className="play-btn video-popup"
        >
          <i className="fa fa-play" />
        </a>
      </div>
    </section>
  );
};

export default Chooseus;
