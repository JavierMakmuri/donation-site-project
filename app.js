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
var matchingTitles = database;

// this is the interim database
var database = [
  {title: "Attack On Titan", url:"https://cdn.myanimelist.net/images/anime/10/47347l.jpg"},
  {title: "Sword Art Online", url:"https://cdn.myanimelist.net/images/anime/11/39717.jpg"},
  {title: "Naruto", url:"https://cdn.myanimelist.net/images/anime/13/17405.jpg"},
  {title: "Tokyo Ghoul", url:"https://cdn.myanimelist.net/images/anime/5/64449.jpg"},
  {title: "Re:Zero", url:"https://cdn.myanimelist.net/images/anime/11/79410.jpg"},
  {title: "One Piece", url:"https://cdn.myanimelist.net/images/anime/6/73245.jpg"},
  {title: "My Hero Academia", url:"https://cdn.myanimelist.net/images/anime/10/78745.jpg"},
  {title: "Demon Slayer", url:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"},
  {title: "Konosuba" ,url:"https://cdn.myanimelist.net/images/anime/8/77831.jpg"},
  {title: "Black Clover", url:"https://cdn.myanimelist.net/images/anime/2/88336.jpg"},
  {title: "Hunter x Hunter", url:"https://cdn.myanimelist.net/images/anime/11/33657.jpg"}
]


app.get("/", (req, res) => {
  res.render("home");
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