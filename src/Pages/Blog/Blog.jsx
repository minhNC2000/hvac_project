import process from "process";
import React, { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import "./blog.scss";
import { Pagination } from "@mui/material";
import Sidebar from "./SidebarSection/sidebar";
import { useAPI } from "../../Services/Hooks";
import { Link } from "react-router-dom";
export const Blog = () => {
  const [newblogs, setNewblog] = useState([]);

  const API = useAPI("blog-item");
  useEffect(() => {
    API.get().then(({ data }) => setNewblog(data));
  }, []);

  return (
    <>
      <Breadcrumbs currentPath={"latest blogs"} />
      <section className="blog spad">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item container xs={12} sm={12} md={9} lg={9}>
              {newblogs.map((newblog, index) => (
                <Grid item xs={6} sm={6} md={6} lg={6} key={index}>
                  <div className="blog__item">
                    <Link
                      to={`/blog/blog-details/${newblog.id}`}
                      className="navigate"
                    />
                    <div className="blog__item__pic">
                      <img src={newblog.image} alt="" />
                      <ul>
                        <li>By {newblog.writer}</li>
                        <li>{newblog.date}</li>
                        {newblog.comment == 0 ? (
                          <li>Comment</li>
                        ) : (
                          <li>{newblog.comment} Comment</li>
                        )}
                      </ul>
                    </div>
                    <div className="blog__item__text">
                      <h5>
                        <a href="#">{newblog.title}</a>
                      </h5>
                      <p>{newblog.content}</p>
                    </div>
                  </div>
                </Grid>
              ))}

              <Pagination
                count={5}
                variant="outlined"
                color="secondary"
                shape="rounded"
              />
            </Grid>
            <Grid item sm={9} md={6} lg={3}>
              <Sidebar />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};
