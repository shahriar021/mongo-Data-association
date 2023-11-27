var express = require("express");
var router = express.Router();

const userModel = require("./users");
const postsModel = require("./posts");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/creatUser", async function (req, res, next) {
  let user = await userModel.create({
    name: "shahirar",
    email: "s@gmail.com",
  });
  res.render(user);
});

router.get("/creatPosts", async function (req, res, next) {
  let post = await postsModel.create({
    title: "new title",
    user: "656411703a7c0ecde8fa9bca",
  });
  let user = await userModel.findOne({ _id: "656411703a7c0ecde8fa9bca" });
  user.posts.push(post._id);
  await user.save();
  res.render("done");
});

router.get("/getUsers", async function (req, res, next) {
  let user = await userModel
    .findOne({ _id: "656411703a7c0ecde8fa9bca" })
    .populate("posts");

  res.send(user);
});

module.exports = router;
