import React from "react";
import "./ListCar.scss";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import toCurrency from "../../../Services/Utilities/toCurrency";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const ListCar = ({ products, changeOption }) => {
  const [select, setSelect] = useState({
    quantity: 9,
    order: "asc",
  });
  const [datas, setData] = useState([]);
  useEffect(() => {
    changeOption(1, select.quantity, select.order);
    setData(products);
  }, [products, select]);

  const handleChangeQuantity = (e) => {
    setSelect({ ...select, quantity: e.target.value });
  };
  const handleChangeOrder = (e) => {
    setSelect({ ...select, order: e.target.value });
  };
  return (
    <>
      <div className="car__product__option">
        <Grid container spacing={1}>
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <div className="car__product__option__item">
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
                  <MenuItem value={2}>2 Car</MenuItem>
                  <MenuItem value={9}>9 Car</MenuItem>
                  <MenuItem value={20}>20 Car</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={6} sm={12} md={6} lg={6}>
            <div className="car__product__option__item order ">
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
                  <MenuItem value="desc">Price: Lowest First</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="car-product">
        <Grid container spacing={3}>
          {datas.map((data) => (
            <Grid item sm={4} md={4} lg={4} key={data.id} className="car__item">
              <div className="car__item_slider">
                <Carousel
                  showThumbs={false}
                  swipeable={true}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
                >
                  {data.image.map((img, index) => (
                    <img src={img} alt={`slide${index}`} key={index}></img>
                  ))}
                </Carousel>
              </div>
              <div className="car__item__text">
                <div className="car__item__text__inner">
                  <div className="label-date">{data.year}</div>
                  <h5>
                    <Link
                      to={`/cars/car-detail/${data.id}`}
                      className="navigate"
                    >
                      {data.name}
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span>{data.speed}</span> mi
                    </li>
                    <li>{data.category}</li>
                    <li>
                      <span>{data.HorsePower}</span> hp
                    </li>
                  </ul>
                </div>
                <div className="car__item__price">
                  {data.status == "rent" ? (
                    <span className="car-option">For {data.status}</span>
                  ) : (
                    <span className="car-option sale">For {data.status}</span>
                  )}
                  <h6>
                    {data.status == "rent" ? (
                      <>
                        {toCurrency(data.price)} <span>/Month</span>
                      </>
                    ) : (
                      <>{toCurrency(data.price)}</>
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
