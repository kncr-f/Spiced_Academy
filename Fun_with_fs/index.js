// Part 2
const fs = require("fs");
let currentPath = __dirname + "/files"
console.log(currentPath)

function mapSizes(path) {

    const content = fs.readdirSync(path, { withFileTypes: true });

    let myObj = {}

    for (let i = 0; i < content.length; i++) {
        let fileContent = content[i].name;

        if (content[i].isDirectory()) {
            myObj[fileContent] = mapSizes(`${path}/${fileContent}`)
        } else if (content[i].isFile()) {
            if (fileContent !== '.DS_Store') {
                let stat = fs.statSync(`${path}/${fileContent}`);
                myObj[fileContent] = stat.size;

            }

        }

    }

    return myObj;

}

const result = mapSizes(currentPath);

fs.writeFileSync(currentPath + "/files.json", JSON.stringify(result, null, 4));






// function aa() {
//     let arg = {};
//     arg.a = "b";
//     return arg;
// }
// let bb = aa();
// console.log(bb);



// let obj = {};
// function aa(arg) {
//     arg["a"] = "b";
//     return arg
// }

// let bb = aa(obj);
// console.log(bb);




