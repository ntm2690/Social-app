const router = require("express").Router();
const { newConv, getConvById, getTwoUserById } = require("../controllers/conversations");

//new conv
router.post("/", newConv);

//get conv of a user
router.get("/:userId", getConvById);

// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", getTwoUserById);

module.exports = router;
