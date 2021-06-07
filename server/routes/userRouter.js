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

// login using JWT
const jwt = require("jsonwebtoken");

//**** */ here are bugs for token ******

router.post("/loginByJWT", (req, res) => {
  User.findOne({ email: req.body.email }, (err, data) => {
    // console.log(data, `is coming`);
    if (data == null) {
      res.json({ msg: "Username not found!" });
    } else {
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (result) {
          const secret = process.env.JWT_SECRET;
          const token = jwt.sign({ id: data._id }, secret, {
            expiresIn: "1d", // 60*60*24
            algorithm: "HS256",
          });
          res.json(token);
          // console.log(token, "is here");
        } else {
          res.json({ msg: "Incorrect Password!" });
        }
      });
    }

    // console.log(`After encode the data is: ${token} `);
  });
});

// // Log in
// router.post("/login", (req, res) => {
//   User.findOne({ username: req.body.username }, (err, data) => {
//     console.log(req.body);
//     bcrypt.compare(req.body.password, data.password, (err, result) => {
//       if (result) {
//         console.log(data);
//         // req.session.user = data;
//         // req.session.msg = "successfully logged in";
//         // res.json(req.session.user.username);
//         res.json(data);
//       }
//     });
//   });
// });

module.exports = router;
