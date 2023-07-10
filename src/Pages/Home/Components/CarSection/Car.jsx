import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";

import toCurrency from "../../../../Services/Utilities/toCurrency";
import "./car.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAPI } from "../../../../Services/Hooks";
import { Link } from "react-router-dom";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";

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
          <div>{children}</div>
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
const Car = () => {
  const [researcheds, setResearched] = useState([]);
  const [sales, setSale] = useState([]);
  const [value, setValue] = React.useState(0);

  const getReserched = useAPI("cars");
  const getSale = useAPI("cars?status=sale");
  useEffect(() => {
    getReserched.get().then(({ data }) => setResearched(data));
    getSale.get().then(({ data }) => setSale(data));
  }, []);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="car spad ">
      <Container maxWidth="lg">
        <Grid container spacing={1} className="section-title">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <span>Our Car</span>
            <h2>Best Vehicle Offers</h2>
            <Box sx={{ width: "100%" }}>
              <Box>
                <Tabs
                  centered
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  indicatorColor="secondary"
                  textColor="primary"
                >
                  <Tab label="Most Researched" {...a11yProps(0)} />
                  <Tab label="Latest on sale" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="car-filter">
                  <Grid container spacing={1}>
                    {researcheds.map((researched) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={researched.id}
                      >
                        <div className="car__item">
                          <Carousel
                            showThumbs={false}
                            swipeable={true}
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                          >
                            {researched.image.map((img, index) => (
                              <img
                                src={img}
                                alt={`slide${index}`}
                                key={index}
                              ></img>
                            ))}
                          </Carousel>
                        </div>
                        <div className="car__item__text">
                          <div className="car__item__text__inner">
                            <div className="label-date">{researched.year}</div>
                            <h5>
                              <Link to={`/cars/car-detail/${researched.id}`}>
                                {researched.name}
                              </Link>
                            </h5>
                            <ul>
                              <li>
                                <span>{researched.speed}</span> mi
                              </li>
                              <li>{researched.category}</li>
                              <li>
                                <span>{researched.HorsePower}</span> hp
                              </li>
                            </ul>
                          </div>
                          <div className="car__item__price">
                            {researched.status === "rent" ? (
                              <span className="car-option">
                                For {researched.status}
                              </span>
                            ) : (
                              <span className="car-option sale">
                                For {researched.status}
                              </span>
                            )}
                            <h6>
                              {researched.status === "rent" ? (
                                <>
                                  {toCurrency(researched.price)}
                                  <span>/Month</span>
                                </>
                              ) : (
                                <>{toCurrency(researched.price)}</>
                              )}
                            </h6>
                          </div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="car-filter">
                  <Grid container spacing={1}>
                    {sales.map((sale) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={sale.id}>
                        <div className="car__item">
                          <Carousel
                            showThumbs={false}
                            swipeable={true}
                            showArrows={false}
                            showIndicators={false}
                            showStatus={false}
                          >
                            {sale.image.map((img, index) => (
                              <img
                                src={img}
                                alt={`slide${index}`}
                                key={index}
                              ></img>
                            ))}
                          </Carousel>
                        </div>
                        <div className="car__item__text">
                          <Link
                            to={`/cars/car-detail/${sale.id}`}
                            className="navigate"
                          />
                          <div className="car__item__text__inner">
                            <div className="label-date">{sale.year}</div>
                            <h5>
                              <Link to="/">{sale.name}</Link>
                            </h5>
                            <ul>
                              <li>
                                <span>{sale.speed}</span> mi
                              </li>
                              <li>{sale.category}</li>
                              <li>
                                <span>{sale.HorsePower}</span> hp
                              </li>
                            </ul>
                          </div>
                          <div className="car__item__price">
                            {sale.status === "rent" ? (
                              <span className="car-option">
                                For {sale.status}
                              </span>
                            ) : (
                              <span className="car-option sale">
                                For {sale.status}
                              </span>
                            )}
                            <h6>
                              {sale.status === "rent" ? (
                                <>
                                  {toCurrency(sale.price)} <span>/Month</span>
                                </>
                              ) : (
                                <>{toCurrency(sale.price)}</>
                              )}
                            </h6>
                          </div>
                        </div>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </TabPanel>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Car;
