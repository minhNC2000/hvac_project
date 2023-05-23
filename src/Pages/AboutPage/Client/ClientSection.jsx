import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./client.scss"
const ClientSection = () => {
  return (
    <div className="client spad">
        <Container className="lg">
          <div className="row">
            <Grid item lg={12}>
              <div class="section-title">
                <span>Partner</span>
                <h2>Our Clients</h2>
              </div>
            </Grid>
          </div>
          <div className="row">
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-1.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-2.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-3.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-2.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-4.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-5.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-6.png"
                  alt=""
                />
              </a>
            </Grid>
            <Grid item lg={3} md={4} sm={6}>
              <a href="#" class="client__item">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/clients/client-4.png"
                  alt=""
                />
              </a>
            </Grid>
          </div>
        </Container>
      </div>
  )
}

export default ClientSection