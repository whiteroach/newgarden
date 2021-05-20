const mongoose = require('mongoose');
const schema = mongoose.Schema;

const flowerSchema = new schema(
    {
      plantName:String,
      plantType:String,
      description:String,
      plantPic:String,
    }
);

const flowers = mongoose.model('flowers', flowerSchema)

module.exports = flowers;