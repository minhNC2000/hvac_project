import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./hero.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Hero = () => {
  const [value, setValue] = useState(0);
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSelectYear = (e) => {
    setYear(e.target.value);
  };
  return (
    <>
      <div className="hero spad set-bg">
        <Container className="lg">
          <div className="row">
            <Grid container spacing={2}>
              <Grid lg={7}>
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
              <Grid lg={5}>
                <div className="hero__tab">
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        className="nav nav-link"
                      >
                        <Tab
                          label="Car Rental"
                          className="nav-item"
                          {...a11yProps(0)}
                        />
                        <Tab
                          label="Buy Car"
                          className="nav-item"
                          {...a11yProps(1)}
                        />
                      </Tabs>
                    </Box>
                    <TabPanel
                      value={value}
                      index={0}
                      className="tab-content"
                    
                    >
                      <div className="hero__tab__form">
                        <h2>Find Your Dream Car</h2>
                        <form className="select-list">
                          <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            className="select-list-item"
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Year
                            </InputLabel>
                            <Select
                              value={year}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Year"
                            >
                              <MenuItem value={2020}>2020</MenuItem>
                              <MenuItem value={2019}>2019</MenuItem>
                              <MenuItem value={2018}>2018</MenuItem>
                              <MenuItem value={2017}>2017</MenuItem>
                              <MenuItem value={2016}>2016</MenuItem>
                              <MenuItem value={2015}>2015</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Brand
                            </InputLabel>
                            <Select
                              value={brand}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="brand"
                            >
                              <MenuItem value="Acura">Acura</MenuItem>
                              <MenuItem value="Audi">Audi</MenuItem>
                              <MenuItem value="Bentley">Bentley</MenuItem>
                              <MenuItem value="BMW">BMW</MenuItem>
                              <MenuItem value="Bugatti">Bugatti</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Model
                            </InputLabel>
                            <Select
                              value={model}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="model"
                            >
                              <MenuItem value="Q3">Q3</MenuItem>
                              <MenuItem value="A4">A4</MenuItem>
                              <MenuItem value="Aventdor">Aventdor</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Mileage
                            </InputLabel>
                            <Select
                              value={mileage}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="model"
                            >
                              <MenuItem value={27}>27</MenuItem>
                              <MenuItem value={25}>25</MenuItem>
                              <MenuItem value={15}>15</MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                            </Select>
                          </FormControl>
                          <button type="submit" class="site-btn">
                            Searching
                          </button>
                        </form>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} className="tab-content">
                      <div className="hero__tab__form">
                        <h2>Buy Your Dream Car</h2>
                        <form className="select-list">
                          <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            className="select-list-item"
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Year
                            </InputLabel>
                            <Select
                              value={year}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="Year"
                            >
                              <MenuItem value={2020}>2020</MenuItem>
                              <MenuItem value={2019}>2019</MenuItem>
                              <MenuItem value={2018}>2018</MenuItem>
                              <MenuItem value={2017}>2017</MenuItem>
                              <MenuItem value={2016}>2016</MenuItem>
                              <MenuItem value={2015}>2015</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Brand
                            </InputLabel>
                            <Select
                              value={brand}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="brand"
                            >
                              <MenuItem value="Acura">Acura</MenuItem>
                              <MenuItem value="Audi">Audi</MenuItem>
                              <MenuItem value="Bentley">Bentley</MenuItem>
                              <MenuItem value="BMW">BMW</MenuItem>
                              <MenuItem value="Bugatti">Bugatti</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Model
                            </InputLabel>
                            <Select
                              value={model}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="model"
                            >
                              <MenuItem value="Q3">Q3</MenuItem>
                              <MenuItem value="A4">A4</MenuItem>
                              <MenuItem value="Aventdor">Aventdor</MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            className="select-list-item"
                            sx={{ m: 1, minWidth: 120 }}
                          >
                            <InputLabel id="demo-simple-select-helper-label">
                              Mileage
                            </InputLabel>
                            <Select
                              value={mileage}
                              onChange={handleSelectYear}
                              displayEmpty
                              labelId="demo-simple-select-helper-label"
                              id="demo-simple-select-helper"
                              label="model"
                            >
                              <MenuItem value={27}>27</MenuItem>
                              <MenuItem value={25}>25</MenuItem>
                              <MenuItem value={15}>15</MenuItem>
                              <MenuItem value={10}>10</MenuItem>
                            </Select>
                          </FormControl>
                          <button type="submit" class="site-btn">
                            Searching
                          </button>
                        </form>
                      </div>
                    </TabPanel>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
