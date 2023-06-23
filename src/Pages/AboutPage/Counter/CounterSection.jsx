import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./counter.scss";
const CounterSection = () => {
  return (
    <div className="counter spad set-bg">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3} lg={3} className="counter__wrap">
            <div className="counter__item">
              <h2 className="counter-num">1922</h2>
              <p>Vehicles Stock</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className="counter__wrap">
            <div className="counter__item">
              <h2 className="counter-num">1500</h2>
              <strong>+</strong>
              <p>Vehicles Sale</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className="counter__wrap">
            <div className="counter__item">
              <h2 className="counter-num">1922</h2>
              <p>Dealer Reviews</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} className="counter__wrap">
            <div className="counter__item">
              <h2 className="counter-num">5100</h2>
              <p>Happy Clients</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CounterSection;
