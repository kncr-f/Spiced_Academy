(function () {

   $.ajax({
      url: '/data.json',
      method: 'GET',
      data: {
         limit: 20
      },
      success: function (data) {
         var ticker = "";
         for (var i = 0; i < data.length; i++) {
            console.log("data[i]", data[i]);
            var href = data[i].link;
            var city = "<a href='" + href + "' class='item1'>" + data[i].myText + "</a>";
            ticker += city;
         }
         console.log("myHtml", ticker);
         $("#headlines").html(ticker);


         var jQheadlines = $('#headlines');

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
      }
   });





})()
