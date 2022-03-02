// Function Expressions

// const myFunction = function (num) {
//     return function double() {
//         console.log(num * 2)
//     }
// }
// myFunction(8)();

// const result = myFunction(7);
// result();

// function hey() {
//     for (let i = 0; i < 5; i++) {

//         setTimeout(function () {
//             console.log(i)
//         }, 1000)

//     }
// }
// hey() // var ile tanimladigimizda setTimeout scop unu asiyor ve setTimeout console edene kadar her seferinde 5 kadar tamamliyor sonra dönüyor. cözümü let ile tanimlamak yada setTimeout u iife yapisi icine almak.

// var count = 0;

// var count = 2;

// console.log(count);

// const bond = {
//     first: "James",
//     last: "Bond",
//     introduce: function () {

//         console.log(this.last);
//         setTimeout(function () {
//             console.log(`${this.first} ${this.last}`)
//         }, 2000)
//     }
// }

// bond.introduce()


// const bond = {
//     first: "James",
//     last: "Bond",
//     introduce: function () {
//         var name = this;
//         console.log(this.last);
//         setTimeout(function () {
//             console.log(`${name.first} ${name.last}`)
//         }, 2000)
//     }
// }

// bond.introduce();

// const bond = {
//     first: "James",
//     last: "Bond",
//     introduce: function () {

//         console.log(this.last);
//         setTimeout(() => {
//             console.log(`${this.first} ${this.last}`)
//         }, 2000)
//     }
// }

// bond.introduce()

// let arr = [1, 2, 3, 4];

// let [a, b, ...rest] = arr;

// console.log(rest)

// const revesedArr = (arr) => {
//     const [...etc] = arr;
//     const newArr = etc.reverse()
//     return newArr;
// }
// console.log(revesedArr([1, "a", "b", 3, 4]));



// const twoInOne = (arg1, arg2) => {
//     const [newArr] = [[...arg1, ...arg2]]
//     return newArr
// }

// console.log(twoInOne([1, 2, 8], [1, 2, 3]))


// function logInfo(city) {
//     const { name, country, population: numPeople } = city;

//     console.log(
//         `${name} is in ${country} and has ${numPeople} inhabitants in it.`
//     );
// }

// logInfo({ name: "Marseille", country: "France", population: 861635 });


// var myCity = { city: "Istanbul", country: "Turkei" }

// let myFunction = (oooo) => {
//     return { ...oooo }
// }

// console.log(myFunction(myCity));
/*
const city1 = {
    name: "Berlin",
    country: "Germany",
};

const city2 = undefined;
// {
//     name: "istanbul",
//     country: "Turkei"
// }




let getNameAndCountry = ({ name, country }) => [name, country];
var aa = getNameAndCountry(city1);
console.log(aa)




let getRelocatedCity = (city1, city2 = { country: 'Germany' }) => {
    let [, country] = getNameAndCountry(city2);

    return {
        ...city1,
        country
    };
};


console.log(getRelocatedCity(city1, city2))



*/


// const Berlin = {
//     name: "Berlin",
//     country: "Germany",
// };

// const Amsterdam = undefined

// let getNameAndCountry = ({ name, country }) => [name, country];
// console.log(getNameAndCountry(Berlin)); // logs [ 'Berlin', 'Germany' ]


// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };

// console.log("TEST OG", getRelocatedCity(Berlin, Amsterdam));


/*
//Exercise 1

const revesedArr = (arr) => {
    const [...etc] = arr;
    const newArr = etc.reverse()
    return newArr;
}
console.log(revesedArr([1, "a", "b", 3, 4]));


const revesedArr = (arr) => {
    return [...arr].reverse()

}
console.log(revesedArr([1, "a", "b", 3, 4]));


//Exercise 2

const twoInOne = (arg1, arg2) => {
    const [newArr] = [[...arg1, ...arg2]]
    return newArr
}

console.log(twoInOne([1, 2, 8], [1, 2, 3]))



// Exercise 3

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

logInfo({ name: "Marseille", country: "France", population: 861635 });

*/

// class Rectangle {
//     constructor(w, h) {
//         this.width = w;
//         this.height = h;
//     }
//     getArea() {
//         return this.width * this.height;
//     }
// }

// class Square extends Rectangle {
//     constructor(n) {
//         super(n, n);
//     }
// }

// const square = new Square(4);
// square.getArea(); // 16


// class Square extends Rectangle {
//     constructor(n) {
//         super(n, n);
//     }
//     getArea() {
//         console.log('Calling Rectangle.prototype.getArea...');
//         return super.getArea();
//     }
// }



class Person {
    set fullName(val) {
        val = val.split(' ');
        this.firstName = val[0];
        this.lastName = val[1];
    }
    get fullName() {
        return [this.firstName, this.lastName].join(' ');
    }

}

var person = new Person;
console.log(person)
person.fullName = 'Sadie Abramowitz';

var first = person.firstName;
console.log("first", first);

var last = person.lastName; // 'Abramowitz'
console.log("last", last);

var full = person.fullName; // 'Sadie Abramowitz'
console.log("full", full)