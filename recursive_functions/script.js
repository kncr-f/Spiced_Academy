//Recurtion Functions

const tick = (n) => {
    //Stop condition n>0;
    if (n > 0) {
        console.log(n);
        setTimeout(() => {
            //recursion function with updated argument;
            tick(n - 1)
        }, 1000)
    }
}
tick(10);

function increaseOrderOfMagnitude(n) {

    if (n >= 1) {
        if (n < 1000000) {
            n = increaseOrderOfMagnitude(n * 10);
        }
    } else {
        n = 'ERROR';
    }

    return n;
}
let result = increaseOrderOfMagnitude(7);

console.log(result);