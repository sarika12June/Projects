const express = require("express");
const db = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(
  "mongodb://localhost:27017/sports",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("DB connection is not successful");
    } else {
      console.log("DB connection successful");
    }
  }
);
const GameModel = db.model("games", {
  name: String,
  country: String,
  player: String,
});

app.get("/", (req, res) => {
  res.send("home page");
});

app.post("/addGame", (req, res) => {
  var game = new GameModel({
    name: req.body.name,
    country: req.body.country,
    player: req.body.country,
  });
  game.save((err) => {
    if (err) {
      res.send("failed to store reponse");
    } else {
      res.send("successfully saved! ");
    }
  });
});
app.post("/getGames", (req, res) => {
  GameModel.find({}, (err, documents) => {
    if (err) {
      res.send("failed to retirve reponse");
    } else {
      res.send(documents);
    }
  });
});
app.post("/delGame", (req, res) => {
  GameModel.findOneAndDelete({ name: req.body.name }, (err) => {
    if (err) {
      res.send("failed to deleted reponse");
    } else {
      res.send("successfully deleted ! ");
    }
  });
});

app.post("/updateGame", (req, res) => {
  GameModel.findOneAndUpdate(
    { name: req.body.name },
    { player: "India" },
    (err) => {
      if (err) {
        res.send("failed to update reponse");
      } else {
        res.send("successfully updated ! ");
      }
    }
  );
});
app.listen(5000, (req, res) => {
  console.log("connection successful");
});
