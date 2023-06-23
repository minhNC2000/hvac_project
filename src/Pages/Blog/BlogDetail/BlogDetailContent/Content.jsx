import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./content.scss";
const Content = ({ data }) => {
  return (
    <section className="blog-details spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <div className="blog__details__pic">
              <img
                src="https://preview.colorlib.com/theme/hvac/img/blog/details/details-pic.jpg"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={8} className="blog__details-content">
            <div className="blog__details__text">
              <p>{data.detail_text}</p>
            </div>
            <div className="blog__details__quote">
              <p>{data.detail_quotes}</p>
            </div>
            <div className="blog__details__desc">
              <p>{data.detail_desc}</p>
            </div>
            <div className="blog__details__share">
              <a href="" className="blog__details__share__item facebook">
                <FontAwesomeIcon icon={faFacebookF} />
                <span>Share</span>
              </a>
              <a href="" className="blog__details__share__item twitter">
                <FontAwesomeIcon icon={faTwitter} />
                <span>Share</span>
              </a>
              <a href="" className="blog__details__share__item linkedin">
                <FontAwesomeIcon icon={faGoogle} />
                <span>Share</span>
              </a>
              <a href="" className="blog__details__share__item google ">
                <FontAwesomeIcon icon={faLinkedinIn} />
                <span>Share</span>
              </a>
            </div>
            <div className="blog__details__author">
              <div className="blog__details__author__pic">
                <img
                  src="https://preview.colorlib.com/theme/hvac/img/blog/details/author.png"
                  alt=""
                />
              </div>
              <div className="blog__details__author__text">
                <h5>Marry Jean</h5>
                <p>
                  Another thing that I don’t really like about them is that
                  they’re such sideline actors, lacking the abilities to
                  participate actively.
                </p>
              </div>
            </div>
            <div className="blog__details__btns">
              <Grid container spacing={4}>
                <Grid item lg={6}>
                  <a href="#" className="blog__details__btns__item .set-bg">
                    <h6>Promotional Advertising Specialty</h6>
                    <ul>
                      <li>By Don Townsend</li>
                      <li>Dec 22, 2018</li>
                    </ul>
                  </a>
                </Grid>
                <Grid item lg={6}>
                  <a href="#" className="blog__details__btns__item .set-bg">
                    <h6>Promotional Advertising Specialty</h6>
                    <ul>
                      <li>By Don Townsend</li>
                      <li>Dec 22, 2018</li>
                    </ul>
                  </a>
                </Grid>
              </Grid>
            </div>
            <div className="blog__details__comment__form">
              <h4>Leave A Reply</h4>
              <form action="#">
                <div className="input-list">
                  <div className="input-list-item">
                    <p>Name</p>
                    <input type="text" />
                  </div>
                  <div className="input-list-item">
                    <p>Email</p>
                    <input type="text" />
                  </div>
                  <div className="input-list-item">
                    <p>Website</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="input-desc">
                  <p>Comment</p>
                  <textarea defaultValue={""} />
                </div>
                <button type="submit" className="site-btn">
                  Submit Now
                </button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Content;
