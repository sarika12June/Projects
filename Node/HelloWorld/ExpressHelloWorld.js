const e = require("express");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (request, response) {
  response.send({ name: "srikanth" });
});
app.get("/about", function (request, response) {
  response.send("from express  about");
});
app.post("/login", (req, res) => {
  if (req.body.username === "node" && req.body.password === "node") {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
});
app.listen(5000, () => {
  console.log("connection succeful");
});
