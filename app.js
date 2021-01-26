// this is the interim database
const database = [
  {title: "Attack On Titan", url:"https://cdn.myanimelist.net/images/anime/10/47347l.jpg"},
  {title: "Sword Art Online", url:"https://cdn.myanimelist.net/images/anime/11/39717.jpg"},
  {title: "Naruto", url:"https://cdn.myanimelist.net/images/anime/5/17407.jpg"},
  {title: "Tokyo Ghoul", url:"https://cdn.myanimelist.net/images/anime/5/64449.jpg"},
  {title: "Re:Zero", url:"https://cdn.myanimelist.net/images/anime/11/79410.jpg"},
  {title: "One Piece", url:"https://cdn.myanimelist.net/images/anime/6/73245.jpg"},
  {title: "My Hero Academia", url:"https://cdn.myanimelist.net/images/anime/10/78745.jpg"},
  {title: "Demon Slayer", url:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"},
  {title: "Konosuba" ,url:"https://cdn.myanimelist.net/images/anime/8/77831.jpg"},
  {title: "Black Clover", url:"https://cdn.myanimelist.net/images/anime/2/88336.jpg"},
  {title: "Hunter x Hunter", url:"https://cdn.myanimelist.net/images/anime/11/33657.jpg"},
  {title: "Dr. Stone", url:"https://cdn.myanimelist.net/images/anime/1711/110614.jpg"},
  {title: "The Promised Neverland", url:"https://cdn.myanimelist.net/images/anime/1125/96929.jpg"},
  {title: "Horimiya", url:"https://cdn.myanimelist.net/images/anime/1791/110336.jpg"},
  {title: "Violet Evergarden", url:"https://cdn.myanimelist.net/images/anime/1795/95088.jpg"},
  {title: "Haikyu!!", url: "https://cdn.myanimelist.net/images/anime/7/76014.jpg"},
  {title: "One Punch Man", url: "https://cdn.myanimelist.net/images/anime/12/76049.jpg"},
  {title: "The Seven Deadly Sins", url: "https://cdn.myanimelist.net/images/anime/8/65409.jpg"},
  {title: "Fullmetal Alchemist", url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"},
  {title: "Gintama", url: "https://cdn.myanimelist.net/images/anime/3/72078.jpg"},
  {title: "Your Lie in April", url: "https://cdn.myanimelist.net/images/anime/3/67177.jpg"},
  {title: "Vinland Saga", url: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg"},
  {title: "JoJo's Bizarre Adventure", url: "https://cdn.myanimelist.net/images/anime/3/40409.jpg"},
  {title: "Steins;Gate", url: "https://cdn.myanimelist.net/images/anime/5/73199.jpg"},
  {title: "My youth romantic comedy is wrong as I expected", url: "https://cdn.myanimelist.net/images/anime/1958/107912.jpg"},
  {title: "Rascal Does Not Dream of Bunny Girl Senpai", url: "https://cdn.myanimelist.net/images/anime/1301/93586.jpg"}
]

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { title } = require("process");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');


/*
  this variable hold the previous search result
  note: this is done to prevent browser pop-up upon refresh
 */
var matchingTitles = database

function randomize(){
  for (var a = [0, 1, 2, 3, 4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], i = a.length; i--; ) {
  var number = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
  } 
  return number;
}




app.get("/", (req, res) => {
  res.render("home", {matchingTitles: matchingTitles,random:randomize()});
  matchingTitles = database;
  random = randomize();
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
