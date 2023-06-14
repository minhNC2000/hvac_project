import React from "react";

import { Breadcrumbs, Container, Typography, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./breadcrumb.scss";
const breadcrumbs = ({ currentPath }) => {
  return (
    <div className="breadcumb-option">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <div className="breadcrumb__text">
              <h1>{currentPath}</h1>
              <Breadcrumbs
                separator=">"
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
                  {currentPath}
                </Typography>
              </Breadcrumbs>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default breadcrumbs;
