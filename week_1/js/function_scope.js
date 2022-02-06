// Solution of 3.Day

//1
function sum() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result = result + arguments[i]
    }
    console.log(result)
    return result
}

sum(5, 10); //15

sum(5, 10, 15); //30;

sum(5, 10, 15, 100, 200); //330



//2
function waitThenRun(arg) {
    console.log("Hello!");
    setTimeout(arg, 1500)
}

waitThenRun(function () {
    console.log("Goodbye!")
});


//3
function myFunction(num) {
    if (num <= 0 || Number.isNaN(num)) {
        return "ERROR"
    } else if (num >= 1000000) {
        return num
    } else {
        for (var i = 0; i <= num; i++) {

            if (num <= 1000000) {
                num *= 10
            }
        }

        // var i = 0;
        // do {
        //     var aa = 1;
        //     num += aa * 10
        // } while (i <= 1000000)

    }
    console.log(num)
    return num
}

myFunction(6);


// Bonus

function getTotaler() {
    var result = 0;
    return (function (num) {
        return result += num;
    })
}

var totaler = getTotaler();
console.log(totaler(1));
console.log(totaler(2));
console.log(totaler(5));
