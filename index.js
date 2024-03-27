const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const port = 4050;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/test", (req, res) => {
    res.send("Hello World! TEST");
})

app.get("/env", (req, res) => {
    res.send(`Hello World! ENV: ${process.env.MESSAGE}`);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})