
module.exports.getUrlInfo = function getUrlInfo() {

    const url = require("url");
    const querystring = require("querystring");

    const test = url.parse(process.argv[2]);
    const queryParams = querystring.parse(test.query);
    console.log("test", test)
    console.log("queryParams", queryParams)

    console.log("The protocol is", test.protocol);
    console.log("The host is", test.host);
    console.log("The hostname is", test.hostname);
    console.log("The port is", test.port);
    console.log("The pathname is", test.pathname);
    console.log("The query is", test.query);

    for (let propery in queryParams) {
        console.log(
            "The value of the " + propery + " parameter is " + queryParams[propery]
        );
    }




}
