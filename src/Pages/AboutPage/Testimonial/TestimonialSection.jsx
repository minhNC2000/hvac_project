import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { boolean, number, text } from "@storybook/addon-knobs";
import "./testimonial.scss";

const getConfigurableProps = () => ({
  showArrows: boolean("showArrows", true, tooglesGroupId),
  showStatus: boolean("showStatus", false, tooglesGroupId),
  showIndicators: boolean("showIndicators", false, tooglesGroupId),
  infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
  showThumbs: boolean("showThumbs", false, tooglesGroupId),
  useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
  autoPlay: boolean("autoPlay", true, tooglesGroupId),
  stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
  swipeable: boolean("swipeable", true, tooglesGroupId),
  dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
  emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
  autoFocus: boolean("autoFocus", false, tooglesGroupId),
  thumbWidth: number("thumbWidth", 100, {}, valuesGroupId),
  selectedItem: number("selectedItem", 0, {}, valuesGroupId),
  interval: number("interval", 1500, {}, valuesGroupId),
  transitionTime: number("transitionTime", 500, {}, valuesGroupId),
  swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),

  ariaLabel: text("ariaLabel", undefined),
});

const tooglesGroupId = "Toggles";
const valuesGroupId = "Values";

const TestimonialSection = () => {
  return (
    <section className="testimonial spad">
      <Container className="lg">
        <Grid item lg={12}>
          <div className="section-title testimonial-title">
            <span>Testimonials</span>
            <h2>What People Say About Us</h2>
            <p>
              Our customers are our biggest supporters. What do they think of
              us? Lorem
            </p>
          </div>
        </Grid>
        <Carousel
          showArrows={true}
          {...getConfigurableProps()}
          className="testimonial_carousel"
        >
          <div className="testimonial__item">
            <div className="testimonial__item__author">
              <div className="testimonial__item__author__pic">
                <img
                  src="	https://preview.colorlib.com/theme/hvac/img/testimonial/testimonial-1.png"
                  alt=""
                />
              </div>
              <div className="testimonial__item__author__text">
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                </div>
                <h5>
                  John Smith /<span> CEO Colorlib</span>
                </h5>
              </div>
            </div>
            <p>
              For one thing they usually step all over the hedges and plants on
              the side of someone’s house killing
            </p>
          </div>
          <div className="testimonial__item">
            <div className="testimonial__item__author">
              <div className="testimonial__item__author__pic">
                <img
                  src="	https://preview.colorlib.com/theme/hvac/img/testimonial/testimonial-2.png"
                  alt=""
                />
              </div>
              <div className="testimonial__item__author__text">
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
                </div>
                <h5>
                  Emma Sandoval /<span> Marketing Manager</span>
                </h5>
              </div>
            </div>
            <p>
              It seems though that some of the biggest problems with the
              internet advertising trends are the lack of
            </p>
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export default TestimonialSection;
