const router = require("express").Router();
const { createPost, updatePostById, deletePostById, intereactWithPost, getPostById, getTimelinePost, getAllPostUser } = require("../controllers/posts");
const Post = require("../models/Post");
const User = require("../models/User");

//create a post
router.post("/", createPost);

//update a post
router.put("/:id", updatePostById);

//delete a post
router.delete("/:id", deletePostById);

//like / dislike a post
router.put("/:id/like", intereactWithPost);

//get a post
router.get("/:id", getPostById);

//get timeline posts
router.get("/timeline/:userId", getTimelinePost);

//get user's all posts
router.get("/profile/:username", getAllPostUser);

module.exports = router;
