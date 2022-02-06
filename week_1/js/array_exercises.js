// The Solutions of the 4.th Day Exercises

//1
function each(aa, bb) {
    if (Array.isArray(aa)) {
        for (var i = 0; i < aa.length; i++) {
            bb(aa[i], i)
        }
    } else if (typeof aa === "object") {
        for (var property in aa) {
            bb(aa[property], property)
        }
    }
};

each({
    a: 1,
    b: 2
}, function (val, name) {
    console.log('The value of ' + name + ' is ' + val);
});

each(['a', 'b'], function (val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
});



// 2
var aa = [1, 2, 3, 4];

function reverseArrMaker(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    console.log(newArr)
    return newArr;
};

reverseArrMaker(aa); // [4,3,2,1]
console.log(aa); // [1,2,3,4]


//3
function getLessThanZero(arr) {
    var myArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            myArr.push(arr[i])
        }
    }
    console.log(myArr)
    return myArr;

};

getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]