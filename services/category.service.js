const Category = require("../models/Category.model");

module.exports.create = (categoryInfo) => {
  return Category.create(categoryInfo);
};
module.exports.findAll = () => {
  return Category.find();
};
