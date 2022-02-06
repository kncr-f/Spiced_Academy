// The Solutions of the 5th Day

//1
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    // this.getArea = function(){
    //     return this.width * this.height
    // }
};


Rectangle.prototype.getArea = function () {
    return this.width * this.height
}
var rect = new Rectangle(4, 5);
console.log(rect);
console.log(rect.getArea());


function Square(num) {

    this.width = num;
    this.height = num;

};

var square = new Square(4);
console.log(square);


Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(square.getArea()); //16

console.log(rect.getArea()); //20


//2

function invertCase(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += str[i].toLowerCase();
        } else {

            newString += str[i].toUpperCase();
        }

    }
    return newString;
};

var result = invertCase("aVaCAAAaaddDDdOOOooo");
console.log(result);

// 3 Bonus

function Countdown(arg) {
    this.arg = arg;
    var result = (this.arg + 1);
    this.start = function () {
        setTimeout(() => {
            if (result > 0) {
                result--;
                console.log(result);
                this.start()

            }
        }, 1000)

    }

}

var aa = new Countdown(4);
aa.start();


