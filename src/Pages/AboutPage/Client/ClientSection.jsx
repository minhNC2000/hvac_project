import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./client.scss";
const ClientSection = () => {
  return (
    <div className="client spad">
      <Container maxWidth="lg">
        <Grid item lg={12} className="section-title">
          <span>Partner</span>
          <h2>Our Clients</h2>
        </Grid>

        <Grid container spacing={1} >
          <Grid item xs={12} sm={6} md={4} lg={3} >
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-1.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-2.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-3.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-2.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-4.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-5.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-6.png"
                alt=""
              />
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <a href="/#" className="client__item">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/clients/client-4.png"
                alt=""
              />
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ClientSection;
