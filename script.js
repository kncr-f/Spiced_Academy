// Function Expressions

const myFunction = function (num) {
    return function double() {
        console.log(num * 2)
    }
}
myFunction(8)();

const result = myFunction(7);
result();


var count = 0;

var count = 2;

console.log(count);

const bond = {
    first: "James",
    last: "Bond",
    introduce: function () {

        console.log(this.last);
        setTimeout(function () {
            console.log(`${this.first} ${this.last}`)
        }, 2000)
    }
}

bond.introduce() //==> returns undefined undefined, because in setTimeout scope this is not defined.


const bond2 = {
    first: "James",
    last: "Bond",
    introduce: function () {
        var name = this;
        console.log(this.last);
        setTimeout(function () {
            console.log(`${name.first} ${name.last}`)
        }, 2000)
    }
}

bond2.introduce(); //==> returns James Bond, because  we defined this as name.

const bond3 = {
    first: "James",
    last: "Bond",
    introduce: function () {

        console.log(this.last);
        setTimeout(() => {
            console.log(`${this.first} ${this.last}`)
        }, 2000)
    }
}

bond3.introduce() // ==> returns James Bond, because we use array function, that is why we do not need to denife this.

