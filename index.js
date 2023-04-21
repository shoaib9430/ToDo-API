const express = require("express");
const app = express();
const port = 8000;
const env = require("dotenv");
const mongoose = require("mongoose");
const db = require("./config/mongoose");
const path = require("path");
const passportJWT = require("./config/passport-jwt");
const cors = require("cors");
const passport = require("passport");
app.use(cors());
app.use(express.json());


app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    return console.log("Having Error", err);
  }
  console.log(`Sucessfully Connected on port ${port}`);
});