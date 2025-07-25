const express = require("express");

const app = express();

app.get("/", (req, res) => {
    console.log("Got a request")
    res.send("סתמי תפה טוהר");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})