import React from "react";
import { Home } from "../Pages/Home/Home";
import { AboutPage } from "../Pages/AboutPage/AboutPage";
import { Route, Routes } from "react-router-dom";
import { Contact } from "../Pages/Contact/Contact";
import { Cars } from "../Pages/Cars/Cars";
import { Blog } from "../Pages/Blog/Blog";

import Content from "../Pages/Blog/BlogDetail/BlogDetailContent/Content";
import BlogDetail from "../Pages/Blog/BlogDetail/BlogDetail";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/cars" element={<Cars />} />
    <Route path="/blog">
    <Route  path="" element={<Blog />}/>
      <Route path="blog-details">
        <Route path=":id" element={<BlogDetail />} />
      </Route>
    </Route>

    <Route path="/gioi-thieu" element={<AboutPage />} />
    <Route path="/lien-he" element={<Contact />} />
  </>
);
