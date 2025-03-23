//external Import
const express = require("express");

//Internal Import
const { getUsers } = require("../controller/usersController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidator,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidator");

const router = express.Router();

//Get users
router.get("/", decorateHTMLResponse("Users"), getUsers);

//post user
router.post("/", avatarUpload, addUserValidator, addUserValidationHandler);

module.exports = router;
