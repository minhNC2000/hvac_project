import { Container, Grid } from "@mui/material";
import React from "react";
import "./hero.scss";


const Hero = ({data}) => {

  
  return (
    <section className="blog-details-hero spad set-bg">
      <Container className="lg">
        <div className="blog-details_header">
          <Grid container spacing={2}>
            <Grid item lg={10} className="details-item">
              <div className="details-text">
              {/* {heros.map((hero,index) => (
                  <h2>{hero.title}</h2>
                ))} */}

                <span className="label">Car Dealer, BMW</span>
                <h2>
                {data}
                  {/* An Update on Adobe Fuse as Adobe Moves to the Future of 3D
                  &amp; AR Development */}
                </h2>
                <ul>
                  <li>
                    <img
                      src="https://preview.colorlib.com/theme/hvac/img/blog/details/details-hero-avatar.png"
                      alt=""
                    />
                    <span>By Evelyn Lane</span>
                  </li>
                  <li>
                    <i className="fa fa-calendar-o" /> <span>Dec 17, 2019</span>
                  </li>
                  <li>
                    <i className="fa fa-edit" /> <span>2 Comment</span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
