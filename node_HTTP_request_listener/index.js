const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
    const { headers, method, url } = request;
    console.log("headers: ", headers);
    console.log("method: ", method);
    console.log("url: ", url)

    //Part 2
    fs.appendFile("requests.txt", `${new Date()}\t${method}\t${url}\t${request.headers["user-agent"]}\n`, (err) => {
        console.log(err)
    })

    if (request.method === 'GET') {

        request.on('error', (err) => {
            console.error(err);
        }).on('data', () => { }).on('end', () => {

            // response
            response.on('error', (err) => {
                console.error(err);
            });

            // Bonus Part
            if (url === "/") {
                response.writeHead(200, { 'Content-Type': 'text/html' })
                response.end(`
            <!doctype html>
                <html>
                    <title>Hello World!</title>
                    <p>Hello World!</p>
                </html>
            `)

            } else if (url === "/requests.txt") {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                fs.createReadStream("requests.txt", { autoClose: true }).pipe(response, { end: true })


            }

            // END OF response
        });
    } else if (request.method === 'HEAD') {

        request.on('error', (err) => {
            console.error(err);
        }).on('data', () => { }).on('end', () => {

            // response
            response.on('error', (err) => {
                console.error(err);
            });
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end()

            // END OF response
        });

    } else if (request.method === 'POST') {
        let body = '';
        request.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            body += chunk;
        }).on('end', () => {
            console.log(body);
            // response
            response.on('error', (err) => {
                console.error(err);
            });
            response.writeHead(302, { 'Location': '/' })
            response.end();

            // END OF response
        });


    } else {
        response.statusCode = 405;
        response.end();
    }
}).listen(8080);

