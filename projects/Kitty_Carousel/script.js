(function () {
    var kitties = document.querySelectorAll("#kitties img");
    var currKitty = 0;
    var dots = document.querySelectorAll(".dot");
    var isTransitioning = false;
    var clearTimeOut;

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function (e) {
            console.log(i);
            console.log(e.target);
            var dotIdx = +e.target.id.slice(3);
            console.log(dotIdx);

            if (isTransitioning) {
                return
            }

            if (currKitty == dotIdx) {
                return

            }
            dots[dotIdx].classList.add("on");

            clearTimeout(clearTimeOut);
            moveKitties(dotIdx);

        });
    }


    function moveKitties(dotIndex) {


        kitties[currKitty].classList.remove("onscreen");
        kitties[currKitty].classList.add("exit-left");

        dots[currKitty].classList.remove("on");

        currKitty++;


        if (dotIndex != undefined) {

            currKitty = dotIndex;
        }

        if (currKitty >= kitties.length) {
            currKitty = 0;
        }

        kitties[currKitty].classList.add("onscreen");
        dots[currKitty].classList.add("on");


        isTransitioning = true;

        // console.log("current Kitty is ==> ", currKitty);

        clearTimeOut = setTimeout(moveKitties, 4000);
    }

    clearTimeOut = setTimeout(moveKitties, 1000);


    document.addEventListener("transitionend", function (e) {
        //console.log("a transition has just ended");

        // console.log(e.target.classList);
        // if (e.target.classList.contains("exit-left")) {
        //     e.target.classList.remove("exit-left")
        // }

        e.target.classList.remove("exit-left");
        isTransitioning = false

    });
})();