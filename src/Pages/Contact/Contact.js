import React from "react";
import Container from "@mui/material/Container";

import Form from "./FormSubmit/Form";
import ShowRoomSection from "./ShowRoom/ShowRoomSection";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

export const Contact = () => {
  return (
    <div>
      <Breadcrumbs currentPath={"contact us"} />
      <section className="contact spad">
        <Container maxWidth="lg">
          <div className="row">
            <Form />
          </div>
        </Container>
      </section>
      <ShowRoomSection />
    </div>
  );
};
