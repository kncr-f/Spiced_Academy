const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const projects = require("./projects.json");

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {

    res.render("welcome", {
        layout: "main",
        projects,


    });

});

app.get("/projects/:project", (req, res) => {

    const { project } = req.params;

    const match = projects.find((item) => item.directory === project);

    if (!match) {
        console.log("send a 404 eror")
    }

    res.render("description", {
        layout: "main",
        match,
        projects
    });

});




app.listen(8080, () => console.log("Server listening..."));


