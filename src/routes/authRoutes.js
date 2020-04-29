const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save();
  res.send("You make a post request");
});

module.exports = router;
