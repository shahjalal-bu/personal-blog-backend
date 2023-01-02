const categoryService = require("../services/category.service");

module.exports.create = async (req, res) => {
  try {
    const category = await categoryService.create(req.body);
    return res.status(200).json(category);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const getData = await categoryService.findAll().populate("posts");
    return res.status(200).json(getData);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
