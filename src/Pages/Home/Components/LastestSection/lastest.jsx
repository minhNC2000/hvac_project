import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./lastest.scss";
import { useAPI } from "../../../../Services/Hooks";
import { Link } from "react-router-dom";
const Lastest = () => {
  const [newblogs, setNewblog] = useState([]);

  const API = useAPI("blog-item");
  useEffect(() => {
    API.get().then(({ data }) => setNewblog(data));
  }, []);

  return (
    <section className="lastest spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid sm={12} md={12} lg={12}>
            <div className="section-title">
              <span>Our Blog</span>
              <h2>Latest News Updates</h2>
              <p>
                Sign up for the latest Automobile Industry information and more.
                Duis aute
                <br /> irure dolorin reprehenderits volupta velit dolore fugiat.
              </p>
            </div>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          {newblogs.map((newblog, index) => (
            <Grid
              sm={6}
              md={6}
              lg={4}
              key={index}
              className="latest__blog__item"
            >
              <div
                className="latest__blog__item__pic set-bg"
                style={{
                  backgroundImage: `url("${newblog.image}")`,
                }}
              >
                <ul>
                  <li>By {newblog.writer}</li>
                  <li>{newblog.date}</li>
                  <li>Comment</li>
                </ul>
              </div>
              <div className="latest__blog__item__text">
                <h5>{newblog.title}</h5>
                <p>{newblog.content}</p>
                <Link to={`blog/blog-details/${newblog.id}`}>
                  View More <FontAwesomeIcon icon={faArrowRightLong} />
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Lastest;
