import React from "react";
import { Home } from "../Pages/Home/Home";
import { About } from "../Pages/About/About";
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
    <Route path="/gioi-thieu" element={<About />} />
    <Route path="/lien-he" element={<Contact />} />
  </>
);
