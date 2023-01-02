var express = require("express");
var router = express.Router();
//userController
const categoryController = require("../controllers/category.controller");

router.post("/create/:id", categoryController.create);

router.get("/all", categoryController.findAll);

module.exports = router;
