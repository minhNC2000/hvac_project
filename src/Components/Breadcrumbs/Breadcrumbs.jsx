import React from "react";

import { Breadcrumbs, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./breadcrumb.scss";
const breadcrumbs = ({ currentPath }) => {
  return (
    <div className="breadcumb-option">
      <Container maxWidth="lg">
        <Grid2 container spacing={1}>
          <Grid2 item lg={12}>
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
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default breadcrumbs;
