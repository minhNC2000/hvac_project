import React from "react";

import { Container, Grid } from "@mui/material";
import "./showroom.scss";
const ShowRoomSection = () => {
  return (
    <div className="contact-address">
      <Container maxWidth="lg">
        <div className="contact__address__text">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4} className="contact__body">
              <div className="contact__address__item">
                <h2>California Showroom</h2>
                <p>
                  625 Gloria Union, California, United Stated
                  <br />
                  Colorlib.california@gmail.com
                </p>
                <span>(+12) 456 678 9100</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} className="contact__body">
              <div className="contact__address__item">
                <h2>New York Showroom</h2>
                <p>
                  8235 South Ave. Jamestown, NewYork
                  <br />
                  Colorlib.Newyork@gmail.com
                </p>
                <span>(+12) 456 678 9100</span>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} className="contact__body">
              <div className="contact__address__item">
                <h2>Florida Showroom</h2>
                <p>
                  497 Beaver Ridge St. Daytona Beach, Florida
                  <br />
                  Colorlib.california@gmail.com
                </p>
                <span>(+12) 456 678 9100</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ShowRoomSection;
