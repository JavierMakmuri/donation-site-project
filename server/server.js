const express = require("express");

const app = express();

/* 
This sends request for titles from client
This will be updated by using a db instead of a hard coded array
*/
app.get("/api/getTitle", (req,res) => {
    const titles = [
        {id:1, title: "Attack On Titan"},
        {id:2, title: "Sword Art Online"},
        {id:3, title: "Naruto"},
        {id:4, title: "Tokyo Ghoul"},
        {id:5, title: "Re:Zero"},
        {id:6, title: "One Piece"},
        {id:7, title: "My Hero Academia"},
        {id:8, title: "Demon Slayer"},
        {id:9, title: "Konosuba"},
        {id:10, title: "Black Clover"}
    ]

    res.json(titles);
});

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});