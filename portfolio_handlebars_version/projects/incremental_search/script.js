(function () {

    var search = $('input');
    var timer;

    search.on('input', function (e) {
        var requestValue = e.target.value

        clearTimeout(timer);
        timer = setTimeout(function () {
            $.ajax({
                url: "https://spicedworld.herokuapp.com/",
                data: {

                    q: requestValue
                },
                success: function successHandler(data) {
                    // console.log(data.length);
                    // $("body").html(data)

                    var currentValue = $("input").val()
                    if (currentValue === requestValue) {

                        var resultHtml = '';
                        if (data.length <= 0) {
                            var noResult = '<p style="width:100px; color: red">  NO result!!! </p>'
                            $('.result').html(noResult);
                        } else {

                            for (var j = 0; j < data.length; j++) {
                                resultHtml += '<p style="width:200px; text-align:center; font-size:18px">' + data[j] + '</p>'
                            }

                            $('.result').html(resultHtml);

                        }
                    } else {
                        return
                    }

                },
                error: function errorHandler(err) {
                    console.log(err)
                },
            })

        }, 500)

    })

    $(document).on("keydown", function (e) {

        if (e.keyCode === 40) {
            if (!$("p").hasClass("highlight")) {
                $("p").first().addClass('highlight')
            } else if ($("p").last().hasClass("highlight")) {
                return
            } else {
                var currentElement = $("p.highlight")

                currentElement.removeClass('highlight')

                currentElement.next().addClass('highlight')

            }

        }

        if (e.keyCode === 38) {

            if ($("p").first().hasClass("highlight")) {
                return
            } else if (!$("p").hasClass("highlight")) {
                return
            } else {
                var myElement = $("p.highlight")

                myElement.removeClass("highlight")
                myElement.prev().addClass("highlight")

            }

        }

        if (e.keyCode === 13) {
            $('.result').css({
                visibility: "hidden"
            })

            var myResult = $("p.highlight")[0].innerHTML

            e.target.value = myResult
        }

    })

    var result = $('.result')



    result.on("mouseover", "p", function (e) {
        $('p').removeClass('highlight')
        //result.find(e.target).addClass('highlight')       
        $(e.target).addClass("highlight")

    })


    result.on("mouseleave", "p", function (e) {
        //result.find(e.target).removeClass('highlight')
        $(e.target).removeClass('highlight')

    })

    result.on("mousedown", "p", function (e) {

        // there is no need to hidden visibility in api version
        // $('.result').css({
        //     visibility: "hidden"
        // })

        $('#input').val(e.target.innerHTML)

    })

    $("input").on('blur', function (e) {

        $('.result').css({
            visibility: "hidden"
        })

    });

    $("input").on('focus', function (e) {

        $('.result').css({
            visibility: "visible"
        })

    });

})()


