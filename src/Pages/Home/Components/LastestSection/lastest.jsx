import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./lastest.scss";
const Lastest = () => {
  return (
    <section className="lastest spad">
      <Container classname="lg">
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <div className="section-title">
              <span>Our Blog</span>
              <h2>Latest News Updates</h2>
              <p>
                Sign up for the latest Automobile Industry information and more.
                Duis aute
                <br /> irure dolorin reprehenderits volupta velit dolore fugiat.
              </p>
            </div>
          </Grid>
        </Grid>
        <div className="row">
          <Grid container spacing={1}>
            <Grid item lg={4} md={6}>
              <div className="latest__blog__item">
                <div
                  className="latest__blog__item__pic set-bg"
                  data-setbg="https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-1.jpg"
                  style={{
                    backgroundImage:
                      'url("https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-1.jpg")',
                  }}
                >
                  <ul>
                    <li>By Polly Williams</li>
                    <li>Dec 19, 2018</li>
                    <li>Comment</li>
                  </ul>
                </div>
                <div className="latest__blog__item__text">
                  <h5>Benjamin Franklin S Method Of Habit Formation</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                  </p>
                  <a href="#">
                    View More <FontAwesomeIcon icon={faArrowRightLong} />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6}>
              <div className="latest__blog__item">
                <div
                  className="latest__blog__item__pic set-bg"
                  data-setbg="https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-2.jpg"
                  style={{
                    backgroundImage:
                      'url("https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-2.jpg")',
                  }}
                >
                  <ul>
                    <li>By Mattie Ramirez</li>
                    <li>Dec 19, 2018</li>
                    <li>Comment</li>
                  </ul>
                </div>
                <div className="latest__blog__item__text">
                  <h5>How To Set Intentions That Energize You</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                  </p>
                  <a href="#">
                    View More <FontAwesomeIcon icon={faArrowRightLong} />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={6}>
              <div className="latest__blog__item">
                <div
                  className="latest__blog__item__pic set-bg"
                  data-setbg="https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-3.jpg"
                  style={{
                    backgroundImage:
                      'url("https://preview.colorlib.com/theme/hvac/img/latest-blog/lb-3.jpg")',
                  }}
                >
                  <ul>
                    <li>By Nicholas Brewer</li>
                    <li>Dec 19, 2018</li>
                    <li>Comment</li>
                  </ul>
                </div>
                <div className="latest__blog__item__text">
                  <h5>Burning Desire Golden Key Or Red Herring</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus vel
                    facilisis.
                  </p>
                  <a href="#">
                    View More <FontAwesomeIcon icon={faArrowRightLong} />
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Lastest;
