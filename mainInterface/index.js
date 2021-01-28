const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.get("/", async (req, res) => {
    let result = await axios.get("http://localhost:8001/");
    console.log(result.data)
    res.send(result.data);
});

app.listen(8000, () => {
    console.log("Server started !");
});
