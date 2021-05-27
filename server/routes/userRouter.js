const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");

router.post("/signUp", (req, res) => {
  console.log(req.body);
  const salt = 10;
  bcrypt.hash(req.body.password, salt, (err, hashPsw) => {
    req.body.password = hashPsw;
    console.log(req.body);

    const newUser = new User(req.body);
    newUser.save((err, doc) => {
      if (err) throw err;
      res.json({ msg: `${doc.username} successfully added ` });
    });
  });
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }, (err, data) => {
    console.log(req.body);
    bcrypt.compare(req.body.password, data.password, (err, result) => {
      if (result) {
        console.log(data);
        // req.session.user = data;
        // req.session.msg = "successfully logged in";
        // res.json(req.session.user.username);
        res.json(data);
      }
    });
  });
});

module.exports = router;
