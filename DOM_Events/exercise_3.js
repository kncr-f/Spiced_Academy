var chageColor = document.querySelector('#mouseAction');

function random(num) {
    return Math.floor(Math.random() * num);
}


function randomColor() {
    return `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

chageColor.addEventListener("mousedown", () => {
    chageColor.style.backgroundColor = randomColor();
});

chageColor.addEventListener("mouseup", () => {
    chageColor.style.backgroundColor = randomColor();
});