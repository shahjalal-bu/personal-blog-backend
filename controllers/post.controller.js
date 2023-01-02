const postService = require("../services/post.service");
const Category = require("../models/Category.model");

module.exports.create = async (req, res) => {
  try {
    const post = await postService.create(req.body);

    await Category.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          posts: post._id,
        },
      }
    );
    return res.status(200).json(post);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
