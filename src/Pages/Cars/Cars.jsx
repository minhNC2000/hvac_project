import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import "./cars.scss";
import Sidebar from "./Sidebar/Sidebar";
import ListCar from "./ListCar/ListCar";
export const Cars = () => {
  return (
    <>
      <Breadcrumbs currentPath={"car listing"} />
      <section className="car spad">
        <Container className="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <ListCar />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
