const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {

    request.on("error", (err) => {
        console.log("err in the request: ", err)
    });
    response.on("error", (err) => {
        console.log("err in the response: ", err)
    });

    const { method, url, headers } = request;
    console.log("HTTP request method", method);
    console.log("HTTP request url", url);
    console.log("HTTP request headers", headers);

    //part 2
    fs.appendFile("requests.txt", `${new Date()}\t${method}\t${url}\t${headers["user-agent"]}\n`, (err) => {
        console.log("Error appendFile", err)
    });

    if (request.method === "GET") {


        // Bonus part
        if (url === "/") {
            response.setHeader("Content-Type", "text/html");
            response.statusCode = 200;
            response.write(`
                 <!doctype html>
                    <html>
                        <title>Hello World!</title>
                        <p>Hello World!</p>
                    </html>
            `);
            response.end();

        } else if (url === "/requests.txt") {
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            fs.createReadStream("requests.txt").pipe(response);
            // fs.createReadStream("requests.txt", { autoClose: true }).pipe(response, { end: true })
        }


    } else if (request.method === "POST") {

        let body = "";
        request.on("data", (chunk) => body += chunk);
        request.on("end", () => {
            console.log("that is a POST request....")
            response.setHeader("Location", "/");
            response.statusCode = 302;
            response.end();
            // response.end(`<h1>Hello from the server</h1>`) => short version

        })

    } else if (request.method === "HEAD") {

        console.log("that is a HEAD request....")
        response.setHeader("Content-Type", "text/html");
        response.statusCode = 200;
        response.end();

    } else {
        console.log("ohh  no 🤷🏼‍♂️");
        response.statusCode = 405;
        response.end();
    }


});

server.listen(8080, () => { console.log("Server listening on port ...") });