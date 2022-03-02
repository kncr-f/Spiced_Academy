const city1 = {
    name: "Berlin",
    country: "Germany",
};

const city2 = undefined;


//Version 1
// function getNameAndCountry(arg) {
//     var newArr = [];
//     for (property in arg) {
//         newArr.push(arg[property])
//     }
//     return newArr
// }


function getNameAndCountry(arg) {
    return [arg.name, arg.country];
}

var result = getNameAndCountry(city1);
console.log(result)


function getRelocatedCity(arg1, arg2) {
    var myObj = {};
    if (arg2 === undefined) {
        arg2 = {};
        arg2["country"] = "Germany";
    }
    var prop2 = getNameAndCountry(arg2)[1];

    for (var property in arg1) {
        myObj[property] = arg1[property]
    }

    myObj.country = prop2

    return myObj

}

const result2 = getRelocatedCity(city1, city2);
console.log(result2)