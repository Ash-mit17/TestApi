const express = require("express");
const app = express();

const port = 4050;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/test", (req, res) => {
    res.send("Hello World! TEST");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})