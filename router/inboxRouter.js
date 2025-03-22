//external Import
const express = require("express");

//Internal Import
const { getInbox } = require("../controller/InboxController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

router.get("/", decorateHTMLResponse("Inbox"), getInbox);

module.exports = router;
