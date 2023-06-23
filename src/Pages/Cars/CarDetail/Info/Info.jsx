import { Grid } from "@mui/material";
import { boolean, number, text } from "@storybook/addon-knobs";
import React from "react";
import { Carousel } from "react-responsive-carousel";

const Info = ({ data }) => {
  const tooglesGroupId = "Toggles";
  const valuesGroupId = "Values";
  const images = data.image;
  const getConfigurableProps = () => ({
    showArrows: boolean("showArrows", false, tooglesGroupId),
    showStatus: boolean("showStatus", false, tooglesGroupId),
    showIndicators: boolean("showIndicators", true, tooglesGroupId),
    infiniteLoop: boolean("infiniteLoop", true, tooglesGroupId),
    showThumbs: boolean("showThumbs", true, tooglesGroupId),
    useKeyboardArrows: boolean("useKeyboardArrows", true, tooglesGroupId),
    autoPlay: boolean("autoPlay", true, tooglesGroupId),
    stopOnHover: boolean("stopOnHover", true, tooglesGroupId),
    swipeable: boolean("swipeable", true, tooglesGroupId),
    dynamicHeight: boolean("dynamicHeight", true, tooglesGroupId),
    emulateTouch: boolean("emulateTouch", true, tooglesGroupId),
    autoFocus: boolean("autoFocus", false, tooglesGroupId),
    thumbWidth: number("thumbWidth", 119, {}, valuesGroupId),

    interval: number("interval", 2000, {}, valuesGroupId),
    transitionTime: number("transitionTime", 500, {}, valuesGroupId),
    swipeScrollTolerance: number("swipeScrollTolerance", 5, {}, valuesGroupId),
    ariaLabel: text("ariaLabel", undefined),
  });
  if (images == undefined) {
    return <h1>Chưa có dữ liệu</h1>;
  } else {
    return (
      <>
        <Grid item lg={9}>
          <div className="car-carousel">
            <Carousel {...getConfigurableProps()}>
              {images.map((image, index) => (
                <img src={image} alt={`slide${index}`} key={index}></img>
              ))}
            </Carousel>
          </div>
        </Grid>
      </>
    );
  }
};

export default Info;
