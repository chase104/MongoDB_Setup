const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/get_data', (req, res) => {
    console.log("request received at /get_data");

    res.json("Response from server")
})


app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
});

