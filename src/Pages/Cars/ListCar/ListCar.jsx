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
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(products);
    changeOption(1, select.quantity, select.order);
  
  }, [products,select]);
  console.log("listcar", products);
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
          {products.map((product) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              key={product.id}
              className="car__item"
            >
              <div className="car__item_slider">
                <Carousel
                  showThumbs={false}
                  swipeable={true}
                  showArrows={false}
                  showIndicators={false}
                  showStatus={false}
                >
                  {product.image.map((img, index) => (
                    <img src={img} alt={`slide${index}`} key={index}></img>
                  ))}
                </Carousel>
              </div>
              <div className="car__item__text">
                <div className="car__item__text__inner">
                  <div className="label-date">{product.year}</div>
                  <h5>
                    <Link
                      to={`/cars/car-detail/${product.id}`}
                      className="navigate"
                    >
                      {product.name}
                    </Link>
                  </h5>
                  <ul>
                    <li>
                      <span>{product.speed}</span> mi
                    </li>
                    <li>{product.category}</li>
                    <li>
                      <span>{product.HorsePower}</span> hp
                    </li>
                  </ul>
                </div>
                <div className="car__item__price">
                  {product.status == "rent" ? (
                    <span className="car-option">For {product.status}</span>
                  ) : (
                    <span className="car-option sale">
                      For {product.status}
                    </span>
                  )}
                  <h6>
                    {product.status == "rent" ? (
                      <>
                        {toCurrency(product.price)} <span>/Month</span>
                      </>
                    ) : (
                      <>{toCurrency(product.price)}</>
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
