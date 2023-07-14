import React, { useEffect, useState } from "react";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import Sidebar from "./Sidebar/Sidebar";
import ListCar from "./ListCar/ListCar";
import { Container, Grid } from "@mui/material";
import { useAPI } from "../../Services/Hooks";
import { isEmpty } from "lodash";

export const Cars = () => {
  const API = useAPI("cars");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [url, setUrl] = useState({
    page: 1,
    limit: 9,
    sort: "price",
    order: "asc",
  });

  const clearSearchData = () => {
    setSearch([]);
  };
  const callSearchAPI = (keyword) => {
    const newUrl = { ...url, search: keyword };
    setUrl(newUrl);
    API.get(newUrl).then(({ data }) => {
      setSearch(data);
    });
  };
  const callFilterAPI = (keyword) => {
    const newUrl = { ...url, search: keyword };
    setUrl(newUrl);
    API.get(newUrl).then(({ data }) => {
      setSearch(data);
    });
  };

  const handleChangeOption = (limit, order) => {
    const newUrl = { ...url, limit, order };
    setUrl(newUrl);
  };
  useEffect(() => {
    API.get(url).then(({ data }) => {
      setData(data);
    
    });
  }, [url.limit, url.order]);

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
                callFilter={callFilterAPI}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={9}>
              <ListCar
                products={isEmpty(search) ? data : search}
                changeOption={handleChangeOption}
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
