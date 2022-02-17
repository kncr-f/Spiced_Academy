/*
function one(callback) {
    setTimeout(() => {
        console.log("1");
        callback()
    }, 2000)

}
function two(callback) {
    setTimeout(() => {
        console.log("2");
        callback();

    }, 1000)
}
function three() {
    console.log("3")
}

one(function () {
    two(three);
});
//two();
//three();

//one(two(three)); ==> two(three) return nothing also undefined that is why one() log 1 then runs callback which returns undefined...

*/