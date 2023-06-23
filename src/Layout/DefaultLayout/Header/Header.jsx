import { useMediaQuery } from "@mui/material";
import React from "react";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

const Header = () => {
  
  const match = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return <>{match ? <HeaderMobile /> : <HeaderDesktop />}</>;
};

export default Header;
