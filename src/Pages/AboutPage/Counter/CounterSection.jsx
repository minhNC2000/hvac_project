import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./counter.scss"
const CounterSection = () => {
  return (
    
    <div className="counter spad set-bg">
      <Container className="lg">
        <div className="row">
          <Grid item lg={3} md={6} sm={6} className="counter__wrap">
            <div class="counter__item">
              <h2 class="counter-num">1922</h2>
              <p>Vehicles Stock</p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={6} className="counter__wrap">
            <div class="counter__item">
              <h2 class="counter-num">1500</h2>
              <strong>+</strong>
              <p>Vehicles Sale</p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={6} className="counter__wrap">
            <div class="counter__item">
              <h2 class="counter-num">1922</h2>
              <p>Dealer Reviews</p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={6} className="counter__wrap">
            <div class="counter__item">
              <h2 class="counter-num">5100</h2>
              <p>Happy Clients</p>
            </div>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default CounterSection;
