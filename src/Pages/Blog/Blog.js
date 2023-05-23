import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./blog.scss";
import { Pagination } from "@mui/material";
import Sidebar from "./SidebarSection/sidebar";
export const Blog = () => {
  return (
    <>
      <div className="breadcumb-option">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={12}>
                <div className="breadcrumb__text">
                  <h1>Lastest Blogs</h1>
                  <div className="breadcumb__links">
                    <a href="/">
                      <FontAwesomeIcon icon={faHouse} />
                      Home
                    </a>
                    <span>Our Blogs</span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <section className="blog spad">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container spacing={1}>
              <Grid item lg={9}>
                <div className="row">
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-1.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Polly Williams</li>
                          <li>Dec 11, 2018</li>
                          <li>8 Comment</li>
                        </ul>
                      </div>

                      <div className="blog__item__text">
                        <h5>
                          <a href="/blog">Benjamin Franklin S Method Of</a>
                        </h5>
                        <p>
                          Great business ideas when utilized effectively can
                          save lots of money. This is not only easy for those
                          who work full-time as an advertiser...
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-2.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Evelyn Lane</li>
                          <li>Dec 17, 2018</li>
                          <li>Comment</li>
                        </ul>
                      </div>
                      <div className="blog__item__text">
                        <h5>
                          <a href="#">Where To Look For Cheap Brochure</a>
                        </h5>
                        <p>
                          Usually potential customers will visit home for
                          business dealing. Print good amount of fliers and give
                          it to anyone who is visiting home like family...
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-3.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Jessie Palmer</li>
                          <li>Dec 19, 2018</li>
                          <li>Comment</li>
                        </ul>
                      </div>
                      <div className="blog__item__text">
                        <h5>
                          <a href="#">Promotional Advertising Specialty</a>
                        </h5>
                        <p>
                          For those who work outside home, employ college
                          students to distribute fliers at supermarkets,
                          community centers...
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic ">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-4.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Don Townsend</li>
                          <li>Dec 22, 2018</li>
                          <li>Comment</li>
                        </ul>
                      </div>
                      <div className="blog__item__text">
                        <h5>
                          <a href="#">Using Banner Stands To Increase</a>
                        </h5>
                        <p>
                          Spread the word by the mouth. Talk to everyone about
                          the product and ask them to talk about it to others...
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-5.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Isabella Mann</li>
                          <li>Dec 25, 2018</li>
                          <li>2 Comment</li>
                        </ul>
                      </div>
                      <div className="blog__item__text">
                        <h5>
                          <a href="#">3 Smart Reasons Why You Should </a>
                        </h5>
                        <p>
                          It's a very powerful tool to increase the network and
                          doesn't even cost anything. When receiving a casual
                          call from family members and friends...
                        </p>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6}>
                    <div className="blog__item">
                      <div className="blog__item__pic">
                        <img
                          src="https://preview.colorlib.com/theme/hvac/img/blog/blog-6.jpg"
                          alt=""
                        />
                        <ul>
                          <li>By Polly Williams</li>
                          <li>Dec 27, 2018</li>
                          <li>6 Comment</li>
                        </ul>
                      </div>
                      <div className="blog__item__text">
                        <h5>
                          <a href="#">Search Engine Optimization And</a>
                        </h5>
                        <p>
                          Some businesses place a jar at the reception counter
                          where the business cards can be dropped for future
                          reference, while visiting them...
                        </p>
                      </div>
                    </div>
                  </Grid>
                </div>
                <Pagination
                  count={5}
                  variant="outlined"
                  color="secondary"
                  shape="rounded"
                />
              </Grid>
              <Grid item lg={3} md={6} sm={9}>
                <Sidebar />
              </Grid>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};
