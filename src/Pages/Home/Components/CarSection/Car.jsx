import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import { Carousel } from "react-responsive-carousel";
import { boolean, number, text } from "@storybook/addon-knobs";
import "./car.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";

const getConfigurableProps = () => ({
  showArrows: boolean("showArrows", false, tooglesGroupId),
  showStatus: boolean("showStatus", false, tooglesGroupId),
  showIndicators: boolean("showIndicators", true, tooglesGroupId),
  infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
  showThumbs: boolean("showThumbs", false, tooglesGroupId),
  useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
  autoPlay: boolean("autoPlay", true, tooglesGroupId),
  stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
  swipeable: boolean("swipeable", true, tooglesGroupId),
  dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
  emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
  autoFocus: boolean("autoFocus", false, tooglesGroupId),
  thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
  selectedItem: number("selectedItem", 0, {}, valuesGroupId),
  interval: number("interval", 3000, {}, valuesGroupId),
  transitionTime: number("transitionTime", 500, {}, valuesGroupId),
  swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
  ariaLabel: text("ariaLabel", undefined),
});

const Car = () => {
  return (
    <section className="car spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <div className="section-title">
              <span>Our Car</span>
              <h2>Best Vehicle Offers</h2>
            </div>
            <ul className="filter__controls">
              <li className="active mixitup-control-active" data-filter="*">
                Most Researched
              </li>
              <li data-filter=".sale" className="">
                Latest on sale
              </li>
            </ul>
          </Grid>
          <div className="row car-filter">
            <Grid container spacing={1}>
              <Grid item lg={3} md={4} sm={6}>
                <div className="car__item">
                  <Carousel {...getConfigurableProps()}>
                    <div className="slide1">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide2">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide3">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide4">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="car__item__text">
                  <div className="car__item__text__inner">
                    <div className="label-date">2016</div>
                    <h5>
                      <a href="#">Porsche cayenne turbo s</a>
                    </h5>
                    <ul>
                      <li>
                        <span>35,000</span> mi
                      </li>
                      <li>Auto</li>
                      <li>
                        <span>700</span> hp
                      </li>
                    </ul>
                  </div>
                  <div className="car__item__price">
                    <span className="car-option">For Rent</span>
                    <h6>
                      $218<span>/Month</span>
                    </h6>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={4} sm={6}>
                <div className="car__item">
                  <Carousel {...getConfigurableProps()}>
                    <div className="slide1">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide2">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide3">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide4">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="car__item__text">
                  <div className="car__item__text__inner">
                    <div className="label-date">2020</div>
                    <h5>
                      <a href="#">Toyota camry asv50l-jeteku</a>
                    </h5>
                    <ul>
                      <li>
                        <span>35,000</span> mi
                      </li>
                      <li>Auto</li>
                      <li>
                        <span>700</span> hp
                      </li>
                    </ul>
                  </div>
                  <div className="car__item__price">
                    <span className="car-option">For Sale</span>
                    <h6>$73,900</h6>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={4} sm={6}>
                <div className="car__item">
                  <Carousel {...getConfigurableProps()}>
                    <div className="slide1">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide2">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide3">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide4">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="car__item__text">
                  <div className="car__item__text__inner">
                    <div className="label-date">2017</div>
                    <h5>
                      <a href="#">Bmw s1000rr 2019 m</a>
                    </h5>
                    <ul>
                      <li>
                        <span>35,000</span> mi
                      </li>
                      <li>Auto</li>
                      <li>
                        <span>700</span> hp
                      </li>
                    </ul>
                  </div>
                  <div className="car__item__price">
                    <span className="car-option">For Rent</span>
                    <h6>
                      $299<span>/Month</span>
                    </h6>
                  </div>
                </div>
              </Grid>
              <Grid item lg={3} md={4} sm={6}>
                <div className="car__item">
                  <Carousel {...getConfigurableProps()}>
                    <div className="slide1">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide2">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide3">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="slide4">
                      <img
                        src="https://preview.colorlib.com/theme/hvac/img/cars/car-1.jpg"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
                <div className="car__item__text">
                  <div className="car__item__text__inner">
                    <div className="label-date">2019</div>
                    <h5>
                      <a href="#">Lamborghini huracan evo</a>
                    </h5>
                    <ul>
                      <li>
                        <span>35,000</span> mi
                      </li>
                      <li>Auto</li>
                      <li>
                        <span>700</span> hp
                      </li>
                    </ul>
                  </div>
                  <div className="car__item__price">
                    <span className="car-option">For Rent</span>
                    <h6>
                      $120,000
                    </h6>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Car;
