const express = require('express');

// importing model:
const Data = require('../model/model');

//impoting controller:
const Controller = require('../controller/controller');

const router = express.Router();

router.get('/getall',Controller.view_all_data);

router.post('/post',Controller.data_post);

router.get('/getOne/:id',Controller.view_data_by_id);

router.patch('/update/:id' ,Controller.update_by_id);

router.delete('/delete/:id',Controller.delete_data);

module.exports = router;
