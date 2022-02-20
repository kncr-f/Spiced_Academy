(function () {

    function isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;

    }

    // 1. vers;
    var myText = "";

    $("textarea").on("input", function (e) {
        myText = e.target.value;
    })

    // 2. vers ==> myText = $("textarea").val();

    $("button").on("click", function () {

        if (isJsonString(myText)) {
            var result = '<p style="width:100px; color: red">  It is a JSON </p>'
            $('.result').html(result);

        } else {
            var result2 = '<p style="width:100px; color: red">  It is not a JSON </p>'
            $('.result').html(result2);
        }

    })





})()






