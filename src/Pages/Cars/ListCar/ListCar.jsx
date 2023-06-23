import React from "react";
import "./ListCar.scss";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useAPI } from "../../../Services/Hooks";
import { useEffect } from "react";
import toCurrency from "../../../Services/Utilities/toCurrency";
import { Carousel } from "react-responsive-carousel";
import { boolean, number, text } from "@storybook/addon-knobs";
import { Link } from "react-router-dom";
const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";

const getConfigurableProps = () => ({
  showArrows: boolean("showArrows", false, tooglesGroupId),
  showStatus: boolean("showStatus", false, tooglesGroupId),
  showIndicators: boolean("showIndicators", false, tooglesGroupId),
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

const ListCar = () => {
  const [select, setSelect] = useState({
    quantity: "",
    order: "asc",
  });
  const [filters, setFilter] = useState([]);
  const API = useAPI("cars");
  useEffect(() => {
    API.get().then(({ data }) => setFilter(data));
  }, []);

  const handleChangeQuantity = (e) => {
    setSelect({ ...select, quantity: e.target.value });
  };
  const handleChangeOrder = (e) => {
    setSelect({ ...select, order: e.target.value });
  };
  return (
    <>
      <div className="car__filter__option">
        <Grid container spacing={2}>
          <Grid item md={6} lg={6}>
            <div className="car__filter__option__item">
              <h6>Show On Page</h6>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                className="select-list-item"
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Quantity
                </InputLabel>
                <Select
                  value={select.quantity}
                  onChange={handleChangeQuantity}
                  displayEmpty
                  className="select_option"
                  label="Quantity"
                >
                  <MenuItem value={9}>9 Car</MenuItem>
                  <MenuItem value={15}>15 Car</MenuItem>
                  <MenuItem value={20}>20 Car</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item md={6} lg={6}>
            <div className="car__filter__option__item car__filter__option__item--right">
              <h6>Sort By</h6>
              <FormControl
                sx={{ m: 1, minWidth: 120 }}
                className="select-list-item"
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Sort By
                </InputLabel>
                <Select
                  value={select.order}
                  onChange={handleChangeOrder}
                  displayEmpty
                  className="select_option"
                  label="Order"
                >
                  <MenuItem value="asc">Price: Highest First</MenuItem>
                  <MenuItem value="desc">Price: Lowhest First</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="car-filter">
        <Grid container spacing={3}>
          {filters.map((filter) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              key={filter.id}
              className="car__item"
            >
            <Link to={`/cars/car-detail/${filter.id}`} className="navigate" />
              <div className="car__item_slider">
                <Carousel {...getConfigurableProps()}>
                  {filter.image.map((img, index) => (
                    <img src={img} alt={`slide${index}`} key={index}></img>
                  ))}
                </Carousel>
              </div>
              <div className="car__item__text">
                <div className="car__item__text__inner">
                  <div className="label-date">{filter.year}</div>
                  <h5>
                    <a href="#">{filter.name}</a>
                  </h5>
                  <ul>
                    <li>
                      <span>{filter.speed}</span> mi
                    </li>
                    <li>{filter.category}</li>
                    <li>
                      <span>{filter.HorsePower}</span> hp
                    </li>
                  </ul>
                </div>
                <div className="car__item__price">
                  {filter.status == "rent" ? (
                    <span className="car-option">For {filter.status}</span>
                  ) : (
                    <span className="car-option sale">For {filter.status}</span>
                  )}
                  <h6>
                    {filter.status == "rent" ? (
                      <>
                        {toCurrency(filter.price)} <span>/Month</span>
                      </>
                    ) : (
                      <>{toCurrency(filter.price)}</>
                    )}
                  </h6>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ListCar;
