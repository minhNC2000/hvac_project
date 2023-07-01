import React, { useEffect } from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useAPI } from "../../../Services/Hooks";
const Sidebar = ({ clearSearchData, callSearch }) => {
  const [select, setSelect] = useState({
    brand: "",
    color: "",
    milage: "",
  });
  const [search, setSearch] = useState([]);
  const [value, setValue] = useState("");

  const handleChangeBrand = (e) => {
    setSelect({ ...select, brand: e.target.value });
  };
  const handleChangeColor = (e) => {
    setSelect({ ...select, color: e.target.value });
  };
  const handleChangeMilage = (e) => {
    setSelect({ ...select, milage: e.target.value });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    if (e.target.value == "") {
      clearSearchData.apply();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return callSearch(value);
    // getSearch.get().then(({ data }) => console.log(data));
  };
  return (
    <div className="car__sidebar">
      <div className="car__search">
        <h5>Car Search</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
      <div className="car__filter">
        <h5>Car Filter</h5>
        <form className="select-list">
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
              <MenuItem value="Acura">Acura</MenuItem>
              <MenuItem value="Audi">Audi</MenuItem>
              <MenuItem value="Bentley">Bentley</MenuItem>
              <MenuItem value="BWM">BWM</MenuItem>
              <MenuItem value="Buggati">Buggati</MenuItem>
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
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Yellow">Yellow</MenuItem>
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
              <MenuItem value={27}>27</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
