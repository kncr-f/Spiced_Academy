const Countdown = require('./countdown').Countdown;
//console.log(Countdown)
const countdown = new Countdown(10);
countdown.secondElapsed();

countdown.on('secondElapsed', function (timeLeft) {
    if (timeLeft > 0) {
        console.log(timeLeft);
    } else {
        console.log('lift off!');
    }
});
