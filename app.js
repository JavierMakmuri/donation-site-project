// this is the interim database
const database = require("./data")

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { title } = require("process");
const _ = require("lodash");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');


/*
 * this variable hold the previous search result
 * note: this is done to prevent browser pop-up upon refresh
 */
var matchingTitles = database


// get an array of n randomized unique number
const randomize = (n) => {
  const totalMovies = database.length
  const numbers = [...Array(totalMovies).keys()]
  
  return _.sampleSize(numbers, n)
}

// get n random titles from database
const randomTitles = (n) => {
  const randomIndices = randomize(n)

  return randomIndices.map(i => database[i])
}

/**
 * Routes
 */

app.get("/", (req, res) => {
  res.render("home", { matchingTitles: matchingTitles, randomTitles: randomTitles(6) });
  matchingTitles = database;
});

app.get("/about", (req, res)=> {
  res.render("about");
});

app.get("/result", (req, res) => {
  res.render("search_result", {matchingTitles: matchingTitles});
});

app.post("/search", (req, res) => {
  const requestedTitle = req.body.requestedTitle;
  const match = database.filter(data => data.title.toLowerCase().includes(requestedTitle));
  matchingTitles = match;
  res.redirect("/result");
});

app.listen(3000, () => console.log("server started"));
