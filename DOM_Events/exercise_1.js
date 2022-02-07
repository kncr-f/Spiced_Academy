
var movingDiv = document.querySelector("#div1");

var divWidth = 100;
var divHeight = 100;
var newX, newY;

document.addEventListener("mousemove", function (e) {


    var mX = (e.clientX);
    var mY = (e.clientY);

    newX = mX - (divWidth / 2);
    newY = mY - (divHeight / 2);

    movingDiv.style.left = newX + "px";
    movingDiv.style.top = newY + "px";



});
