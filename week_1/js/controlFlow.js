

// Exercises of 2. day

// 1

function logType(data) {
    if (typeof data === "undefined") {
        return (console.log("undefined!"))
    } else if (Number.isNaN(data)) {
        return (console.log("not a number"))
    } else if (typeof data === "string") {
        return (console.log("string!"))
    } else if (data === null) {
        return (console.log("null!"))
    } else if (typeof data === "number") {
        return (console.log("number!"))
    } else if (Array.isArray(data)) {
        return (console.log("array!"))
    } else if (typeof data === "boolean") {
        return (console.log("boolean!"))
    } else if (typeof data === "bigint") {
        return (console.log("bigint!"))
    } else if (typeof data === "function") {
        return (console.log("function!"))
    } else if (typeof data === "object") {
        return (console.log("object!"))
    } else {
        return (console.log("i have no idea!"))
    }
}
logType(NaN);
logType(undefined);
logType(123);
logType("abc");
logType(null);
logType([1, 2, 3]);
logType(true);
logType(2n);
logType(function () { });
logType({});


//2

var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};
// console.log(a["New York"]);

var b = {};

for (var prop in a) {
    console.log("prop of a: ", prop)
    console.log("value of a: ", a[prop]);
    b[a[prop]] = prop;

}

console.log(b);



// 3

for (var i = 10; i > 0; i--) {
    console.log(i)
}
