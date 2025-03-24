//external Import
const express = require("express");

//Internal Import
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");
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
router.post(
  "/",
  avatarUpload,
  addUserValidator,
  addUserValidationHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
