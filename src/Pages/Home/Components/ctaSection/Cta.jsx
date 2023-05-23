import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import "./cta.scss";
const Cta = () => {
  return (
    <section className="cta">
      <Container className="lg">
        <div className="row">
          <Grid container spacing={4}>
            <Grid item lg={6} md={6}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </Grid>
            <Grid item lg={6} md={6}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
