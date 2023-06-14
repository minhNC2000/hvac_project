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
    API.get().then(({ data }) => setDetailblog(data));
  }, []);
  if (detailblog == undefined) {
    console.log(1);
    return <div>Chưa có dữ liệu</div>;
    
  } else {
    const { title } = detailblog;
    const { detail_text, details_desc, details_quotes } = detailblog;
    console.log(detail_text);
    return (
      <>
        <Hero data={title} />

        <Content data={{ detail_text, details_desc, details_quotes }} />
      </>
    );
  }
};

export default BlogDetail;
