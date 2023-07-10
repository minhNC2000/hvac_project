import React, { useEffect, useState } from "react";
import "./detail.scss";

import Hero from "./BlogDetailHero/Hero";
import Content from "./BlogDetailContent/Content";
import { useParams } from "react-router-dom";
import { useAPI } from "../../../Services/Hooks";
const BlogDetail = () => {
  const [detailblog, setDetailblog] = useState({});
  const { id } = useParams();

  const API = useAPI(`blog-item/${id}`);
  useEffect(() => {
    window.scrollTo(0, 0);
    API.get().then(({ data }) => setDetailblog(data));
  }, [API]);
  if (detailblog === undefined) {
    return <div>Chưa có dữ liệu</div>;
  } else {
    const {
      title,
      detail_text,
      detail_desc,
      detail_quotes,
      writer,
      date,
      comment,
    } = detailblog;

    return (
      <>
        <Hero data={{ title, writer, date, comment }} />

        <Content data={{ detail_text, detail_desc, detail_quotes }} />
      </>
    );
  }
};

export default BlogDetail;
