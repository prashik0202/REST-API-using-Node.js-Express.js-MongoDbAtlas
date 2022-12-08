//importing all required lib:
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const route = require('./routes/route');

const DB = process.env.MONGO_URI;

mongoose.connect(DB,{ useNewUrlParser: true , useUnifiedTopology: true });
const database = mongoose.connection

database.on('error',(error) => {
    console.log(error);
})

database.once('connected',() => {
    console.log("Database is connected!");
})

const app = express(); //creating a express app:

app.use(express.json()); //middleware provide by express

app.use('/api',route); //using routes api

const port = process.env.PORT;
app.listen(port,() => {
    console.log(`Server started on http://localhost:${port}`);
})

