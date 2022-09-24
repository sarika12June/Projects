const express = require("express");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("this is from node express js");
});
app.get("/api/helloworld", (req, res) => {
  res.send("this helloworld is from node  js");
});

app.get("/api/getNames", (req, res) => {
  res.send([
    { name: "chiranjeevi" },
    { name: "pawan kalyan" },
    { name: "ram charan" },
    { name: "varun tej" },
  ]);
});

app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/api/postLanguage", (req, res) => {
  res.send("received language is " + req.body.language);
});

app.listen(5000, () => {
  console.log("server statred");
});
