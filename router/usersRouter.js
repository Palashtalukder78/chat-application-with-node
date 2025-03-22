//external Import
const express = require("express");

//Internal Import
const { getUsers } = require("../controller/usersController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

router.get("/", decorateHTMLResponse("Users"), getUsers);

module.exports = router;
