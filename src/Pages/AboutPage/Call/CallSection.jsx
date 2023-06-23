import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "./call.scss";
import {
  Box,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
const Call = () => {
  const [option, setOption] = useState("");
  const form = useRef();
  const [value, setValue] = useState({
    name: {
      text: "",
      isRequired: false,
      helperText: "",
    },
    email: {
      text: "",
      isRequired: false,
      helperText: "",
    },
    phone: {
      text: "",
      isRequired: false,
      helperText: "",
    },
  });
  const handleNameChange = (e) => {
    setValue({ ...value, name: { ...value.name, text: e.target.value } });
  };
  const handleEmailChange = (e) => {
    setValue({ ...value, email: { ...value.email, text: e.target.value } });
  };
  const handlePhoneChange = (e) => {
    setValue({ ...value, phone: { ...value.name, text: e.target.value } });
  };
  const handleSelectChange = (e) => {
    setOption(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.name.text === "") {
      setValue({
        ...value,
        name: {
          ...value.name,
          isRequired: true,
          helperText: "Vui lòng nhập Tên",
        },
      });
    } else if (value.email.text === "") {
      setValue({
        ...value,
        email: {
          ...value.email,
          isRequired: true,
          helperText: "Vui lòng nhập Email",
        },
      });
    } else if (value.phone.text === "") {
      setValue({
        ...value,
        phone: {
          ...value.phone,
          isRequired: true,
          helperText: "Vui lòng nhập Phone",
        },
      });
    } else {
      emailjs
        .sendForm(
          "service_2mozfyl",
          "template_k7x1kqv",
          form.current,
          "98SkVR941b9VAgSz9"
        )
        .then(
          (result) => {
            toast.success("Đã gửi thành công", {
              autoClose: 5000,
              progress: undefined,
              theme: "colored",
            });
            value.name.text = "";
            value.email.text = "";
            value.phone.text = "";
          },
          (error) => {
            toast.error("Thất bại", {
              autoClose: 5000,
              progress: undefined,
              theme: "colored",
            });
          }
        );
    }
  };
  return (
    <>
      <section className="call spad set-bg-call">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item sm={5} md={5} lg={5}>
              <div className="call__text">
                <div className="section-title">
                  <h2>Request A Call Back</h2>
                  <p>
                    Posters had been a very beneficial marketing tool because it
                    had paved to deliver an effective message that conveyed
                    customer's
                  </p>
                </div>
                <Link to="/lien-he">Contact Us</Link>
              </div>
            </Grid>

            <Grid item sm={6} md={6} lg={6} className="call__form">
              <Box component="form" ref={form} onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={6} md={6} lg={6} className="mb-25">
                    <TextField
                      error={value.name.isRequired}
                      helperText={value.name.helperText}
                      id="outlined-required"
                      label="Name"
                      name="user_name"
                      onChange={handleNameChange}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField
                      error={value.email.isRequired}
                      helperText={value.email.helperText}
                      id="outlined-required"
                      label="Email"
                      name="user_email"
                      onChange={handleEmailChange}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6}>
                    <TextField
                      error={value.phone.isRequired}
                      helperText={value.phone.helperText}
                      id="outlined-required"
                      label="Phone"
                      name="user_phone"
                      onChange={handlePhoneChange}
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                    />
                  </Grid>
                  <Grid item sm={6} md={6} lg={6} className="selection_form">
                    <FormControl
                      sx={{ m: 1, minWidth: 150 }}
                      className="select_service_form"
                    >
                      <Select
                        required
                        name="select_subject"
                        value={option}
                        onChange={handleSelectChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>Choose Our Services</em>
                        </MenuItem>
                        <MenuItem value="Buy Cars">Buy Cars</MenuItem>
                        <MenuItem value="Sell Cars">Sell Cars</MenuItem>
                        <MenuItem value="Wash Cars">Wash Cars</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <button type="submit" className="site-btn">
                  Send
                </button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Call;
