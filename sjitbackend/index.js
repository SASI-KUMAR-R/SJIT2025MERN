const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send(
        "<h1> WELCOME  <h1/>"
    )
})


const PORT = 3001;
app.listen(PORT, () => console.log("SERVER STARTED"));
