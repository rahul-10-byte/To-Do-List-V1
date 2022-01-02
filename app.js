// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];      //array to add new list items
const workItems = [];

app.set("view engine", "ejs");      //starting EJS engine

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function (req, res) {

    const day = date.getDate();

    res.render("list", {            //render function in EJS to transfer values to ejs template
        listTitle: day,
        newListItems: items
    });

});

app.post("/", function (req, res) {

    const item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {

    res.render("list", {listTitle: "Work List", newListItems: workItems});

});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server started at 3000!!!");
});