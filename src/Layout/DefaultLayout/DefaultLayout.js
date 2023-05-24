import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../Routes/publicRoutes";
import { privateroutes } from "../../Routes/privateroutes";

import Error404 from "../../Error/404/Error404";

import "../../Assets/Styles/Style.scss"
const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {publicRoutes}
          {privateroutes}
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default DefaultLayout;
