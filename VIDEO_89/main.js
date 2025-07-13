const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
  console.log("Its a get request");
  res.send("Hello World!");
});

app.get("/index", (req, res) => {
  console.log("Its a get request");
  res.sendFile('templates/index2.html',{root:__dirname});
});

app.post("/", (req, res) => {
  console.log("Its a post request");
  res.send("Hello World23!");
});

app.delete("/", (req, res) => {
  console.log("Its a put delete");
  res.send("Hello World236 delete!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
