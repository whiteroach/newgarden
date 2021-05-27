const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUser = new Schema({
  // normal schema
  // username: String,
  // email: String,
  // password: String,

  // advance schema
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  email: {
    type: String,
    required: [true, "E-mail is required!"],
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
});
const User = mongoose.model("User", newUser);
module.exports = User;
