import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import "./contact.scss";
export const Contact = () => {
  return (
    <div>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div className="breadcrumb__text">
                  <h1>Contact us</h1>
                  <div className="breadcumb__links">
                    <a href="/">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </a>
                    <span>Contact Us</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <section className="contact spad">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={6} md={6}>
                <div className="contact__text">
                  <div className="section-title">
                    <h2>Let's Work Together</h2>
                    <p>
                      To make requests for further information, contact us via
                      our social channels.
                    </p>
                  </div>
                  <ul>
                    <li>
                      <span>Weekday:</span> 08:00 am to 18:00 pm
                    </li>
                    <li>
                      <span>Saturday:</span> 10:00 am to 16:00 pm
                    </li>
                    <li>
                      <span>Sunday:</span> Closed
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item lg={6} md={6}>
                <div className="contact__form">
                  <form action="#">
                    <div className="row">
                      <Grid item lg={6}>
                        <input type="text" placeholder="Name" />
                      </Grid>
                      <Grid item lg={6}>
                        <input type="email" placeholder="Email" />
                      </Grid>
                    </div>

                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Question"></textarea>
                    <Button type="submit" className="site-btn">
                      Submit
                    </Button>
                  </form>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
      <div className="contact-address">
        <Container maxWidth="lg">
          <div className="contact__address__text">
            <div className="row">
              <Grid item lg={4} md={6} sm={6} className="contact__body">
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
              <Grid item lg={4} md={6} sm={6} className="contact__body">
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
              <Grid item lg={4} md={6} sm={6} className="contact__body">
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
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
