const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  plantName: String,
  plantType: String,
  description: String,
  plantPic: String,
  localId: String,
  added_by: {
    type: Schema.Types.ObjectId, // accept only user id.***
    ref: "User",
  },
});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;
