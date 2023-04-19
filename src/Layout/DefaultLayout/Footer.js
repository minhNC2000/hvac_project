import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faSkype,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import "../../Assets/Styles/_footer.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="lg">
        <div className="footer__contact">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={6} md={6}>
                <div className="footer__contact__title">
                  <h2>Contact Us Now!</h2>
                </div>
              </Grid>
              <Grid item lg={6} md={6}>
                <div className="footer__contact__option">
                  <div className="option__item__phone">
                    <FontAwesomeIcon
                      icon={faPhone}
                      style={{ color: "#ffffff" }}
                    />
                    (+12) 345 678 910
                  </div>
                  <div className="option__item__email">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#db2d2e" }}
                    />
                    Colorlib@gmail.com
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="row">
          <Grid container spacing={1}>
            <Grid item lg={4} md={4}>
              <div className="footer__about">
                <div className="footer__logo">
                  <a href="#">
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/footer-logo.png"
                      alt="Logo"
                    />
                  </a>
                </div>
                <p>
                  Any questions? Let us know in store at 625 Gloria Union,
                  California, United Stated or call us on (+1) 96 123 8888
                </p>
                <div className="footer__social">
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      style={{ color: "#fff", backgroundColor: "#324975 " }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ backgroundColor: "#2C85AE" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      style={{ backgroundColor: "#DC4438" }}
                    />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon
                      icon={faSkype}
                      style={{ backgroundColor: "#3EAFF0" }}
                    />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={3}></Grid>
            <Grid item lg={2} md={3}></Grid>
            <Grid item lg={3} md={6}></Grid>
          </Grid>
        </div>
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
