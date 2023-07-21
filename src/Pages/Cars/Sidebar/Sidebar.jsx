import React, { useReducer } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { useState } from "react";
import { toCurrency } from "../../../Services/Utilities";

import { BRANDS, COLORS, MILAGES } from "./constants";
import { debounce } from "lodash";
function valuetext(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const minDistance = 250000;

const Sidebar = ({ clearSearchData, callSearch, callFilter }) => {
  const selectReducer = (state, action) => {
    switch (action.type) {
      case "SET_BRAND":
        return { ...state, brand: action.payload };
      case "SET_COLOR":
        return { ...state, color: action.payload };
      case "SET_MILAGE":
        return { ...state, milage: action.payload };
      default:
        return state;
    }
  };

  const [select, dispatchSelect] = useReducer(selectReducer, {
    brand: "",
    color: "",
    milage: "",
  });

  const [value, setValue] = useState("");
  const [range, setRange] = useState([8000, 250000]);

  const handleChangeRange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
    }
  };

  const handleChangeBrand = (e) => {
    dispatchSelect({ type: "SET_BRAND", payload: e.target.value });
  };

  const handleChangeColor = (e) => {
    dispatchSelect({ type: "SET_COLOR", payload: e.target.value });
  };

  const handleChangeMilage = (e) => {
    dispatchSelect({ type: "SET_MILAGE", payload: e.target.value });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      clearSearchData.apply();
    } else {
      callSearch(e.target.value);
    }
  };
  const debounceOnchange = debounce(handleChange, 700, { maxWait: 1000 });

  const handleSearch = (e) => {
    e.preventDefault();

    return callSearch(value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    return callFilter(select);
  };

  const handleClearSelect = (e) => {
    dispatchSelect({ type: "SET_BRAND", payload: "" });
    dispatchSelect({ type: "SET_COLOR", payload: "" });
    dispatchSelect({ type: "SET_MILAGE", payload: "" });
  };

  return (
    <div className="car__sidebar">
      <div className="car__search">
        <h5>Car Search</h5>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            onChange={debounceOnchange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="car__filter">
        <h5>Car Filter</h5>
        <form className="select-list" onSubmit={handleSelect}>
          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            className="select-list-item"
          >
            <InputLabel id="demo-simple-select-helper-label">Brand</InputLabel>
            <Select
              value={select.brand}
              onChange={handleChangeBrand}
              displayEmpty
              className="select_option"
              label="Brand"
            >
              {BRANDS.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            className="select-list-item"
          >
            <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
            <Select
              value={select.color}
              onChange={handleChangeColor}
              displayEmpty
              className="select_option"
              label="Color"
            >
              {COLORS.map((color) => (
                <MenuItem key={color} value={color}>
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            sx={{ m: 1, minWidth: 120 }}
            className="select-list-item"
          >
            <InputLabel id="demo-simple-select-helper-label">Milage</InputLabel>
            <Select
              value={select.milage}
              onChange={handleChangeMilage}
              displayEmpty
              className="select_option"
              label="Milage"
            >
              {MILAGES.map((milage) => (
                <MenuItem key={milage} value={milage}>
                  {milage}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ width: 230 }}>
            <p>
              Price Range:
              <b>
                {toCurrency(range[0])} - {toCurrency(range[1])}
              </b>
            </p>
            <Slider
              value={range}
              onChange={handleChangeRange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              color="secondary"
              disableSwap
              min={0}
              max={1200000}
            />
          </Box>
          <button type="submit" className="site-btn">
            Searching
          </button>
          <button
            type="reset"
            className="site-btn clear-btn"
            onClick={handleClearSelect}
          >
            Clear Select
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
