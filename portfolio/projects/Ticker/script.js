console.log("jflasjdflsafj");
(function () {

    var headlines = document.getElementById("headlines");
    var left = headlines.offsetLeft;
    var links = document.getElementsByTagName("a");
    var reqId;
    // console.log(links);

    function moveHeadlines() {
        left--;
        //left -=2;
        //left = left -1;


        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(document.getElementsByTagName("a")[0])
        }

        // if (left <= -150) {
        //     left = 100;
        // }

        headlines.style.left = left + "px";

        reqId = requestAnimationFrame(moveHeadlines);


    }

    moveHeadlines();

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (e) {
            cancelAnimationFrame(reqId);
            e.target.style.color = "blue";
            // console.log(e.target);
            // console.log(links[i]);

        })

        links[i].addEventListener("mouseleave", function (e) {
            moveHeadlines();
            e.target.style.color = "tomato";
        })
    }




})()