import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./services.scss";
const Services = () => {
  return (
    <section className="services spad">
      <Container className="lg">
        <div className="row">
          <Grid item lg={12}>
            <div className="section-title">
              <span>Our Services</span>
              <h2>What We Offers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </Grid>
        </div>
        <div className="row">
          <Grid container spacing={2}>
            <Grid item lg={3} md={6} sm={6}>
              <div className="services__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/services/services-1.png"
                  alt=""
                />
                <h5>Rental A Cars</h5>
                <p>
                  Consectetur adipiscing elit incididunt ut labore et dolore
                  magna aliqua. Risus commodo viverra maecenas.
                </p>
                <a href="#">
                <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div className="services__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/services/services-2.png"
                  alt=""
                />
                <h5>Rental A Cars</h5>
                <p>
                  Consectetur adipiscing elit incididunt ut labore et dolore
                  magna aliqua. Risus commodo viverra maecenas.
                </p>
                <a href="#">
                <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div className="services__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/services/services-3.png"
                  alt=""
                />
                <h5>Rental A Cars</h5>
                <p>
                  Consectetur adipiscing elit incididunt ut labore et dolore
                  magna aliqua. Risus commodo viverra maecenas.
                </p>
                <a href="#">
                <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </Grid>
            <Grid item lg={3} md={6} sm={6}>
              <div className="services__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/services/services-4.png"
                  alt=""
                />
                <h5>Rental A Cars</h5>
                <p>
                  Consectetur adipiscing elit incididunt ut labore et dolore
                  magna aliqua. Risus commodo viverra maecenas.
                </p>
                <a href="#">
                <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Services;
