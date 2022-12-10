const router = require("express").Router();
const { updateUser, getUser, deleteUser, getFriends, followUser, unfollowUser } = require("../controllers/users");

//update user
router.put("/:id", updateUser);

//delete user
router.delete("/:id", deleteUser);

//get a user
router.get("/", getUser);

//get friends
router.get("/friends/:userId", getFriends);

//follow a user
router.put("/:id/follow", followUser);

//unfollow a user
router.put("/:id/unfollow", unfollowUser);

module.exports = router;
