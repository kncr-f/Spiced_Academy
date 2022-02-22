var PLAYER_1 = "player1";
var PLAYER_2 = "player2"
var currentPlayer = PLAYER_1;
var minimumSlot = 4;

function togglePlayer() {

    // currentPlayer = currentPlayer === "player1" ? "player2" : "player1"
    if (currentPlayer === PLAYER_1) {
        currentPlayer = PLAYER_2;
    } else if (currentPlayer === PLAYER_2) {
        currentPlayer = PLAYER_1;

    }
}

$("#board").on("click", ".col", function (event) {


    var colSlots = $(event.currentTarget).children();
    //console.log(colSlots);

    for (var i = colSlots.length - 1; i >= 0; i--) {

        var slot = $(colSlots).eq(i);

        if (!(slot.hasClass("player1") || slot.hasClass("player2"))) {
            slot.addClass(currentPlayer);

            // All Victory Possibilities check
            var verticalVictory = checkForVictory(colSlots);
            var rowVictory = checkrowVictory();
            var diagonalVictory = checkDiagonalVictory();

            if (verticalVictory || rowVictory || diagonalVictory) {
                //location.reload();
                $(".won").show();
            }
            togglePlayer();
            break;
        }

    }

})

//Horizontal Victory Check
function checkrowVictory() {

    var cols = $(".col").length;
    var rows = $(".col").eq(0).children().length;

    for (var i = 0; i < rows; i++) {
        var myCol = $(".col");
        var myArr = []
        for (var j = 0; j < cols; j++) {
            var rowSlot = myCol.eq(j).children().eq(i)
            myArr.push(rowSlot)
        }

        if (checkForVictory(myArr)) {
            togglePlayer();

            //console.log("true")
            return true;

        }
        // console.log(myArr)
    }


}

//Find All Diagonal Possibilities

function allDiagonalCalculate(min_diagonal_count) {

    var result = [];
    var types = ["right45", "left45"];

    var columnCount = $(".col").length;
    console.log(columnCount)
    var rowCount = $(".col").eq(0).children().length;
    console.log(rowCount)

    for (var i = 0; i < types.length; i++) {

        for (var col = 0; col < columnCount; col++) {

            for (var row = 0; row < rowCount; row++) {

                var diagonal = [];

                for (var shiftValue = 0; shiftValue < min_diagonal_count; shiftValue++) {

                    var x, y;

                    if (types[i] == "left45") {
                        x = col + shiftValue;
                        y = row + shiftValue;
                    } else {
                        x = col - shiftValue;
                        y = row + shiftValue;
                    }

                    if (x >= 0 && x < columnCount && y >= 0 && y < rowCount) {
                        diagonal.push({
                            x: x,
                            y: y
                        })

                    }

                }

                if (diagonal.length >= min_diagonal_count) {
                    result.push(diagonal)
                }

            }

        }
    }
    console.log(result);
    return result

}

var allDiagonals = allDiagonalCalculate(minimumSlot);
//console.log(allDiagonals)

//Diagonal Victory Check

function checkDiagonalVictory() {

    // var DIAGONALS = [
    //     [$("#3"), $("#8"), $("#13"), $('#18')],
    //     [$("#4"), $("#9"), $("#14"), $("#19"), $("#24")],
    //     [$("#5"), $("#10"), $("#15"), $("#20"), $("#25"), $("#30")],
    //     [$("#11"), $("#16"), $("#21"), $("#26"), $("#31"), $("#36")],
    //     [$("#17"), $("#22"), $("#27"), $("#32"), $("#37")],
    //     [$("#23"), $("#28"), $("#33"), $("#38")],
    //     [$("#2"), $("#9"), $("#16"), $("#23")],
    //     [$("#1"), $("#8"), $("#15"), $("#22"), $("#29")],
    //     [$("#0"), $("#7"), $("#14"), $("#21"), $("#28"), $("#35")],
    //     [$("#6"), $("#13"), $("#20"), $("#27"), $("#34"), $("#41")],
    //     [$("#12"), $("#19"), $("#26"), $("#33"), $("#40")],
    //     [$("#18"), $("#25"), $("#32"), $("#39")],
    // ];

    var playerCircles = [];

    $("." + currentPlayer).each(function (i, el) {
        var y = $(el).index();
        var x = $(el).parent().index();
        playerCircles.push({
            x: x,
            y: y
        });
    });

    //console.log(playerCircles)

    for (var i = 0; i < allDiagonals.length; i++) {

        var currentCircles = allDiagonals[i];

        var counter = 0;
        for (var j = 0; j < currentCircles.length; j++) {

            var currentCircle = currentCircles[j];

            for (var m = 0; m < playerCircles.length; m++) {

                if (playerCircles[m].x == currentCircle.x && playerCircles[m].y == currentCircle.y) {

                    counter++;
                }
            }

        }

        if (counter >= minimumSlot) {
            return true
        }

    }

    return false;

}


//Victory Check Function
function checkForVictory(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        var currentPlaySlot = $(slots[i]).hasClass(currentPlayer);

        if (currentPlaySlot) {
            count++;
            if (count >= minimumSlot) {

                return true
            }
        } else {
            count = 0;
        }
    }

    return false
}

// Add column Row listeners
$(document).ready(() => {
    $("#add_column").on("click", function () {
        $('.col').last().clone().appendTo("#board");
        console.log(columnCount)

    });

    $("#remove_column").on("click", function () {
        $('.col').last().remove();

    });

    $("#add_row").on("click", function () {
        var cloneRow = $(".slot").eq(0).clone();
        console.log(cloneRow)
        $('.col').append(cloneRow);

    });



    $("#remove_row").on("click", function () {
        $('.col').each(function (i, col) {
            $(col).find(".slot:last").remove();
        });

    });

    $("#minimum_slot").on("change", function () {
        minimumSlot = parseInt($(this).val()); //+$()

        allDiagonals = allDiagonalCalculate(minimumSlot);
    });
});


