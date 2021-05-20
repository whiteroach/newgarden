const express = require("express");
const router = express.Router();
const flower = require('../models/flowersSchema')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null, 'public/images')
    },
    filename: function(req,file,callback){
        callback(null, Date.now() +'_'+ file.originalname)
    }
});
const upload = multer({storage});

router.get('/flowerForm', (req,res)=>{
    res.send('flower')
})
router.post('/flowerForm', upload.single('pic'), (req, res)=>{
    console.log(req.body, req.file)
    // console.log(JSON.parse(req.body), req.file)
    // const newFlower = new flower(req.body.formState)
    // newFlower.save().then()
    // res.json({msg:`${req.body.formState.plantName} is successfully added!`})
    const newFlower = new flower({
        // ????
    })
})

module.exports = router;
