const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    let result = await axios.get(process.env.USER_COMPONENT_URI);
    console.log(result.data);
    res.send(result.data);
});

app.listen(8000, () => {
    console.log("Server started !");
});
