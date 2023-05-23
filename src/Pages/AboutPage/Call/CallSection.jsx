import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./call.scss";
import { TextField } from "@mui/material";
const Call = () => {
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <>
      <section className="call spad set-bg-call">
        <Container maxWidth="lg">
          <div className="row">
            <Grid container lg={5} md={6}>
              <div class="call__text">
                <div class="section-title">
                  <h2>Request A Call Back</h2>
                  <p>
                    Posters had been a very beneficial marketing tool because it
                    had paved to deliver an effective message that conveyed
                    customer's
                  </p>
                </div>
                <a href="/lien-he">Contact Us</a>
              </div>
            </Grid>
            <Grid container lg={6} md={6} className="paddinglg-1">
              <form action="#" class="call__form">
                <div class="row">
                  <Grid item lg={6} className="text_field">
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6}>
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item lg={6} className="selection_form">
                    <FormControl
                      sx={{ m: 1, minWidth: 150 }}
                      className="select_service_form"
                    >
                      <Select
                        value={option}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>Choose Our Services</em>
                        </MenuItem>
                        <MenuItem value={1}>Buy Cars</MenuItem>
                        <MenuItem value={2}>Sell Cars</MenuItem>
                        <MenuItem value={3}>Wash Cars</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </div>
                <button type="submit" class="site-btn">
                  Send
                </button>
              </form>
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Call;
