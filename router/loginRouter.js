//external Import
const express = require("express");

//Internal Import
const { getLogin } = require("../controller/loginController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

router.get("/", decorateHTMLResponse("Login"), getLogin);

module.exports = router;
