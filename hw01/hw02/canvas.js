var canvas = document.getElementById("awsmeguycan");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FF0000";

ctx.beginPath()
ctx.lineTo(100,100);
ctx.lineTo(100,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineTo(200,100);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150,200,100,0,Math.PI);
ctx.stroke();
ctx.closePath();
