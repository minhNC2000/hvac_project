import React from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";

import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./info.scss";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

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

const Info = ({ data }) => {
  const [value, setValue] = React.useState(0);

  const images = data.image;

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  if (images === undefined) {
    return <h1>Chưa có dữ liệu</h1>;
  } else {
    return (
      <>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <div className="car-carousel">
            <Carousel
              showArrows={false}
              showStatus={false}
              showIndicators={false}
            >
              {images.map((image, index) => (
                <img src={image} alt={`slide${index}`} key={index}></img>
              ))}
            </Carousel>
            <div className="car__details__tab">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    className="nav-tabs"
                    indicatorColor="secondary"
                  >
                    <Tab
                      label="Vehicle Overview"
                      className="nav-item nav-link"
                      {...a11yProps(0)}
                    />
                    <Tab
                      label="Technical"
                      className="nav-item nav-link"
                      {...a11yProps(1)}
                    />
                    <Tab
                      label="Features & Options"
                      className="nav-item nav-link"
                      {...a11yProps(2)}
                    />
                    <Tab
                      label="Vehicle Location"
                      className="nav-item nav-link"
                      {...a11yProps(3)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="car__details__tab__info">
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="car__details__tab__feature">
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Interior Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Auxiliary
                              heating
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Bluetooth
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> CD player
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Central
                              locking
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Safety Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Head-up
                              display
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Alloy
                              wheels
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Electric
                              side mirror
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              package
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              suspension
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Parking
                              sensors
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="car__details__tab__info">
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information 2</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="car__details__tab__feature">
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Interior Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Auxiliary
                              heating
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Bluetooth
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> CD player
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Central
                              locking
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Safety Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Head-up
                              display
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Alloy
                              wheels
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Electric
                              side mirror
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              package
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              suspension
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Parking
                              sensors
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="car__details__tab__info">
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information 3</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="car__details__tab__feature">
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Interior Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Auxiliary
                              heating
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Bluetooth
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> CD player
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Central
                              locking
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Safety Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Head-up
                              display
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Alloy
                              wheels
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Electric
                              side mirror
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              package
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              suspension
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Parking
                              sensors
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <div className="car__details__tab__info">
                    <Grid container spacing={3}>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information 4</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        lg={6}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__info__item">
                          <h5>General Information</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              lacus urna, feugiat non consectetur nec
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Aliquam sem
                              neque, efficitur atero lectus vitae.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Pellentesque
                              erat libero, eleifend sit amet felis ido.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Maecenas eget
                              consectetur quam. Vestibulum ligula.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCheck} /> Praesent lorem
                              sapien, vestibulum eget aliquet et.
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  <div className="car__details__tab__feature">
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Interior Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Auxiliary
                              heating
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Bluetooth
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> CD player
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Central
                              locking
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Safety Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Head-up
                              display
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Alloy
                              wheels
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Electric
                              side mirror
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              package
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Sports
                              suspension
                            </li>
                          </ul>
                        </div>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        sm={6}
                        md={6}
                        lg={3}
                        className="tab__info-wrapper"
                      >
                        <div className="car__details__tab__feature__item">
                          <h5>Extra Design</h5>
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> MP3
                              interface
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} />{" "}
                              Navigation system
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Panoramic
                              roof
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCircleCheck} /> Parking
                              sensors
                            </li>
                          </ul>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </TabPanel>
              </Box>
            </div>
          </div>
        </Grid>
      </>
    );
  }
};

export default Info;
