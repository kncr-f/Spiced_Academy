function hey() {
    for (var i = 0; i < 5; i++) {

        setTimeout(function () {
            console.log(i)
        }, 1000)

    }
}
hey() // When we define "i" with var, setTimeout exceeds the scope and completes it up to 5 times each time until setTimeout console, then returns. 
//The result will be ==> 5 5 5 5 5
//The solution is defining "i" with let or enclosing setTimeout in iife structure.

function hey2() {
    for (let i = 0; i < 5; i++) {

        setTimeout(function () {
            console.log(i)
        }, 1000)

    }
}
hey2();

// The result will be ==>  0 1 2 3 4