import {
  faBars,
  faCartPlus,
  faMagnifyingGlass,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Collapse,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import "./mobile.scss";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openmenu);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="row">
          <Grid container spacing={1}>
            <Grid item xs={6} md={6} lg={6}>
              <div className="header__logo">
                <a href="/#">
                  <img
                    src="https://preview.colorlib.com/theme/hvac/img/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <div className="bar">
                <Button onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faBars} />
                </Button>
                <SwipeableDrawer
                  anchor="left"
                  open={open}
                  onClose={toggleDrawer}
                  onOpen={toggleDrawer}
                >
                  <div className="canvas-menu-wrapper">
                    <div className="canvas__widget">
                      <a href="/#">
                        <FontAwesomeIcon icon={faCartPlus} />
                      </a>
                      <a href="/#" className="search-btn">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a>
                      <a href="/#" className="primary-btn">
                        Add Car
                      </a>
                    </div>
                    <div className="canvas__logo">
                      <a href="/">
                        <img
                          src="	https://preview.colorlib.com/theme/hvac/img/logo.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="mobile-menu-wrap">
                      <div className="slicknav_menu">
                        <ListItemButton onClick={handleOpenMenu}>
                          <ListItemText primary="Menu" />
                          {openmenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openmenu} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText>
                                <ul>
                                  <li>
                                    <a href="/">Home</a>
                                  </li>
                                  <li>
                                    <a href="/cars">Cars</a>
                                  </li>
                                  <li>
                                    <a href="/Blog">Blog</a>
                                  </li>
                                  <li>
                                    <a href="/gioi-thieu">About</a>
                                  </li>
                                  <li>
                                    <a href="/lien-he">Contact</a>
                                  </li>
                                </ul>
                              </ListItemText>
                            </ListItemButton>
                          </List>
                        </Collapse>
                      </div>
                    </div>
                    <div className="canvas__widget__add">
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faClock} /> Week day: 08:00 am
                          to 18:00 pm
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faEnvelope} />
                          Info.colorlib@gmail.com
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faPhone} />
                          (+12) 345 678 910
                        </li>
                      </ul>
                    </div>
                    <div className="canvas__social">
                      <a href="/#">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="/#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="/#">
                        <FontAwesomeIcon icon={faGoogle} />
                      </a>
                      <a href="/#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </div>
                  </div>
                </SwipeableDrawer>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </header>
  );
};

export default HeaderMobile;
