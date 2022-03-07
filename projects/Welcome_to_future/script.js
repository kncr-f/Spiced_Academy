var hamburgerMenu = document.getElementById('hamburger');
var overlay = document.querySelector(".overlay");
var nav_menu = document.querySelector(".nav_menu");
var closeIcon = document.querySelector(".closeIcon");


hamburgerMenu.addEventListener("click", function () {
    nav_menu.classList.add('transition');
    overlay.classList.add('on');


})

closeIcon.addEventListener("click", function () {

    nav_menu.classList.remove('transition');
    overlay.classList.remove('on');

})

overlay.addEventListener('click', function () {
    nav_menu.classList.remove('transition');
    overlay.classList.remove('on');

})

$('.popupClose').on('mousedown', function fn(e) {

    $('.popup').css({
        display: "none"
    })
})


setTimeout(function onload() {

    return $('.popup').css({
        display: 'inline-flex'
    }).appendTo('body');

}, 1000);