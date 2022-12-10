const express = require('express');
const { updateOne } = require('../model/model');
// importing model
const Data = require('../model/model');

const router = express.Router();

router.get('/getall',async (req,res) => {
    // res.send('get all items');
    try{
        const data = await Data.find();
        console.log(data);
    }catch(error){
        res.status(500).json({message : message.error})
    }
})

router.post('/post',async (req,res) => {
    // res.send('post api');
    const data = new Data({
        name : req.body.name,
        age : req.body.age
    })
    try{
        const dataToSave = await data.save();
        res.status(200);
        // res.json(dataToSave);
        console.log(dataToSave);
    }catch(error){
    res.status(400).json({message : error.message})
    }
})

router.get('/getOne/:id',async (req,res) => {
    // res.send(req.params.id);
    try{
        const data = await Data.findById(req.params.id);
        console.log(data);
        res.json(data);
    }catch(error){
        res.status(500).json({message : error.message});
    }
})

router.patch('/update/:id' ,async (req,res) => {
    // res.send('update by id');
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new : true};

        const result = await Data.findByIdAndUpdate(id,updatedData,options);
        console.log(result);
        res.send(result);
    }catch(error){
        res.status(500).json({message : message.status});
    }
})

router.delete('/delete/:id',async(req,res) => {
    // res.send('delete by id api');
    try{
        const id = req.params.id;
        const data = await Data.findByIdAndDelete(id);
        res.send(`Document with ${data.name} is deleted!`);

    }catch(error){
        res.status(500).json({message : error.message});
        console.log(error);
    }
})

module.exports = router;
