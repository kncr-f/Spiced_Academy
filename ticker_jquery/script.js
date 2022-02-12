(function () {

    //ticker_top

    var jQheadlines = $('#headlines');
    console.log(jQheadlines);
    var jQleft = jQheadlines.offset().left;


    var linksTop = $(".item1");

    var reqId;

    function moveHeadlines() {
        jQleft--;


        if (jQleft <= - linksTop.eq(0).outerWidth()) {
            // console.log(linksTop.eq(0).outerWidth())
            jQleft += linksTop.eq(0).outerWidth();

            jQheadlines.append(linksTop.eq(0));
            linksTop = $("a");


        }

        jQheadlines.css({
            left: jQleft + "px"
        })

        reqId = requestAnimationFrame(moveHeadlines);


    }

    moveHeadlines();



    linksTop.on("mouseenter", function fn(e) {
        cancelAnimationFrame(reqId);
        $(e.currentTarget).css({
            color: "blue"
        })

    })
    linksTop.on("mouseleave", function fn(e) {
        moveHeadlines();
        $(e.currentTarget).css({
            color: "tomato"
        })

    })




    //ticker_bottom

    var jQmyTicker = $("#headlines2");
    console.log(jQmyTicker[0]);

    var jQleftBottom = jQmyTicker.offset().left;


    var linksBottom = $(".items");
    console.log(linksBottom.length);
    console.log(linksBottom.eq(6));

    var delId;



    console.log(jQleftBottom)

    function moveTicker() {
        jQleftBottom++;



        if (jQleftBottom >= 0) {

            jQleftBottom -= linksBottom.eq(linksBottom.length - 1).outerWidth();
            jQmyTicker.prepend(linksBottom.eq(linksBottom.length - 1));
            linksBottom = $(".items")


        }

        jQmyTicker.css({
            left: jQleftBottom + "px"
        })


        delId = requestAnimationFrame(moveTicker)
    }

    moveTicker();



    linksBottom.on("mouseenter", function fn(e) {
        cancelAnimationFrame(delId);
        $(e.currentTarget).css({
            color: "darkblue"
        })

    })

    linksBottom.on("mouseleave", function fn(e) {
        moveTicker();
        $(e.currentTarget).css({
            color: "brown"
        })

    })

    // for (var i = 0; i < links.length; i++) {
    //     links[i].addEventListener("mouseenter", function (e) {

    //         cancelAnimationFrame(delId);

    //         e.target.style.color = "darkblue"
    //     });

    //     links[i].addEventListener("mouseleave", function (e) {
    //         moveTicker();
    //         e.target.style.color = "brown"

    //     })
    // }


})()
