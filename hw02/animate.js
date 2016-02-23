var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.fillStyle = "#FF0000";

var radius = 0, dA = -4;
function dCircle(){
  if(radius >= Math.max(canvas.height, canvas.width) / 2 || radius <= 0) dA *= -1;
  radius += dA;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2* Math.PI);
  ctx.stroke();
  ctx.fill();
  window.requestAnimationFrame(dCircle);
}

window.requestAnimationFrame(dCircle);
