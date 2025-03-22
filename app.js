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
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

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
app.use(express.static(path.join(__dirname, "public")));

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//ROUTING SETUP
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//Error handling
//------Not Found Handler
app.use(notFoundHandler);
//------Error Handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`The application listening to Port ${process.env.PORT}`);
});
