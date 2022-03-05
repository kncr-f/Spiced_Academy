const chalk = require("chalk");
const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log("error in req: ", err));
    res.on("error", (err) => console.log("error in res: ", err));

    if (req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.write(`
        <!doctype html>
                <html>
                <title>Colors</title>
                <form method="POST">
                <input type="text" name="first" placeholder="first name" autocomplete="off">
                <select name="color">
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    <option value="gray">gray</option>
                    <option value="magenta">magenta</option>
                    <option value="cyan">cyan</option>
                </select>
                <button type="submit">Go</button>
                </form>
                </html>
        `)
        res.end();
    } else if (req.method === "POST") {
        let body = "";
        req.on("data", chunk => body += chunk);
        req.on("end", () => {
            const parseData = querystring.parse(body);
            console.log(parseData)
            res.setHeader("Content-Type", "text-html");
            res.statusCode = 200;
            res.write(`
            <!doctype html>
             <html>
                <title>it is better to have loved and lost than never to have loved at all</title>
        
                <a href="/" style="text-decoration:none"><h1 style="color: ${parseData.color};">Hello ${parseData.first}</h1></a>
            </html>
        `);
            res.end();

        })

    }

});

server.listen(8080, () => console.log("Server listening...."))