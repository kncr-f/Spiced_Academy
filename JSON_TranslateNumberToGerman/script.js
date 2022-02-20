function askForNumber() {
    var num = prompt('Please enter a number between 1 and 10');
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error('Bad number');
}


function translateNumberToGerman() {

    try {
        var myNumber = askForNumber()

        if (myNumber == 1) {
            return "eins"
        } else if (myNumber == 2) {
            return "zwei"
        } else if (myNumber == 3) {
            return "drei"
        } else if (myNumber == 4) {
            return "vier"
        } else if (myNumber == 5) {
            return "fünf"
        } else if (myNumber == 6) {
            return "sechs"
        } else if (myNumber == 7) {
            return "sieben"
        } else if (myNumber == 8) {
            return "acht"
        } else if (myNumber == 9) {
            return "neun"
        } else if (myNumber == 10) {
            return "zehn"
        }

    } catch (err) {
        console.log("ERROR")
    }

    return myNumber
}

var result = translateNumberToGerman();
console.log(result)

