const express = require("express");
const router = express.Router();

//Import Controller

const { createComment } = require("../controllers/commentController")


//Mapping Create
router.post("/comment/create", createComment)


//Export

module.exports = router;