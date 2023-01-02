const Post = require("../models/Post.modal");

module.exports.create = (postInfo) => {
  return Post.create(postInfo);
};
