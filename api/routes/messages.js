const router = require("express").Router();
const { sendMessage, getMessageFromConv } = require("../controllers/messages");

//add
router.post("/", sendMessage);

//get
router.get("/:conversationId", getMessageFromConv);

module.exports = router;
