//External import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

//Internal Import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const app = express();
dotenv.config();

//Database connection
const cookieParser = require("cookie-parser");
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connection Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For html encoded

//set view engine
app.set("view engine", "ejs");

//set static folder
app.use(express.static(path.join(__dirname)));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//ROUTING SETUP

//Error handling
//------Not Found Handler
app.use(notFoundHandler);

//------Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application listening to Port ${process.env.PORT}`);
});
