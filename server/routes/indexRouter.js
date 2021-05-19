const express = require('express');
const router = express.Router();
const flower = require('../models/flowersSchema')

router.get('/flowerForm', (req,res)=>{
    res.send('flower')
})
router.post('/flowerForm', (req, res)=>{
    console.log(req.body.formState)
    const newFlower = new flower(req.body.formState)
    newFlower.save().then()
    res.json({msg:`${req.body.formState.plantName} is successfully added!`})
})

module.exports = router
