import React from "react";
import { Home } from "../Pages/Home/Home";
import { AboutPage } from "../Pages/AboutPage/AboutPage";
import { Route } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { Cars } from "../Pages/Cars/Cars";
import { Blog } from "../Pages/Blog/Blog";
import { Pages } from "../Pages/Pages/Pages";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/pages" element={<Pages />} />
    <Route path="/gioi-thieu" element={<AboutPage />} />
    <Route path="/lien-he" element={<Contact />} />
  </>
);
