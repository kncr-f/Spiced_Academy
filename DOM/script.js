
// Solutions of the Exercises of week2 day1

//1
function styler(sel) {
    var matches = document.querySelectorAll(sel);
    for (var i = 0; i < matches.length; i++) {
        matches[i].style.fontStyle = "italic";
        matches[i].style.textDecoration = "underline";
        matches[i].style.fontWeight = "bold"
    }

}
styler(".lists");

function aa(className) {
    var myArr = document.querySelectorAll(className);
    console.log(myArr);

}
aa(".bb");


//2
function matches(className) {

    var myElement = document.getElementsByClassName(className);
    var myArr = [];
    var length = myElement.length;
    console.log(length)
    for (var i = 0; i < myElement.length; i++) {
        myArr.push(myElement[i]);
    }

    console.log(myArr);
    return myArr;

}

matches("list");
var isArr = Array.isArray(matches("list"));
console.log(isArr);


//3
function addElement() {

    var myElement = document.createElement("li");

    var content = document.createTextNode("AWESOME");

    myElement.appendChild(content);

    document.querySelector(".lastItem").appendChild(myElement);

    var style = myElement.style
    style.backgroundColor = "orange";
    style.position = "fixed";
    style.left = "20px";
    style.top = "100px";
    style.zIndex = "2147483647";
    style.fontSize = "50px";

}

document.body.onload = addElement();