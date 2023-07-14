import React from "react";

import Hero from "./Components/HeroSection/Hero";
import Services from "./Components/ServicesSection/Services";
import Feature from "./Components/FeatureSection/Feature";
import Car from "./Components/CarSection/Car";
import Chooseus from "./Components/ChooseusSection/Chooseus";
import Lastest from "./Components/LastestSection/lastest";
import Cta from "./Components/ctaSection/Cta";

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Feature />
      <Car />
      <Chooseus />
      <Lastest />
      <Cta />
    </>
  );
};
