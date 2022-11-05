const { render } = require("ejs");
const express = require("express");
const { default: mongoose } = require("mongoose");
const morgan = require("morgan");

const router = require("./routes/routeBlogs");

//express app
const app = express();

//Connection to MongoDB
const dbURI =
  "mongodb+srv://bajrayejoon:9841%40Krishna@cluster0.vfiwgll.mongodb.net/nodedb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (
      result //listen
    ) => app.listen(3000)
  )
  .catch((err) => console.log(err));

//view engines
app.set("view engine", "ejs");

//Static files middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// //Mongoose Routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New Blog",
//     snippet: "about new blog",
//     body: "lorem lorem lorem",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/a-blog", (req, res) => {
//   Blog.findById("63661aea0b752bd6bca87bb7")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log(err));
// });

//Routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//Routing to blog requests
app.use("/blogs", router);

app.use((req, res) => {
  res.render("404", { title: "Error" });
});
