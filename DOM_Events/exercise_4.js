var outDiv = document.querySelector(".parent");
var innerDiv = document.querySelector(".child");

function random(number) {
    return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

outDiv.addEventListener("click", () => {
    outDiv.style.backgroundColor = randomColor();
});

innerDiv.addEventListener("click", (e) => {
    innerDiv.style.backgroundColor = randomColor();
    e.stopPropagation();
})




