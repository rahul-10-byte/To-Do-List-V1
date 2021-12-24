// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

    var today = new Date();
    
    if (today.getDay() === 5) {
        res.sendFile(__dirname + "/index.html");
    }else{
        res.send("uh oh! It's Work Time!");
    }

});


app.listen(process.env.PORT || 3000, function () {
    console.log("server started at 3000!!!");
});