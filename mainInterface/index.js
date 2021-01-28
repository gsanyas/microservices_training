const express = require("express");
const axios = require('axios');
const app = express();

app.get("/", async (req, res) => {

    let result = await axios.get('http://localhost:8001/');
    res.send(result)});

app.listen(8000, () => {
    console.log("Server started !");
});
