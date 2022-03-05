const http = require("http");
const fs = require("fs");
const path = require("path");
const part2 = require("./part2");


const server = http.createServer((request, response) => {
    request.on("error", (err) => {
        console.log("err in the request: ", err)
    });
    response.on("error", (err) => {
        console.log("err in the response: ", err)
    });

    if (request.method != "GET") {
        response.statusCode = 405;
        return response.end();
    }


    const myPath = path.join(__dirname, "projects", request.url);
    //console.log("myPath: ", myPath);

    const projectRoot = path.join(__dirname, "projects");
    //console.log("projectRoot: ", projectRoot);

    //again attacks this protect you
    if (!myPath.startsWith(projectRoot)) {
        response.statusCode = 403; // forbidden
        return response.end();
    }


    if (request.url === "/") {

        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        return response.end(part2.projectList(projectRoot))

    }


    fs.stat(myPath, (err, stats) => {
        if (err) {
            console.log(err);
            response.statusCode = 404; //not found;
            return response.end();
        }
        if (stats.isFile()) {
            // console.log("mypath in file...", myPath);
            //create an obj
            const contentTypes = {
                ".html": "text/html",
                ".css": "text/css",
                ".js": "text/javascript",
                ".json": "application.json",
                ".gif": "image/gif",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".png": "image/png",
                ".svg": "image/svg+xml",
            };
            // console.log("file extend is ====>", path.extname(myPath));
            const extentions = path.extname(myPath);
            const readStreamHtml = fs.createReadStream(myPath);
            response.setHeader("Content-Type", contentTypes[extentions]);
            readStreamHtml.pipe(response);

        } else {
            // this is a directory serve the index.html

            if (request.url.endsWith("/")) {

                const readStreamHtml = fs.createReadStream(myPath + "index.html");
                response.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(response);
                readStreamHtml.on("error", (err) => {
                    console.log("err in readStreamHtml", err);
                    response.statusCode = 500; // internal server error
                    response.end();
                })

            } else {

                response.setHeader("Location", request.url + "/");
                response.statusCode = 302;
                response.end();

            }

        }
    });


});

server.listen(8080, () => { console.log("portfolio server is running on port ...") });