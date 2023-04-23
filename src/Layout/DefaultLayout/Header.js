import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import "../../Assets/Styles/_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faCartPlus,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={7}>
                <ul className="header__top__widget">
                  <li>
                    <FontAwesomeIcon
                      icon={faClock}
                      size="lg"
                      style={{ margin: "5px", color: "#8d8d8d" }}
                    />
                    <span>Week day: 08:00 am to 18:00 pm</span>
                  </li>
                  <li className="tag-li_header">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="lg"
                      style={{ margin: "5px", color: "#8d8d8d" }}
                    />
                    <span> Info.colorlib@gmail.com</span>
                  </li>
                </ul>
              </Grid>
              <Grid item lg={5}>
                <div className="header__top__right">
                  <div className="header__top__phone">
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="sm"
                      style={{ marginRight: "5px", color: "#8d8d8d" }}
                    />
                    <span>(+12) 345 678 910</span>
                  </div>

                  <div className="header__top__social">
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg">
        <div className="row">
          <Grid container spacing={1}>
            <Grid item lg={2}>
              <div className="header__logo">
                <a href="#">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </Grid>
            <Grid item lg={10}>
              <div className="header__nav">
                <div className="header__menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/cars">Cars</a>
                    </li>
                    <li>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="/pages">Pages</a>
                    </li>
                    <li>
                      <a href="/gioi-thieu">About</a>
                    </li>
                    <li>
                      <a href="/lien-he">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="header__nav_widget">
                  <div className="header__nav__widget__btn">
                    <a href="#">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>
                    <Button
                      color="error"
                      style={{ textTransform: "capitalize" }}
                      variant="contained"
                    >
                      Add Car
                    </Button>
                  </div>
                </div>
              </div>
              <div className="canvas__open">
          <FontAwesomeIcon icon={faBars} />
        </div>
            </Grid>
          </Grid>
        </div>
        
      </Container>
    </header>
  );
};

export default Header;
