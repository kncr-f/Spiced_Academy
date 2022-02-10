
var slider = $(".slider");

slider.on('mousedown', function fn(e) {

    $(".container").on('mousemove.stopAfterMouseUp', function move(e) {

        var newX = e.clientX;
        console.log(newX)
        var maxWidth = $(".container").width();

        if (newX > maxWidth) {
            return
        } else {

            slider.css({
                left: newX
            })

            $('.top').css({
                width: newX
            })

        }



    }).on('mouseup.stopAfterMouseUp', function (e) {
        $(e.currentTarget).off('.stopAfterMouseUp');
    })



})



