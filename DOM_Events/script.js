var button = document.getElementById("first-button");
var pageBackground = document.getElementsByTagName('body')[0];
var input = document.querySelector("input");

button.addEventListener("click", function () {
    console.log("button was clicked");
    //pageBackground.style.backgroundColor = "blue"
    document.body.style.backgroundColor = "yellow"

});

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.keyCode === 80) {
        console.log("the p key was pressed");
        document.body.style.backgroundColor = "red"
    }

})

document - addEventListener("input", function (event) {
    console.log("input is happening");
    event.target.value = "Rue is really cool"
})