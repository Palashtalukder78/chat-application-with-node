//external Import
const express = require("express");

//Internal Import
const { getLogin, login } = require("../controller/loginController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");
const {
  doLoginValidator,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidator");

const router = express.Router();

const page_title = "Login";
router.get("/", decorateHTMLResponse(page_title), getLogin);

//process login
router.post(
  "/",
  decorateHTMLResponse(page_title),
  doLoginValidator,
  doLoginValidationHandler,
  login
);

module.exports = router;
