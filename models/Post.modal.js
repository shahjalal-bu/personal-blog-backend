const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    tags: Array,

    content: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", postSchema);
