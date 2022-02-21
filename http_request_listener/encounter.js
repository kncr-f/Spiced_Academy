const http = require("http"); //http is an object;

const server = http.createServer((request, response) => {
    request.on("eror", (err) => {
        console.log("err in the request: ", err)
    });
    response.on("eror", (err) => {
        console.log("err in the response: ", err)
    });
    const { method, url, headers } = request;
    console.log("HTTP request method", method);
    console.log("HTTP request url", url);
    console.log("HTTP request headers", headers);

    if (request.method === "GET") {
        //here if blocks for url

        if (request.url === "/private") {
            console.log("PRIVATE: ypu may not view this. REDIRECT TO ROOT ROUTE");
            response.setHeader("Location", "/");
            response.statusCode = 302;

        } else {
            response.setHeader("Content-Type", "text/html");
            response.statusCode = 200;
            response.write(`<h1>Hello from the server</h1>`);

            // response.end(`<h1>Hello from the server</h1>`) => short version

        }
        response.end()
    } else if (request.method === "POST") {

        let body = "";
        request.on("data", (chunk) => body += chunk);
        request.on("end", () => {
            console.log("body: ", body)
            response.setHeader("Content-Type", "text/html");
            response.statusCode = 200;
            response.write(`<h1>that is a post request</h1>`);
            response.end();
            // response.end(`<h1>Hello from the server</h1>`) => short version

        })


    } else if (request.method === "PUT") {
        console.log("you made s PUT request")
    } else if (request.method === "HEAD") {
        console.log("you just made a HEAD request")
    } else {
        console.log("ohh  no 🤷🏼‍♂️")
    }

}); // createServer() is a method of http object an takes two arguments they are object request and response

server.listen(8080, () => { console.log("Server listening on port ...") });