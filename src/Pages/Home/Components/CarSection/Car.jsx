import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { Carousel } from "react-responsive-carousel";
import { boolean, number, text } from "@storybook/addon-knobs";
import toCurrency from "../../../../Services/Utilities/toCurrency";
import "./car.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAPI } from "../../../../Services/Hooks";
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
  const [records, setRecords] = useState([]);

  const API = useAPI("cars");
  useEffect(() => {
    API.get().then(({ data }) => setRecords(data));
  }, []);

  return (
    <section className="car spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid lg={12}>
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
              {records.map((record) => (
                <Grid lg={3} md={4} sm={6} key={record.id}>
                  <div className="car__item">
                    <Carousel {...getConfigurableProps()}>
                      {record.image.map((img, index) => (
                        <img src={img} alt={`slide${index}`} key={index}></img>
                      ))}
                    </Carousel>
                  </div>
                  <div className="car__item__text">
                    <div className="car__item__text__inner">
                      <div className="label-date">{record.year}</div>
                      <h5>
                        <a href="#">{record.name}</a>
                      </h5>
                      <ul>
                        <li>
                          <span>{record.speed}</span> mi
                        </li>
                        <li>{record.category}</li>
                        <li>
                          <span>{record.HorsePower}</span> hp
                        </li>
                      </ul>
                    </div>
                    <div className="car__item__price">
                      {record.status == "rent" ? (
                        <span className="car-option">For {record.status}</span>
                      ) : (
                        <span className="car-option sale">
                          For {record.status}
                        </span>
                      )}
                      <h6>
                        {record.status == "rent" ? (
                          <>
                            {toCurrency(record.price)} <span>/Month</span>
                          </>
                        ) : (
                          <>{toCurrency(record.price)}</>
                        )}
                      </h6>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Car;