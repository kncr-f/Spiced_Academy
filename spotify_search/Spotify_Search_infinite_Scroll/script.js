(function () {

    var baseUrl = "https://spicedify.herokuapp.com/spotify";

    function generateNextUrl(next) {
        var nextUrl = next && next.replace('api.spotify.com/v1/search', 'spicedify.herokuapp.com/spotify');
        return nextUrl;
    }

    function generateHtml(arg) {

        var resultsHtml = "";
        var defaultImage = 'https://secureservercdn.net/198.71.233.72/inn.208.myftpupload.com/wp-content/uploads/woocommerce-placeholder-600x600.png';
        if (arg.items.length <= 0) {
            var noResult = "<p> No results found</p>";
            $(".results-container").html(noResult);
        } else {
            for (var i = 0; i < arg.items.length; i++) {

                if (arg.items[i].images.length > 0) {

                    defaultImage = arg.items[i].images[0].url;
                }

                resultsHtml += "<div id='text'> <a href='" + arg.items[i].external_urls.spotify + "'>" + arg.items[i].name + "</a> </div>" +
                    " <a href='" + arg.items[i].external_urls.spotify + "'>" + "<img src='" + defaultImage + "'/>'" + "</a>"

            }
            return resultsHtml;

        }
    }

    $(".submit-button").on("click", function () {

        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();

        $.ajax({
            url: baseUrl,
            method: "GET",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                var response = response.albums || response.artists;
                var html = generateHtml(response);

                $(".results-container").html(html);

                nextUrl = generateNextUrl(response.next);

                if (nextUrl) {

                    infiniteCheck()
                }

            },
            error: function errorHandler(err) {
                console.log(err)
            },

        });

    })


    function infiniteCheck() {
        var reachBottom = $(window).height() + $(document).scrollTop() == $(document).height();
        if (reachBottom) {
            console.log("reach bottom")
            $.ajax({
                url: nextUrl,
                method: "GET",

                success: function (response) {
                    var response = response.albums || response.artists;
                    var html = generateHtml(response);
                    $(".results-container").append(html);
                    nextUrl = generateNextUrl(response.next);

                },
                error: function errorHandler(err) {
                    console.log(err)
                },
            })

        }
        setTimeout(infiniteCheck, 1000)
    }


})()