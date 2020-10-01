const express = require("express");

const app = express();

/* 
This sends request for titles from client
This will be updated by using a db instead of a hard coded array
*/
app.get("/api/getTitle", (req,res) => {
    const titles = [
        {id:1, title: "John"},
        {id:2, title: "Bob"},
        {id:3, title: "Mary"}
    ]

    res.json(titles);
});

const port = 5000;

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});