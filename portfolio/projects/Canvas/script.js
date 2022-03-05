var canvas = document.querySelector("canvas");
//var canvas = document.getElementsByName("canvas");

var ctx = canvas.getContext('2d');
// console.log(ctx);
/*
ctx.beginPath();

ctx.fillStyle = "salmon";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();
ctx.moveTo(150, 50);
ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.lineTo(50, 350);
ctx.lineTo(350, 350);
ctx.lineTo(150, 50);
ctx.fillStyle = '#D1D0A3'
ctx.fill();
ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.arc(350, 100, 50, 0, Math.PI * 2);
//ctx.arc(350, 100, 50, 2, 5);


ctx.fillStyle = '#7C6C77';

ctx.fill();

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 100, 50, 0, Math.PI * 2);
ctx.fillStyle = 'purple';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillRect(400, 400, 80, 60);

ctx.beginPath();

ctx.strokeRect(20, 10, 100, 100);

ctx.clearRect(40, 40, 200, 200);

//
*/


// ctx.strokeStyle = '#500';
// ctx.beginPath();
// ctx.moveTo(100, 0);
// ctx.lineTo(0, 200);
// ctx.lineTo(100, 0);
// ctx.lineTo(200, 200)
// ctx.lineTo(0, 200);
// ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 4;
ctx.fillStyle = '#7C6C77';

ctx.arc(250, 90, 60, 0, Math.PI * 2);
//ctx.arc(350, 100, 50, 2, 5);
ctx.stroke();

ctx.moveTo(250, 150);
ctx.lineTo(250, 350);
//ctx.arc(350, 100, 50, 2, 5);

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







