const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  plantName: String,
  plantType: String,
  description: String,
  plantPic: String,
  localId: String,
  added_by: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const flowers = mongoose.model("flowers", flowerSchema);

module.exports = flowers;
