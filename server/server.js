const express = require("express");

const app = express();

/* 
This sends request for titles from client
This will be updated by using a db instead of a hard coded array
*/
app.get("/api/getTitle", (req,res) => {
    const titles = [
        {id:1, title: "Attack On Titan",url:"https://cdn.myanimelist.net/images/anime/10/47347l.jpg"},
        {id:2, title: "Sword Art Online",url:"https://cdn.myanimelist.net/images/anime/11/39717.jpg"},
        {id:3, title: "Naruto",url:"https://cdn.myanimelist.net/images/anime/13/17405.jpg"},
        {id:4, title: "Tokyo Ghoul",url:"https://cdn.myanimelist.net/images/anime/5/64449.jpg"},
        {id:5, title: "Re:Zero",url:"https://cdn.myanimelist.net/images/anime/11/79410.jpg"},
        {id:6, title: "One Piece",url:"https://cdn.myanimelist.net/images/anime/6/73245.jpg"},
        {id:7, title: "My Hero Academia",url:"https://cdn.myanimelist.net/images/anime/10/78745.jpg"},
        {id:8, title: "Demon Slayer",url:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"},
        {id:9, title: "Konosuba",url:"https://cdn.myanimelist.net/images/anime/8/77831.jpg"},
        {id:10, title: "Black Clover",url:"https://cdn.myanimelist.net/images/anime/2/88336.jpg"}
    ]

    res.json(titles);
});

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});