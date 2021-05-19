const express = require("express");
const router = express.Router();
const flower = require("../models/flowersSchema");

router.post("/flowerForm", (req, res) => {
  console.log(req.body);
});
module.exports = router;
