import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./services.scss";
const Services = () => {
  const [services, setServices] = useState([]);
  const [serviceslist, setServiceslist] = useState([]);
  const API = "http://localhost:3004/";
  const API_services = API + "services";
  const API_servicesList = API + "services-list";
  useEffect(() => {
    fetch(API_services)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(API_servicesList)
      .then((response) => response.json())
      .then((data) => setServiceslist(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="services spad">
      <Container className="lg">
        <Grid item xs={12} sm={12} md={12} lg={12} className="section-title">
          <span>Our Services</span>
          {services.map((service, index) => (
            <div key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </Grid>

        <Grid container spacing={2}>
          {serviceslist.map((servicelist, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <div className="services__item">
                <img src={servicelist.image} alt="" />
                <h5>{servicelist.title}</h5>
                <p>{servicelist.text}</p>
                <a href={servicelist.link}>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Services;
