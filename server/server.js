const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const session = require("express-session");

//import
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const indexRouter = require("./routes/indexRouter");
const userRouter = require("./routes/userRouter");

// Add headers
// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );

//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   // Pass to next layer of middleware
//   next();
// });
//settings
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// express-session
app.use(
  session({
    secret: process.env.MY_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

// // Passport JS
// const passport = require("passport");
// require("./config/passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());

// // Local login
// app.post(
//   "/login/passport/local",
//   passport.authenticate("local", {
//     failureRedirect: "/",
//   }),
//   (req, res) => {
//     // console.log(req.body);
//     res.send(req.user);
//     // res.status(200).json(req.user);
//     // res.json("Log in successful");
//     // res.send(req.user);
//   }
// );
// //Facebook login process
// app.get("/user/login/passport/facebook", passport.authenticate("facebook"));
// app.get(
//   "/user/auth/facebook/callback",
//   passport.authenticate("facebook"),
//   (req, res) => {
//     console.log(req.user);
//     res.send(req.user);
//   }
// );

// //Github login process
// app.get("/user/login/passport/github", passport.authenticate("github"));
// app.get(
//   "/user/auth/github/callback",
//   passport.authenticate("github"),
//   (req, res) => {
//     console.log(req.user);
//     res.send(req.user);
//   }
// );
//routes
app.use("/", indexRouter);
app.use("/user", userRouter);

// app.post('/flowerForm', (req, res)=>{
//     console.log('post from flower')
// })

//database
const DB_NAME = process.env.DB_NAME;
const DB_LINK = process.env.MONGO_LINK + DB_NAME;
mongoose
  .connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Mongoose found his way to the database...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Listen to PORT ${PORT}`);
});
