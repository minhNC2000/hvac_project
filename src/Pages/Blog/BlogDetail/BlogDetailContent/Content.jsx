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
const Content = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(props);
  }, [props]);
  if (!data ) {
    return <div>Chưa có dữ liệu</div>;
  } else {
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
                <p>
                  {data.detail_text}
                  {/* WordPress, the premier free open-source blogging utility, has
                  gone through several upgrades in its life. Today it’s one of the
                  most popular blogging tools on the Internet; it’s easy to use,
                  powerful, and very versatile. It also has a very active base of
                  skilled users who are eager to improve the product and to help
                  out those who haven’t tried it before. */}
                </p>
                <p>
                  Though the Strayhorn 1.5 version is the favorite for many, it
                  is not as stable or as secure as the newest version 2.0.3. The
                  best part of the new version is the security patch; the new
                  “nonce” security key reduces the chances of a malicious hacker
                  finding a way into your admin panel.
                </p>
              </div>
              <div className="blog__details__quote">
                <p>
                  Though a major upgrade to 2.1 is due out soon, the 2.0.3 is
                  something you should definitely download and install if only
                </p>
              </div>
              <div className="blog__details__desc">
                <p>
                  In addition to the 2.0.3 install, you should be aware that
                  some bugs have already been found, and that a plugin will need
                  to be installed to repair those bugs. If you modify any of the
                  files that this patch plugin fixes, you’ll need to either
                  merge the changes with the new files or make those changes
                  manually once again. You can find these issues by running a
                  diff to locate changes; if the only changes you find are your
                  own, then you’re fine, and otherwise you’ll need to merge them
                  manually into the
                </p>
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
  }
};

export default Content;
