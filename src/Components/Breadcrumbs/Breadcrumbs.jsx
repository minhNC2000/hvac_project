import React from "react";

import { Breadcrumbs, Container, Typography, Grid } from "@mui/material";
import { stringToArray } from "../../Services/Utilities";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import "./breadcrumb.scss";
const Breadcrumb = ({ currentPath }) => {
  const { pathname } = useLocation();
  const locateArr = stringToArray(pathname);
  return (
    <div className="breadcumb-option">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="breadcrumb__text">
              <h1>{currentPath}</h1>
              <Breadcrumbs
                separator=<FontAwesomeIcon icon={faArrowRight} />
                aria-label="breadcrumb"
                className="navigate"
              >
                <Link
                  key="breadcrumb-home"
                  to={"/"}
                  className="breadcumb__links"
                >
                  <FontAwesomeIcon icon={faHouse} /> <span>Home</span>
                </Link>
                <Typography
                  key="breadcrum-path"
                  color="text.primary"
                  className="breadcrumb__path"
                  sx={{
                    fontSize: "15px",
                    color: "#727171",
                    textTransform: "capitalize",
                  }}
                >
                  <Link to={`/${locateArr[0]}`}>
                    <span>{locateArr[0]}</span>
                  </Link>{" "}
                  <FontAwesomeIcon icon={faArrowRight} /> {currentPath}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Breadcrumb;
