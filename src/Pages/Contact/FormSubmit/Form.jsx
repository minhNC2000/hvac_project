import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Box, Button, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import { toast } from "react-toastify";
import "./Form.scss";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};
const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  resize: none;
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px ;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

const Form = () => {
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
    subject: { text: "", isRequired: false, helperText: "" },
    message: { text: "", isRequired: false, helperText: "" },
  });
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
    } else if (value.subject.text === "") {
      setValue({
        ...value,
        subject: {
          ...value.subject,
          isRequired: true,
          helperText: "Vui lòng nhập Subject",
        },
      });
    } else if (value.message.text === "") {
      setValue({
        ...value,
        message: {
          ...value.message,
          isRequired: true,
          helperText: "Vui lòng nhập Message",
        },
      });
    } else {
      emailjs
        .sendForm(
          "service_2mozfyl",
          "template_5v5gm7q",
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

  const handleNameChange = (e) => {
    setValue({ ...value, name: { ...value.name, text: e.target.value } });
  };
  const handleEmailChange = (e) => {
    setValue({ ...value, email: { ...value.email, text: e.target.value } });
  };
  const handleSubjectChange = (e) => {
    setValue({ ...value, subject: { ...value.subject, text: e.target.value } });
  };
  const handleMessageChange = (e) => {
    setValue({ ...value, message: { ...value.message, text: e.target.value } });
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="contact__text">
          <div className="section-title">
            <h2>Let's Work Together</h2>
            <p>
              To make requests for further information, contact us via our
              social channels.
            </p>
          </div>
          <ul>
            <li>
              <span>Weekday:</span> 08:00 am to 18:00 pm
            </li>
            <li>
              <span>Saturday:</span> 10:00 am to 16:00 pm
            </li>
            <li>
              <span>Sunday:</span> Closed
            </li>
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className="contact__form">
          <Box component="form" ref={form} onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{ marginBottom: "20px" }}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <TextField
                  fullWidth
                  error={value.name.isRequired}
                  helperText={value.name.helperText}
                  id="outlined-required"
                  name="user_name"
                  label="Name"
                  onChange={handleNameChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <TextField
                  fullWidth
                  error={value.email.isRequired}
                  helperText={value.email.helperText}
                  id="outlined-required"
                  name="user_email"
                  label="Email"
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleEmailChange}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              error={value.subject.isRequired}
              helperText={value.subject.helperText}
              id="outlined-required"
              name="subject"
              label="Nhập tiêu đề"
              style={{ marginBottom: "20px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SubjectIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleSubjectChange}
            />

            <StyledTextarea
              label="Nhập tin nhắn"
              minRows={4}
              maxRows={4}
              aria-label="maximum height"
              placeholder="Nhập tin nhắn"
              name="message"
              onChange={handleMessageChange}
            />
            <Button type="submit" className="site-btn">
              Send
            </Button>
          </Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Form;
