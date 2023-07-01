import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import Sidebar from "./Sidebar/Sidebar";
import ListCar from "./ListCar/ListCar";
import { Container, Grid } from "@mui/material";
import { useAPI } from "../../Services/Hooks";
import { isEmpty } from "lodash";

export const Cars = () => {
  const API = useAPI("cars");
  // const getSearch = useAPI(`cars?q=${value}`);
  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [url, setUrl] = useState({
    page: 1,
    limit: 9,
    sort: "price",
    order: "asc",
  });
  const clearSearchData = () => {
    setSearchedData([]);
  };
  const callSearchAPI = (keyword) => {
    setUrl({ ...url, search: keyword });
    API.get().then(({ data }) => {
      console.log(`Search Data`);
      setSearchedData(data);
    });
  };
  const handleChangeOption = (page, limit, order) => {
    setUrl({ ...url, page, limit, order });
  
    console.log(url);
  };
  useEffect(() => {
    API.get(url).then(({ data }) => {
      setData(data);
      console.log("Hi");
    });
  }, []);
  return (
    <>
      <Breadcrumbs currentPath={"car listing"} />
      <section className="car spad">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Sidebar
                clearSearchData={clearSearchData}
                callSearch={callSearchAPI}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <ListCar
                products={isEmpty(searchedData) ? data : searchedData}
                changeOption={handleChangeOption}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
