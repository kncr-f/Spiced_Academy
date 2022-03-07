const fs = require("fs");

module.exports.projectList = function (path) {

    let result = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Projects</title></title>
    </head>
    <body>
    `;

    const content = fs.readdirSync(path, { withFileTypes: true });

    for (let i = 0; i < content.length; i++) {
        //console.log("part2 content i.....", content[i]);
        if (content[i].name !== ".DS_Store") {
            result += `
            <a style="text-decoration:none; margin:10px; color:magenta; font-size:20px;" href="${content[i].name}">${content[i].name}</a>
        `;
        }

    }

    result += `
        </body>
    </html>
    `;

    return result;


};