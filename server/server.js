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
