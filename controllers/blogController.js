const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) =>
      res.render("index", { title: "All Blogs", blogs: result })
    )
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
};

const blog_create_get = (req, res) => {
  res.render("new", { title: "Create a New Blog" });
};

const blog_create_details = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("detail", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      res.render("404", { title: "Error" });
    });
};

const blog_delete = (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_details,
  blog_delete,
};
