import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import "./hero.scss";
const Hero = () => {
  return (
    <>
      <div className="hero spad set-bg-hero">
        <Container className="lg">
          <div className="row">
          <Grid container spacing={2}>
          <Grid item lg={7}>
              <div className="hero__text">
                <div className="hero__text__title">
                  <span>FIND YOUR DREAM CAR</span>
                  <h2>Porsche Cayenne S</h2>
                </div>
                <div className="hero__text__price">
                  <div className="car-model">Model 2019</div>
                  <h2>
                    $399<span>/Month</span>
                  </h2>
                </div>
                <a href="#" className="primary-btn">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/wheel.png"
                    alt=""
                  />{" "}
                  Test Drive
                </a>
                <a href="#" className="primary-btn more-btn">
                  Learn More
                </a>
              </div>
            </Grid>
            <Grid item lg={5}>
              {/* <div className="hero__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Car Rental
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Buy Car
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="hero__tab__form">
                      <h2>Find Your Dream Car</h2>
                      <form>
                        <div className="select-list">
                          <div className="select-list-item">
                            <p>Select Year</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Year</option>
                              <option value="">2020</option>
                              <option value="">2019</option>
                              <option value="">2018</option>
                              <option value="">2017</option>
                              <option value="">2016</option>
                              <option value="">2015</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Year"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Year
                                </li>
                                <li data-value="" className="option">
                                  2020
                                </li>
                                <li data-value="" className="option">
                                  2019
                                </li>
                                <li data-value="" className="option">
                                  2018
                                </li>
                                <li data-value="" className="option">
                                  2017
                                </li>
                                <li data-value="" className="option">
                                  2016
                                </li>
                                <li data-value="" className="option">
                                  2015
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Brand</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Brand</option>
                              <option value="">Acura</option>
                              <option value="">Audi</option>
                              <option value="">Bentley</option>
                              <option value="">BMW</option>
                              <option value="">Bugatti</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Brand"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Brand
                                </li>
                                <li data-value="" className="option">
                                  Acura
                                </li>
                                <li data-value="" className="option">
                                  Audi
                                </li>
                                <li data-value="" className="option">
                                  Bentley
                                </li>
                                <li data-value="" className="option">
                                  BMW
                                </li>
                                <li data-value="" className="option">
                                  Bugatti
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Model</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Model</option>
                              <option value="">Q3</option>
                              <option value="">A4 </option>
                              <option value="">AVENTADOR</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Model"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Model
                                </li>
                                <li data-value="" className="option">
                                  Q3
                                </li>
                                <li data-value="" className="option">
                                  A4{" "}
                                </li>
                                <li data-value="" className="option">
                                  AVENTADOR
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Mileage</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Mileage</option>
                              <option value="">27</option>
                              <option value="">25</option>
                              <option value="">15</option>
                              <option value="">10</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Mileage"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Mileage
                                </li>
                                <li data-value="" className="option">
                                  27
                                </li>
                                <li data-value="" className="option">
                                  25
                                </li>
                                <li data-value="" className="option">
                                  15
                                </li>
                                <li data-value="" className="option">
                                  10
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-price">
                          <p>Price Range:</p>
                          <div className="price-range-wrap">
                            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                              <div
                                className="ui-slider-range ui-corner-all ui-widget-header"
                                style={{ left: "19.98%", width: "60.015%" }}
                              />
                              <span
                                tabIndex={0}
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "19.98%" }}
                              />
                              <span
                                tabIndex={0}
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "79.995%" }}
                              />
                            </div>
                            <div className="range-slider">
                              <div className="price-input">
                                <input type="text" id="amount" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="site-btn">
                          Searching
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="hero__tab__form">
                      <h2>Buy Your Dream Car</h2>
                      <form>
                        <div className="select-list">
                          <div className="select-list-item">
                            <p>Select Year</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Year</option>
                              <option value="">2020</option>
                              <option value="">2019</option>
                              <option value="">2018</option>
                              <option value="">2017</option>
                              <option value="">2016</option>
                              <option value="">2015</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Year"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Year
                                </li>
                                <li data-value="" className="option">
                                  2020
                                </li>
                                <li data-value="" className="option">
                                  2019
                                </li>
                                <li data-value="" className="option">
                                  2018
                                </li>
                                <li data-value="" className="option">
                                  2017
                                </li>
                                <li data-value="" className="option">
                                  2016
                                </li>
                                <li data-value="" className="option">
                                  2015
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Brand</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Brand</option>
                              <option value="">Acura</option>
                              <option value="">Audi</option>
                              <option value="">Bentley</option>
                              &lt;<option value="">BMW</option>
                              <option value="">Bugatti</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Brand"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Brand
                                </li>
                                <li data-value="" className="option">
                                  Acura
                                </li>
                                <li data-value="" className="option">
                                  Audi
                                </li>
                                <li data-value="" className="option">
                                  Bentley
                                </li>
                                <li data-value="" className="option">
                                  BMW
                                </li>
                                <li data-value="" className="option">
                                  Bugatti
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Model</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Model</option>
                              <option value="">Q3</option>
                              <option value="">A4 </option>
                              <option value="">AVENTADOR</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Model"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Model
                                </li>
                                <li data-value="" className="option">
                                  Q3
                                </li>
                                <li data-value="" className="option">
                                  A4{" "}
                                </li>
                                <li data-value="" className="option">
                                  AVENTADOR
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="select-list-item">
                            <p>Select Mileage</p>
                            <select style={{ display: "none" }}>
                              <option data-display=" ">Select Mileage</option>
                              <option value="">27</option>
                              <option value="">25</option>
                              <option value="">15</option>
                              <option value="">10</option>
                            </select>
                            <div className="nice-select" tabIndex={0}>
                              <span className="current"> </span>
                              <ul className="list">
                                <li
                                  data-value="Select Mileage"
                                  data-display=" "
                                  className="option selected"
                                >
                                  Select Mileage
                                </li>
                                <li data-value="" className="option">
                                  27
                                </li>
                                <li data-value="" className="option">
                                  25
                                </li>
                                <li data-value="" className="option">
                                  15
                                </li>
                                <li data-value="" className="option">
                                  10
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="car-price">
                          <p>Price Range:</p>
                          <div className="price-range-wrap">
                            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                              <div
                                className="ui-slider-range ui-corner-all ui-widget-header"
                                style={{ left: "19.98%", width: "60.015%" }}
                              />
                              <span
                                tabIndex={0}
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "19.98%" }}
                              />
                              <span
                                tabIndex={0}
                                className="ui-slider-handle ui-corner-all ui-state-default"
                                style={{ left: "79.995%" }}
                              />
                            </div>
                            <div className="range-slider">
                              <div className="price-input">
                                <input type="text" id="amount" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="site-btn">
                          Searching
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </Grid>
          </Grid>
          
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
