import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./team.scss";
const Team = () => {
  return (
    <>
      <section className="team spad">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item sm={12} md={12} lg={12} className="section-title ">
              <span>Our Team</span>
              <h2>Meet Our Expert</h2>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="team__item">
                <div className="team__item__pic">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/about/team-1.jpg"
                    alt=""
                  />
                </div>
                <div className="team__item__text">
                  <h5>John Smith</h5>
                  <span>Marketing</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="team__item">
                <div className="team__item__pic">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/about/team-2.jpg"
                    alt=""
                  />
                </div>
                <div className="team__item__text">
                  <h5>John Smith</h5>
                  <span>C.E.O</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="team__item">
                <div className="team__item__pic">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/about/team-3.jpg"
                    alt=""
                  />
                </div>
                <div className="team__item__text">
                  <h5>John Smith</h5>
                  <span>Manager</span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="team__item">
                <div className="team__item__pic">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/about/team-4.jpg"
                    alt=""
                  />
                </div>
                <div className="team__item__text">
                  <h5>John Smith</h5>
                  <span>Delivary</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Team;
