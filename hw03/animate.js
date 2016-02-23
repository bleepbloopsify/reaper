var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.fillStyle = "#FF0000";

var stop = false;

var radius = 0, dA = -4;
function dCircle(){
  if(radius >= Math.max(canvas.height, canvas.width) / 2 || radius <= 0) dA *= -1;
  radius += dA;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2* Math.PI);
  ctx.stroke();
  ctx.fill();
  var animationidcircle = window.requestAnimationFrame(dCircle);
  if(stop) {window.cancelAnimationFrame(animationidcircle);}
}

var circleanimation = function(){
  animationidcircle = window.requestAnimationFrame(dCircle);
}

document.getElementById('circle').addEventListener('click', circleanimation);
document.getElementById('stop').addEventListener('click', function(){
  console.log('hello');
  if(stop){
    window.requestAnimationFrame(dCircle);
     stop = false;
  }else {
    stop = true;
  }
});


var logo = new Image()
logo.src = "scythe.png";
var sx = canvas.width / 2, sy = canvas.height / 2 ;
var dsx = 1; dsy = 1;
var drawScythe = function(){
  ctx.drawImage(logo, sx, sy, 50,50 );
  if (sx >= canvas.width || sx <= 0) dsx *= -1 + (Math.random(1) - Math.random(2));
  if(sy >= canvas.height || sy <= 0) dsy *= -1;
  sx += dsx;
  sy += dsy;
  window.requestAnimationFrame(drawScythe);
};

document.getElementById('scythe').addEventListener('click', function(){
  window.requestAnimationFrame(drawScythe);
});
