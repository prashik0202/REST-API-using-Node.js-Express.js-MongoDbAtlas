const express = require('express');

const router = express.Router();

router.get('/getall',(req,res) => {
    res.send('get all items');
})

router.post('/post',(req,res) => {
    res.send('post api');
})

router.get('/getOne/:id',(req,res) => {
    res.send('get by id');
})

router.patch('/update/:id' , (req,res) => {
    res.send('update by id');
})

router.delete('/delete/:id',(req,res) => {
    res.send('delete by id api');
})

module.exports = router;
