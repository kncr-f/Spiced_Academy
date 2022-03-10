var canvasD = document.getElementById("destination_canvas");
var canvas = document.getElementById("source_canvas");

var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = '#7C6C77';

ctx.arc(250, 90, 60, 0, Math.PI * 2);

ctx.stroke();

ctx.moveTo(250, 150);
ctx.lineTo(250, 350);

ctx.stroke();

ctx.moveTo(250, 220);
ctx.lineTo(140, 150);
ctx.moveTo(250, 220);
ctx.lineTo(360, 150);
ctx.moveTo(250, 350);
ctx.lineTo(350, 450);
ctx.moveTo(250, 350);
ctx.lineTo(150, 450);

ctx.stroke();

var destCtx = canvasD.getContext('2d');

var counterX = 0;
var counterY = 0;

document.addEventListener('keydown', function (e) {

    if (e.keyCode === 39) {
        counterX += 15;

        console.log(counterX);

        void destCtx.clearRect(0, 0, 500, 500);
        destCtx.drawImage(canvas, counterX, counterY, 400, 500);
    }

    if (e.keyCode === 37) {
        counterX -= 15;
        console.log(counterX)


        void destCtx.clearRect(0, 0, 500, 500);
        destCtx.drawImage(canvas, counterX, counterY, 400, 500);


    }

    if (e.keyCode === 40) {
        counterY += 15;
        console.log(counterY)

        void destCtx.clearRect(0, 0, 500, 500);
        destCtx.drawImage(canvas, counterX, counterY, 400, 500);


    }

    if (e.keyCode === 38) {
        counterY -= 15;
        console.log(counterY)

        void destCtx.clearRect(0, 0, 500, 500);
        destCtx.drawImage(canvas, counterX, counterY, 400, 500);
    }
});











