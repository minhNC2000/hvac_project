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
    API.get().then(({ data }) => setInfo(data));
  }, []);
  const { image, price, name } = info;
  console.log(name);
  if (info == undefined) {
    return <div>Chưa có dữ liệu</div>;
  } else {
    return (
      <>
        <Breadcrumbs currentPath={`${name}`} />
        <Container className="lg">
          <Grid container spacing={1}>
            <Info data={{ image }} />
            <Price />
          </Grid>
        </Container>
      </>
    );
  }
};

export default CarDetail;
