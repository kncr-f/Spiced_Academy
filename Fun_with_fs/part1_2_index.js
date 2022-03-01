// Part 1

const fs = require("fs");
let currentPath = __dirname + "/files"

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, (err, content) => {
        if (err) {
            return console.log("err in readdir: ", err)
        }

        for (let i = 0; i < content.length; i++) {
            if (content[i].isDirectory()) {
                logSizes(`${path}/${content[i].name}`)
            } else if (content[i].isFile()) {
                fs.stat(`${path}/${content[i].name}`, (err, stat) => {
                    if (err) {
                        return console.log("err in stat", err)
                    }
                    console.log(`${path}/${content[i].name}`, `:`, stat.size)
                })
            }
        }

    })

}
logSizes(currentPath)

// part 2

function mapSizes(path) {

    const content = fs.readdirSync(path, { withFileTypes: true });

    // console.log("content: ", content);

    //let myObj = new Object;
    let myObj = {}


    for (let i = 0; i < content.length; i++) {

        if (content[i].isDirectory()) {
            myObj[content[i].name] = mapSizes(`${path}/${content[i].name}`)
        } else if (content[i].isFile()) {
            if (content[i].name !== '.DS_Store') {
                let stat = fs.statSync(`${path}/${content[i].name}`);
                myObj[content[i].name] = stat.size;

            }

        }

    }
    console.log(myObj);
    return myObj;

}

const result = mapSizes(currentPath);

fs.writeFileSync(currentPath + "/files.json", JSON.stringify(result, null, 4));




