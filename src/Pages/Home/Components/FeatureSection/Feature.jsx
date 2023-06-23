import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import "./feature.scss";
const Feature = () => {
  return (
    <section className="feature spad">
      <Container maxWidth="lg">
        <Grid container spacing={2} className="feature_body">
          <Grid lg={4}>
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
                <a className="primary-btn" href="/gioi-thieu">
                  About Us
                </a>
                <a href="#" className="primary-btn partner-btn">
                  Our Partners
                </a>
              </div>
            </div>
          </Grid>
          <Grid sm={12} md={4} lg={4}>
            <div className="row">
              <Grid container spacing={1} mdOffset={1}>
                <Grid lg={6} md={4} sm={6} className="feature_body-content">
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
                <Grid lg={6} md={4} sm={6} className="feature_body-content">
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
                <Grid lg={6} md={4} sm={6} className="feature_body-content">
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
                <Grid lg={6} md={4} sm={6} className="feature_body-content">
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
                <Grid lg={6} md={4} sm={6}>
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
                <Grid lg={6} md={4} sm={6}>
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
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Feature;
