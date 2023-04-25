const express = require("express");
const router = express.Router();

//Import Controller

const { createComment } = require("../controllers/commentController")
const { createPost } = require("../controllers/postController")


//Mapping Create

router.post("/comment/create", createComment)
router.post("/post/create", createPost)

//Export

module.exports = router;