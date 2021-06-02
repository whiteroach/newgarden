const express = require("express");
const router = express.Router();
const Flower = require("../models/flowersSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public/images");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/flowerForm", upload.single("pic"), async (req, res) => {
  console.log(req.body, req.file);
  // console.log(req.session.user);
  const newFlower = await new Flower({
    plantName: req.body.plantName,
    plantType: req.body.plantType,
    description: req.body.description,
    plantPic: req.file.filename,
    // added_by: req.session.user._id,
    added_by: "60acfd855c24a86b3772a7f6",
    // added_by: req.body.localId,
  });
  console.log(req.body, `is added`);

  // console.log(object)
  newFlower.save();
  res.json("It works");
});

router.get("/main", (req, res) => {
  flower
    .find((err, flowers) => {
      // console.log(flowers);
      res.json(flowers);
    })
    .populate("added_by");
});

router.delete("/main/delete/:id", (req, res) => {
  const itemsId = req.params.id;
  console.log(itemsId);
  flower.findByIdAndDelete(itemsId, (err, doc) => {
    res.json({ msg: `${doc.plantName} is successfully deleted` });
  });
});

module.exports = router;
