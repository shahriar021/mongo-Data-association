var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/population");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
  ],
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
