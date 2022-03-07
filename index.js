const PORT = 8080;
const express = require("express");
const app = express();
const path = require("path");
const part2 = require("./part2");
const cookieParser = require('cookie-parser')

const basicAuth = require('basic-auth');

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != 'sss' || creds.pass != 'vel') {
        res.setHeader('WWW-Authenticate', 'Basic realm="Enter your credentials to see this stuff."');
        res.sendStatus(401);
    } else {
        next();
    }
};

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use((req, res, next) => {
    if (req.cookies.userAccepted) {
        next();
    } else {
        if (req.url !== "/cookies") {
            res.cookie("lastVisitedPath", req.url);
            res.redirect("/cookies");
        }
        else {
            next();
        }
    }
    //except cookie page this logic should work
})

const projectRoot = path.join(__dirname, "projects");

app.get("/cookies", (req, res) => {

    res.sendFile(`${__dirname}/cookies.html`);
    console.log("COOKIES", req.cookies);

})

app.get("/", (req, res) => {

    res.send(part2.projectList(projectRoot));


})

app.use("/connect_four", auth);


app.post("/cookies", (req, res) => {
    console.log("inputNameValue", req.body.checkBox);
    if (req.body.checkBox === "on") {
        res.cookie("userAccepted", true);

        if (req.cookies.lastVisitedPath) {
            res.redirect(req.cookies.lastVisitedPath);
        }
        else {
            res.redirect("/");
        }

    }
    else {
        res.redirect("/cookies");
    }
})

app.use(express.static(projectRoot));




app.listen(PORT, () => { console.log(`✅ listening on port ${PORT}\n\nhttp://localhost:${PORT}`) });