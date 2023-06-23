import React from "react";

import "./cta.scss";
import { Container, Grid } from "@mui/material";
const Cta = () => {
  return (
    <section className="cta">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={6}>
            <div
              className="cta__item set-bg"
              data-setbg="https://preview.colorlib.com/theme/hvac/img/cta/cta-1.jpg"
              style={{
                backgroundImage:
                  'url("https://preview.colorlib.com/theme/hvac/img/cta/cta-1.jpg")',
              }}
            >
              <h4>Do You Want To Buy A Car</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <div
              className="cta__item set-bg"
              data-setbg="https://preview.colorlib.com/theme/hvac/img/cta/cta-2.jpg"
              style={{
                backgroundImage:
                  'url("https://preview.colorlib.com/theme/hvac/img/cta/cta-2.jpg")',
              }}
            >
              <h4>Do You Want To Rent A Car</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Cta;
