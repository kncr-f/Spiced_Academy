(function () {

    var myTicker = document.getElementById("headlines");

    var left = myTicker.offsetLeft;

    var links = document.getElementsByTagName("a");

    var delId;



    function moveTicker() {
        left++;

        if (left >= 0) {
            left -= links[links.length - 1].offsetWidth;
            myTicker.insertBefore(links[links.length - 1], myTicker.firstChild);

        }

        myTicker.style.left = left + "px";

        delId = requestAnimationFrame(moveTicker)
    }

    moveTicker();

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(delId);
            e.target.style.color = "darkblue"
        });

        links[i].addEventListener("mouseleave", function (e) {
            moveTicker();
            e.target.style.color = "brown"

        })
    }


})()