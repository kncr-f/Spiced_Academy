const EventEmitter = require("events");

class Countdown extends EventEmitter {
    constructor(num) {
        super();
        this.num = num;
    }
    secondElapsed() {
        let second = this.num;
        const down = () => {
            if (second >= 0) {
                setTimeout(() => {
                    this.emit("secondElapsed", second);
                    second--;
                    down();
                }, 1000)
            }
        }
        down()
    }

}

exports.Countdown = Countdown;

