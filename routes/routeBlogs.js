const express = require("express");
const Blog = require("../models/blog");
const router = express.Router();

//Routes (blog)
router.get("/", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) =>
      res.render("index", { title: "All Blogs", blogs: result })
    )
    .catch((err) => console.log(err));
});

//Posting to db
router.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log(err));
});

router.get("/create", (req, res) => {
  res.render("new", { title: "Create a New Blog" });
});

//Get details about single blog
router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("detail", { blog: result, title: "Blog Details" });
    })
    .catch((err) => console.log(err));
});

//Delete the blog
router.delete("/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
