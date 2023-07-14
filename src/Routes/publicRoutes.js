import React from "react";
import { Home } from "../Pages/Home/Home";
import { AboutPage } from "../Pages/AboutPage/AboutPage";
import { Route } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { Cars } from "../Pages/Cars/Cars";
import { Blog } from "../Pages/Blog/Blog";

import BlogDetail from "../Pages/Blog/BlogDetail/BlogDetail";
import CarDetail from "../Pages/Cars/CarDetail/CarDetail";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/cars">
      <Route path="" element={<Cars />} />
      <Route path="car-detail">
        <Route path=":id" element={<CarDetail />} />
      </Route>
    </Route>
    <Route path="/blog">
      <Route path="" element={<Blog />} />
      <Route path="blog-details">
        <Route path=":id" element={<BlogDetail />} />
      </Route>
    </Route>

    <Route path="/gioi-thieu" element={<AboutPage />} />
    <Route path="/lien-he" element={<Contact />} />
  </>
);
