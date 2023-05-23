import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./team.scss"
const Team = () => {
  return (
    <>
      <section className="team spad">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div class="section-title team-title">
                  <span>Our Team</span>
                  <h2>Meet Our Expert</h2>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={3} sm={6}>
                <div class="team__item">
                  <div class="team__item__pic">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/about/team-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team__item__text">
                    <h5>John Smith</h5>
                    <span>Marketing</span>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} sm={6}>
                <div class="team__item">
                  <div class="team__item__pic">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/about/team-2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team__item__text">
                    <h5>John Smith</h5>
                    <span>C.E.O</span>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} sm={6}>
                <div class="team__item">
                  <div class="team__item__pic">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/about/team-3.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team__item__text">
                    <h5>John Smith</h5>
                    <span>Manager</span>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} sm={6}>
                <div class="team__item">
                  <div class="team__item__pic">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/about/team-4.jpg"
                      alt=""
                    />
                  </div>
                  <div class="team__item__text">
                    <h5>John Smith</h5>
                    <span>Delivary</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Team;
