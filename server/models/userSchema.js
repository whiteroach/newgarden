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

  // name: {
  //   firstName: {
  //     type: String,
  //     required: [true, "Please enter your first name"],
  //     default: "Test",
  //   },
  //   lastName: {
  //     type: String,
  //     required: [true, "Please enter your last name"],
  //     default: "Last name",
  //   },
  // },

  email: {
    type: String,
    required: [true, "E-mail is required!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
  },
  github_id: String,
  facebook_id: String,
});
const User = mongoose.model("User", newUser);
module.exports = User;
