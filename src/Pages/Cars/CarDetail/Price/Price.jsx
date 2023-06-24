import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./price.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMoneyBill1,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { toCurrency } from "../../../../Services/Utilities";

const Price = ({ data }) => {
  const dprice = data.msrp - data.discount;
  return (
    <Grid
      item
      xs={10}
      sm={10}
      md={12}
      lg={3}
      style={{ display: "block", margin: "0 auto" }}
    >
      <div className="car__details__sidebar">
        <div className="car__details__sidebar__model">
          <ul>
            <li>
              Stock <span>K99D10459934</span>
            </li>
            <li>
              Vin <span>3VWKM245686</span>
            </li>
          </ul>
          <Link to="/" className="primary-btn">
            Get Today Is Price
          </Link>
          <p>Pricing in {data.pricein}</p>
        </div>
        <div className="car__details__sidebar__payment">
          <ul>
            <li>
              MSRP <span>{toCurrency(data.msrp)}</span>
            </li>
            <li>
              Dealer Discounts <span>{toCurrency(data.discount)}</span>
            </li>
            <li>
              Price <span>{toCurrency(dprice)}</span>
            </li>
          </ul>

          <Link to="/" className="primary-btn">
            <FontAwesomeIcon icon={faCreditCard} />
            Express Purchase
          </Link>

          <Link to="/" className="primary-btn sidebar-btn">
            <FontAwesomeIcon icon={faSliders} />
            Build Payment
          </Link>

          <Link to="/" className="primary-btn sidebar-btn">
            <FontAwesomeIcon icon={faMoneyBill1} />
            Value Trade
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default Price;
