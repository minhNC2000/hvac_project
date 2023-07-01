import React from "react";
import Container from "@mui/material/Container";

import "./feature.scss";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Feature = () => {
  return (
    <section className="feature spad">
      <Container maxWidth="lg">
        <Grid container spacing={2} className="feature_body">
          <Grid item xs={12} sm={6} md={12} lg={4}>
            <div className="feature__text">
              <div className="section-title">
                <span>Our Feature</span>
                <h2>We Are a Trusted Name In Auto</h2>
              </div>
              <div className="feature__text__desc">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
              <div className="feature__text__btn">
                <Link className="primary-btn" to="/gioi-thieu">
                  About Us
                </Link>
                <Link to="/" className="primary-btn partner-btn">
                  Our Partners
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={12} lg={4} className="feature_image">
            <img
              src="https://preview.colorlib.com/theme/hvac/img/feature/car.png"
              alt=""
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                lg={6}
                className="feature_body-content"
              >
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-1.png"
                      alt=""
                    />
                  </div>
                  <h6>Engine</h6>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                lg={6}
                className="feature_body-content"
              >
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-2.png"
                      alt=""
                    />
                  </div>
                  <h6>Turbo</h6>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                lg={6}
                className="feature_body-content"
              >
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-3.png"
                      alt=""
                    />
                  </div>
                  <h6>Cooling</h6>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                md={6}
                lg={6}
                className="feature_body-content"
              >
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-4.png"
                      alt=""
                    />
                  </div>
                  <h6>Suspension</h6>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={6}>
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-5.png"
                      alt=""
                    />
                  </div>
                  <h6>Electricial</h6>
                </div>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={6}>
                <div className="feature__item">
                  <div className="feature__item__icon">
                    <img
                      src="	https://preview.colorlib.com/theme/hvac/img/feature/feature-6.png"
                      alt=""
                    />
                  </div>
                  <h6>Brakes</h6>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Feature;
