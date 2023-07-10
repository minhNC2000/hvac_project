import React, { useEffect, useState } from "react";
import "./cardetail.scss";
import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { useAPI } from "../../../Services/Hooks";
import Info from "./Info/Info";
import Price from "./Price/Price";
import Breadcrumbs from "../../../Components/Breadcrumbs/Breadcrumbs";
const CarDetail = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  const API = useAPI(`cars/${id}`);
  useEffect(() => {
    window.scrollTo(0, 0);
    API.get().then(({ data }) => setInfo(data));
  }, []);
  const { image, price, pricein, name, discount, stock, vin } = info;

  if (info == undefined) {
    return <div>Chưa có dữ liệu</div>;
  } else {
    return (
      <>
        <Breadcrumbs currentPath={`${name}`} />
        <div className="car-details spad" style={{ paddingBottom: "70px" }}>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Info data={{ image }} />
              <Price data={{ price, pricein, discount, stock, vin }} />
            </Grid>
          </Container>
        </div>
      </>
    );
  }
};

export default CarDetail;
