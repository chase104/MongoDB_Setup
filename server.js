
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const MyFruit = require('./models/fruit')

const app = express();



app.use(express.static('public'));


let connectionString = `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@mongosetupcluster.6pmvhu8.mongodb.net/FruitDatabase?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// before I can ask and send data into the collection, I need to create a model



app.get('/get_data', (req, res) => {
    // Get data from MonogoDB,
    // res.json(data)
    res.setHeader('Content-Type', 'application/json');

    console.log("request received at /get_data");
    console.log(process.env.MONGOPASSWORD);
    res.json({data: "Response from server"})
})


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});

