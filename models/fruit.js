const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const fruitSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const MyFruit = mongoose.model('MyFruit', fruitSchema)


module.exports = MyFruit;
