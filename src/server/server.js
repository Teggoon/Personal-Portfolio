const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, '../../build')))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
});

app.post("/sendMessage", (req, res) => {
    res.status(200).send();
});

app.listen(3000);

console.log("app listening on port 3000");