var express = require("express");
var router = express.Router();
const postController = require("../controllers/post.controller");
router.post("/add/:id", postController.create);
module.exports = router;
