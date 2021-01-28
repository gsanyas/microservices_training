const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Ok from user"));

app.listen(8001, () => {
    console.log("Server started !");
});
