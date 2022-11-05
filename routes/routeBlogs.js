const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

//Routes (blog)
router.get("/", blogController.blog_index);

//Posting to db
router.post("/", blogController.blog_details);

router.get("/create", blogController.blog_create_get);

//Get details about single blog
router.get("/:id", blogController.blog_create_details);

//Delete the blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
