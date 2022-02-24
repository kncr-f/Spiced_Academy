
(function () {

    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });

    var baseUrl = "https://spicedify.herokuapp.com/spotify";

    function generateNextUrl(next) {
        var nextUrl = next && next.replace('api.spotify.com/v1/search', 'spicedify.herokuapp.com/spotify');
        return nextUrl;
    }

    function generateHtml(arg) {

        var resultsHtml = "";

        if (arg.items.length <= 0) {
            var noResult = "<p> No results found</p>";
            $(".results-container").html(noResult);
        } else {
            for (var i = 0; i < arg.items.length; i++) {



                resultsHtml = Handlebars.templates.spotify(arg);

                // resultsHtml += "<div id='text'> <a href='" + arg.items[i].external_urls.spotify + "'>" + arg.items[i].name + "</a> </div>" +
                //     " <a href='" + arg.items[i].external_urls.spotify + "'>" + "<img src='" + defaultImage + "'/>'" + "</a>"

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
