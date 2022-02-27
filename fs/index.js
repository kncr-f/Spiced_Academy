// the four functions of fs
// readFile & readFileSync inorder to reading a file
// writeFile & writeFileSync
// readdir & readdirSync
// stat & statSync =>> gives us metadatas more info about files

//Asynchronous ==>>> non-blocking
//Synchronous ==>>> it is blocking
setTimeout(() => {
    console.log("this is happening 1 sec in the future")
}, 1000);

console.log(1)

console.log(__dirname);

const fs = require("fs");
fs.readFile(arg1, arg2)
fs.readFile(`${__dirname}/text.js`, "utf8", (err, data) => {
    if (err) {
        console.log("err in readFile: ", err);
        console.log("data: ", data)
    }
});

console.log("this runs immediately");

const myFile = fs.readFileSync(`${__dirname}/text.js`, "utf8"); // ==> Sync version
console.log("hello");
console.log(myFile);

writeFile(arg1, arg2, arg3)

//

const message = `Hello everyone hakjsladkjalskdfj!!!`;
fs.writeFile(`${__dirname}/rue.txt`, message, (err) => {
    if (err) {
        return console.log("err in writeFile: ", err)
    }

    console.log("success");
});

// Synchronous version

const obj = {
    name: "Fatih",
    age: 35,
    hasPet: false
}

fs.writeFileSync(`${__dirname}/myNewFile.json`, JSON.stringify(obj, null/* i want to write all of properties */, 4))
fs.writeFileSync(`${__dirname}/myNewFile.json`, JSON.stringify(obj, ["name", "hasPet"]/* only this properties */, 4))


fs.readdir(__dirname, { withFileTypes: true }, (err, content) => {
    if (err) {
        return console.log("err in readdir: ", err)
    }

    console.log("content", content)

    for (let i = 0; i < content.length; i++) {
        console.log("each", content[i])
        console.log(content[i].isFile())
        //console.log(content[i].isDirectory())
    }
})


// //Synchronous version
const content = fs.readdirSync(__dirname, { withFileTypes: true });
console.log("content", content);
console.log(content[0].isFile());

fs.stat(`${__dirname}/text.js`, (err, stat) => {
    if (err) {
        return console.log("err in stat", err)
    }
    console.log(stat.size)
})



