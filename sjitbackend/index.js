const express = require("express");
const app = express();

app.get("/static",(req,res) => {
    res.sendFile("/Users/delishsasir/MYFILES/DEVLOP_PACK/MERN_STACK/DAY-2/HTML_CSS/index.html")
})


const PORT = 3001;
app.listen(PORT, () => console.log("SERVER STARTED"));
