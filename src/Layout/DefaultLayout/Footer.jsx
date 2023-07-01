import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faSkype,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "../../Assets/Styles/_footer.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faPhone,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <div className="footer__contact">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="footer__contact__title">
                <h2>Contact Us Now!</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className="footer__contact__option">
                <a className="option__item__phone" href="tel:(+12) 345 678 910">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#ffffff" }}
                  />
                  (+12) 345 678 910
                </a>
                <a
                  className="option__item__email"
                  href="mailto:Colorlib@gmail.com"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#db2d2e" }}
                  />
                  Colorlib@gmail.com
                </a>
              </div>
            </Grid>
          </Grid>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="footer__about">
              <div className="footer__logo">
                <Link to="/">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/footer-logo.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <p>
                Any questions? Let us know in store at 625 Gloria Union,
                California, United Stated or call us on (+1) 96 123 8888
              </p>
              <div className="footer__social">
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{ color: "#fff", backgroundColor: "#324975 " }}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ backgroundColor: "#2C85AE" }}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{ backgroundColor: "#DC4438" }}
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    icon={faSkype}
                    style={{ backgroundColor: "#3EAFF0" }}
                  />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <div className="footer__widget">
              <h3>Infomations</h3>
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Purchase
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <FontAwesomeIcon icon={faAngleRight} />
                    Payment
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Return
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={2}>
            <div className="footer__widget">
              <h3>Infomations</h3>
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Hatchback
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Sedan
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    SUV
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Crossover
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={2}>
            <div className="footer__brand">
              <h3>Top Brand</h3>
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Abarth
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Acura
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Alfa Romeo
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Audi
                  </Link>
                </li>
              </ul>
              <ul style={{ paddingLeft: "10px" }}>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    BMW
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Chevrolet
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Ferrari
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon icon={faAngleRight} />
                    Honda
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        <div className="footer__copyright__text">
          <p>
            Copyright ©2023 All rights reserved | This template is made with
            <FontAwesomeIcon icon={faHeart} style={{ color: "#f80d0d" }} />
            by
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
