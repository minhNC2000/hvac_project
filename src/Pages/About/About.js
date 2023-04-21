import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./about.scss";

export const About = () => {
  return (
    <>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div className="breadcrumb__text">
                  <h1>About us</h1>
                  <div className="breadcumb__links">
                    <a href="/">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </a>
                    <span>About us</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <section className="about spad">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div class="section-title  about-title">
                  <h2>
                    Wellcome To HVAC Auto Online
                    <br></br>
                    We Provide Everything You Need To A Car
                  </h2>
                  <p>
                    First I will explain what contextual advertising is.
                    Contextual advertising means the advertising of products on
                    a website according to
                    <br></br>
                    the content the page is displaying. For example if the
                    content of a website was information on a Ford truck then
                    the advertisements
                  </p>
                </div>
              </Grid>
            </Grid>
            <div className="about__feature">
              <div className="row">
                <Grid container spacing={1}>
                  <Grid item lg={4} md={6} sm={6}>
                    <div class="about__feature__item">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/about/af-1.png"
                        alt=""
                      />
                      <h5>Quality Assurance System</h5>
                      <p>
                        It seems though that some of the biggest problems with
                        the internet advertising trends are the lack of
                      </p>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6}>
                    <div class="about__feature__item">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/about/af-2.png"
                        alt=""
                      />
                      <h5>Accurate Testing Processes</h5>
                      <p>
                        Where do you register your complaints? How can you
                        protest in any form against companies whose
                      </p>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={6} sm={6}>
                    <div class="about__feature__item">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/about/af-3.png"
                        alt=""
                      />
                      <h5>Infrastructure Integration Technology</h5>
                      <p>
                        So in final analysis: it’s true, I hate peeping Toms,
                        but if I had to choose, I’d take one any day over an
                      </p>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="row">
              <Grid container spacing={1}>
                <Grid item lg={12}>
                  <div class="about__pic">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/about/about-pic.jpg"
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                  <div class="about__item">
                    <h5>Our Mission</h5>
                    <p>
                      Now, I’m not like Robin, that weirdo from my cultural
                      anthropology class; I think that advertising is something
                      that has its place in our society; which for better or
                      worse is structured along a marketplace economy. But,
                      simply because I feel advertising has a right to exist,
                      doesn’t mean that I like or agree with it, in its
                    </p>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={6}>
                  <div class="about__item">
                    <h5>Our Vision</h5>
                    <p>
                      Where do you register your complaints? How can you protest
                      in any form against companies whose advertising techniques
                      you don’t agree with? You don’t. And on another point of
                      difference between traditional products and their
                      advertising and those of the internet nature, simply
                      ignoring internet advertising is
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </section>
      <section className="call spad set-bg">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container lg={5} md={6}>
              <div class="call__text">
                <div class="section-title">
                  <h2>Request A Call Back</h2>
                  <p>
                    Posters had been a very beneficial marketing tool because it
                    had paved to deliver an effective message that conveyed
                    customer's
                  </p>
                </div>
                <a href="/lien-he">Contact Us</a>
              </div>
            </Grid>
            <Grid container lg={6} md={6}>
              <form action="#" class="call__form">
                <div class="row">
                  <div class="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div class="col-lg-6">
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div class="col-lg-6">
                    <select>
                      <option value="">Choose Our Services</option>
                      <option value="">Buy Cars</option>
                      <option value="">Sell Cars</option>
                      <option value="">Wash Cars</option>
                    </select>
                    <div class="nice-select" tabindex="0">
                      <span class="current">Choose Our Services</span>
                      <ul class="list">
                        <li data-value="" class="option selected">
                          Choose Our Services
                        </li>
                        <li data-value="" class="option">
                          Buy Cars
                        </li>
                        <li data-value="" class="option">
                          Sell Cars
                        </li>
                        <li data-value="" class="option">
                          Wash Cars
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <button type="submit" class="site-btn">
                  Submit Now
                </button>
              </form>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};
