const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Ok from user"));

app.listen(8001, () => {
    console.log("Server started !");
});
