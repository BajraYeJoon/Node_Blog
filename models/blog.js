//Schema Development

const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      requred: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Model based on Schema
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
