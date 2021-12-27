// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];      //array to add new list items

app.set("view engine", "ejs");      //starting EJS engine

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);  //to convert date in English format

    res.render("list", {            //render function in EJS to transfer values to ejs template
        kindOfDay: day,
        newListItems: items
    });

});

app.post("/", function (req, res) {

    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server started at 3000!!!");
});