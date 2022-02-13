(function () {

    var nextUrl;
    var userInput;
    var artistOrAlbum;
    function ajaxRequest(arg) {
        arg = arg.artists || arg.albums;

        if (arg.items.length <= 0) {
            var noResult = "<p> No results found</p>";
            $(".results-container").html(noResult);
        } else {
            var resultsHtml = "";
            for (var i = 0; i < arg.items.length; i++) {
                var defaultImage = 'https://secureservercdn.net/198.71.233.72/inn.208.myftpupload.com/wp-content/uploads/woocommerce-placeholder-600x600.png';
                if (arg.items[i].images.length > 0) {

                    defaultImage = arg.items[i].images[0].url;
                }

                resultsHtml += "<div> <a style='text-decoration:none; color:orange; font-size:24px' href='" + arg.items[i].external_urls.spotify + "'>" + arg.items[i].name + "</a> </div>" +
                    " <a href='" + arg.items[i].external_urls.spotify + "'>" + "<img src='" + defaultImage + "'/>'" + "</a>"

            }

            $(".results-container").html(resultsHtml);

            nextUrl = arg.next && arg.next.replace('api.spotify.com/v1/search', 'spicedify.herokuapp.com/spotify');


            if (arg.next === null) {
                $(".show_more").css({
                    visibility: "hidden"
                });
            } else {
                $(".show_more").css({
                    visibility: "visible"
                });


            }

        }
    }

    $(".submit-button").on("click", function () {

        userInput = $("input").val();
        artistOrAlbum = $("select").val();

        $.ajax({
            url: 'https://spicedify.herokuapp.com/spotify',
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                ajaxRequest(response);
            },
            error: function errorHandler(err) {
                console.log(err)
            },

        });

    })

    $(".show_more").on("click", function newAjax() {
        $.ajax({
            url: nextUrl,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                ajaxRequest(response);
            },
            error: function errorHandler(err) {
                console.log(err)
            },
        })
    })

})()