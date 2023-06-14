import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./lastest.scss";
const Lastest = () => {
  const [newblogs, setNewblog] = useState([]);

  const apiUrl = "http://localhost:3004/blog-item";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setNewblog(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="lastest spad">
      <Container className="lg">
        <Grid container spacing={1}>
          <Grid lg={12}>
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
        <div className="row">
          <Grid container spacing={1}>
            {newblogs.map((newblog,index) => (
              <Grid lg={4} md={6} key={index}  >
                <div className="latest__blog__item">
                  <div
                    className="latest__blog__item__pic set-bg"
                    style={{
                      backgroundImage: `url("${newblog.image}")`,
                    }}
                  >
                    <ul  >
                      <li >By {newblog.writer}</li>
                      <li>{newblog.date}</li>
                      <li>Comment</li>
                    </ul>
                  </div>
                  <div className="latest__blog__item__text">
                    <h5>{newblog.title}</h5>
                    <p>{newblog.content}</p>
                    <a href="#">
                      View More <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Lastest;
